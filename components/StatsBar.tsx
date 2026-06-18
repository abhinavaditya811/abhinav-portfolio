import type { GitHubStats } from '@/lib/github';

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return `${n}`;
}

const Tile = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1 px-4 py-3 md:px-5">
    <span className="font-mono text-2xl font-bold leading-none text-text tnum md:text-3xl">
      {value}
    </span>
    <span className="label text-[9px] text-text-faint">{label}</span>
  </div>
);

export function StatsBar({ stats }: { stats: GitHubStats }) {
  const tiles = [
    { value: formatNumber(stats.publicRepos), label: 'repos' },
    { value: formatNumber(stats.totalStars), label: 'stars' },
    { value: formatNumber(stats.mergedPRs), label: 'merged PRs' },
    { value: formatNumber(stats.totalContributions), label: 'contributions / yr' },
  ];

  return (
    <div className="inline-flex flex-wrap divide-x divide-border rounded-lg border border-border bg-surface/50">
      {tiles.map((t) => (
        <Tile key={t.label} value={t.value} label={t.label} />
      ))}
    </div>
  );
}
