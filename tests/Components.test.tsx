import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { StatsBar } from '../components/StatsBar';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ContributionGraph } from '../components/ContributionGraph';
import { ExperienceList } from '../components/Experience';
import { GitHubRepos } from '../components/GitHubRepos';
import { OpenSourceContributions } from '../components/OpenSourceContributions';
import { projectsConfig, experienceConfig } from '../config';
import type { ContributionCalendar } from '../lib/github';

describe('StatsBar', () => {
  it('formats large numbers with a k suffix', () => {
    render(
      <StatsBar
        stats={{ publicRepos: 36, totalStars: 1200, mergedPRs: 27, totalContributions: 399 }}
      />,
    );
    expect(screen.getByText('36')).toBeInTheDocument();
    expect(screen.getByText('1.2k')).toBeInTheDocument();
    expect(screen.getByText('399')).toBeInTheDocument();
  });
});

describe('FeaturedProjects', () => {
  it('renders every curated project from config', () => {
    render(<FeaturedProjects />);
    for (const project of projectsConfig.items) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
  });
});

describe('ExperienceList', () => {
  it('renders each role and company from config', () => {
    render(<ExperienceList items={experienceConfig.work.items} />);
    for (const item of experienceConfig.work.items) {
      expect(screen.getByText(item.role)).toBeInTheDocument();
    }
    // Two Radius roles → company name appears for each entry.
    expect(screen.getAllByText('Radius').length).toBe(experienceConfig.work.items.length);
  });
});

describe('ContributionGraph', () => {
  it('shows the total contribution count', () => {
    const calendar: ContributionCalendar = {
      total: 399,
      weeks: [
        [
          { date: '2025-06-15', count: 0, level: 0 },
          { date: '2025-06-16', count: 4, level: 2 },
        ],
      ],
    };
    render(<ContributionGraph calendar={calendar} />);
    expect(screen.getByText('399')).toBeInTheDocument();
  });
});

describe('GitHubRepos', () => {
  it('renders repo cards with stars', () => {
    render(
      <GitHubRepos
        repos={[
          {
            name: 'CiteConnect',
            description: 'Semantic search',
            url: 'https://github.com/x/CiteConnect',
            language: 'Python',
            stars: 128,
            forks: 4,
            updatedAt: '2025-01-01',
            topics: ['showcase'],
          },
        ]}
      />,
    );
    expect(screen.getByText('CiteConnect')).toBeInTheDocument();
    expect(screen.getByText('128')).toBeInTheDocument();
  });

  it('renders nothing when there are no repos', () => {
    const { container } = render(<GitHubRepos repos={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('OpenSourceContributions', () => {
  it('renders contribution rows grouped by repo', () => {
    render(
      <OpenSourceContributions
        contributions={[
          {
            repo: 'carnageitself/HR-Capstone',
            owner: 'carnageitself',
            url: 'https://github.com/carnageitself/HR-Capstone',
            prCount: 2,
            lastTitle: 'testing change',
          },
        ]}
      />,
    );
    expect(screen.getByText('carnageitself/HR-Capstone')).toBeInTheDocument();
    expect(screen.getByText('2 merged PRs')).toBeInTheDocument();
  });
});
