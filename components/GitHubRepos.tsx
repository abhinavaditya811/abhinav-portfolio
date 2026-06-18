import type { ShowcaseRepo } from '@/lib/github';
import { StarIcon, ForkIcon, ArrowUpRight } from './icons';

// A small palette for the most likely languages; falls back to the accent.
const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  'Jupyter Notebook': '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Shell: '#89e051',
};

export function GitHubRepos({ repos }: { repos: ShowcaseRepo[] }) {
  if (repos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40"
        >
          <div className="mb-2 flex items-start justify-between gap-3">
            <span className="font-mono text-sm font-medium text-text group-hover:text-accent">
              {repo.name}
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-text-faint transition-colors group-hover:text-accent" />
          </div>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted line-clamp-2">
            {repo.description}
          </p>

          <div className="flex items-center gap-4 text-text-faint">
            {repo.language && (
              <span className="flex items-center gap-1.5 text-xs">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: LANG_COLORS[repo.language] || 'rgb(var(--accent))' }}
                />
                {repo.language}
              </span>
            )}
            {repo.stars > 0 && (
              <span className="flex items-center gap-1 text-xs tnum">
                <StarIcon className="h-3.5 w-3.5" />
                {repo.stars}
              </span>
            )}
            {repo.forks > 0 && (
              <span className="flex items-center gap-1 text-xs tnum">
                <ForkIcon className="h-3.5 w-3.5" />
                {repo.forks}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
