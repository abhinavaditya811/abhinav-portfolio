import type { OpenSourceContribution } from '@/lib/github';
import { PullRequestIcon, ArrowUpRight } from './icons';

export function OpenSourceContributions({
  contributions,
}: {
  contributions: OpenSourceContribution[];
}) {
  if (contributions.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface/50">
      {contributions.map((c, i) => (
        <a
          key={c.repo}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2 ${
            i !== 0 ? 'border-t border-border' : ''
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            <PullRequestIcon className="h-4 w-4 shrink-0 text-accent" />
            <div className="min-w-0">
              <p className="truncate font-mono text-sm text-text group-hover:text-accent">
                {c.repo}
              </p>
              <p className="truncate text-xs text-text-faint">{c.lastTitle}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="label whitespace-nowrap text-[9px] text-text-muted tnum">
              {c.prCount} merged PR{c.prCount === 1 ? '' : 's'}
            </span>
            <ArrowUpRight className="h-4 w-4 text-text-faint transition-colors group-hover:text-accent" />
          </div>
        </a>
      ))}
    </div>
  );
}
