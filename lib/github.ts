/**
 * GitHub data layer (server-only)
 *
 * Fetches live data for the portfolio's "instrument panel" sections:
 *   - headline stats (repos / stars / merged PRs)
 *   - the contribution calendar (the green squares)
 *   - showcase repos (repos tagged `showcase`, falling back to top-starred)
 *   - open-source contributions (merged PRs to repos you don't own)
 *
 * Everything is fetched server-side and cached for a day via unstable_cache,
 * so visitors get static pages, the token never reaches the browser, and the
 * data refreshes itself. When GITHUB_TOKEN is absent the functions degrade to
 * null/empty so the site still builds and renders.
 */

import { unstable_cache } from 'next/cache';

const USERNAME = process.env.GITHUB_USERNAME || 'abhinavaditya811';
const TOKEN = process.env.GITHUB_TOKEN;
const REVALIDATE_SECONDS = 60 * 60 * 24; // daily
const SHOWCASE_TOPIC = 'showcase';
const MAX_REPOS = 6;
const MAX_OSS = 8;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  mergedPRs: number;
  totalContributions: number;
}

export interface ShowcaseRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
}

/** GitHub's contribution levels, 0 (none) → 4 (highest). */
export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface ContributionCalendar {
  total: number;
  weeks: ContributionDay[][];
}

export interface OpenSourceContribution {
  repo: string; // owner/name
  owner: string;
  url: string;
  prCount: number;
  lastTitle: string;
}

export interface GitHubData {
  configured: boolean;
  stats: GitHubStats;
  repos: ShowcaseRepo[];
  contributions: ContributionCalendar | null;
  openSource: OpenSourceContribution[];
}

// ---------------------------------------------------------------------------
// Low-level fetch helpers
// ---------------------------------------------------------------------------

function restHeaders(): HeadersInit {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (TOKEN) h.Authorization = `Bearer ${TOKEN}`;
  return h;
}

async function restGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: restHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`GitHub REST ${path} -> ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`GitHub REST ${path} failed`, err);
    return null;
  }
}

async function graphql<T>(query: string): Promise<T | null> {
  if (!TOKEN) return null;
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`GitHub GraphQL -> ${res.status}`);
      return null;
    }
    const json = await res.json();
    if (json.errors) {
      console.error('GitHub GraphQL errors', json.errors);
      return null;
    }
    return json.data as T;
  } catch (err) {
    console.error('GitHub GraphQL failed', err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Raw GitHub response shapes (only the fields we use)
// ---------------------------------------------------------------------------

interface RawRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
}

interface RawSearchIssues {
  total_count: number;
  items: { title: string; html_url: string; repository_url: string }[];
}

const LEVEL_MAP: Record<string, ContributionLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

// ---------------------------------------------------------------------------
// Section fetchers
// ---------------------------------------------------------------------------

async function fetchRepos(): Promise<{ repos: ShowcaseRepo[]; totalStars: number }> {
  const raw = await restGet<RawRepo[]>(
    `/users/${USERNAME}/repos?per_page=100&sort=updated&type=owner`,
  );
  if (!raw) return { repos: [], totalStars: 0 };

  const owned = raw.filter((r) => !r.fork && !r.archived);
  const totalStars = owned.reduce((sum, r) => sum + r.stargazers_count, 0);

  const toShowcase = (r: RawRepo): ShowcaseRepo => ({
    name: r.name,
    description: r.description,
    url: r.html_url,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    updatedAt: r.updated_at,
    topics: r.topics ?? [],
  });

  // Only surface repos that have a description.
  const described = owned.filter((r) => r.description && r.description.trim());

  // Prefer repos explicitly tagged `showcase`; otherwise fall back to the
  // most-starred (then most-recent) described repos so the section is never empty.
  const tagged = described.filter((r) => (r.topics ?? []).includes(SHOWCASE_TOPIC));
  const pool = tagged.length > 0 ? tagged : described;

  const repos = pool
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, MAX_REPOS)
    .map(toShowcase);

  return { repos, totalStars };
}

async function fetchContributions(): Promise<ContributionCalendar | null> {
  const data = await graphql<{
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              contributionCount: number;
              date: string;
              contributionLevel: string;
            }[];
          }[];
        };
      };
    };
  }>(`query {
    user(login: "${USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays { contributionCount date contributionLevel }
          }
        }
      }
    }
  }`);

  const cal = data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal) return null;

  return {
    total: cal.totalContributions,
    weeks: cal.weeks.map((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: LEVEL_MAP[d.contributionLevel] ?? 0,
      })),
    ),
  };
}

async function fetchMergedPRs(): Promise<{ total: number; oss: OpenSourceContribution[] }> {
  const data = await restGet<RawSearchIssues>(
    `/search/issues?q=${encodeURIComponent(
      `author:${USERNAME} is:pr is:merged`,
    )}&per_page=100&sort=created&order=desc`,
  );
  if (!data) return { total: 0, oss: [] };

  // Group merged PRs by repo, excluding the user's own repos -> real OSS work.
  const byRepo = new Map<string, OpenSourceContribution>();
  for (const item of data.items) {
    // repository_url: https://api.github.com/repos/{owner}/{name}
    const slug = item.repository_url.split('/repos/')[1];
    if (!slug) continue;
    const [owner] = slug.split('/');
    if (owner.toLowerCase() === USERNAME.toLowerCase()) continue;

    const existing = byRepo.get(slug);
    if (existing) {
      existing.prCount += 1;
    } else {
      byRepo.set(slug, {
        repo: slug,
        owner,
        url: `https://github.com/${slug}`,
        prCount: 1,
        lastTitle: item.title, // results are newest-first
      });
    }
  }

  const oss = [...byRepo.values()]
    .sort((a, b) => b.prCount - a.prCount)
    .slice(0, MAX_OSS);

  return { total: data.total_count, oss };
}

// ---------------------------------------------------------------------------
// Public, cached entry point
// ---------------------------------------------------------------------------

async function loadGitHubData(): Promise<GitHubData> {
  if (!TOKEN) {
    return {
      configured: false,
      stats: { publicRepos: 0, totalStars: 0, mergedPRs: 0, totalContributions: 0 },
      repos: [],
      contributions: null,
      openSource: [],
    };
  }

  const [profile, repoData, contributions, prData] = await Promise.all([
    restGet<{ public_repos: number }>(`/users/${USERNAME}`),
    fetchRepos(),
    fetchContributions(),
    fetchMergedPRs(),
  ]);

  return {
    configured: true,
    stats: {
      publicRepos: profile?.public_repos ?? repoData.repos.length,
      totalStars: repoData.totalStars,
      mergedPRs: prData.total,
      totalContributions: contributions?.total ?? 0,
    },
    repos: repoData.repos,
    contributions,
    openSource: prData.oss,
  };
}

export const getGitHubData = unstable_cache(loadGitHubData, ['github-data'], {
  revalidate: REVALIDATE_SECONDS,
  tags: ['github'],
});
