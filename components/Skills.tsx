import { skillsConfig } from '@/config';

export function Skills() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface/50">
      {skillsConfig.groups.map((group, i) => (
        <div
          key={group.category}
          className={`flex flex-col gap-3 px-5 py-4 md:flex-row md:gap-6 md:px-6 ${
            i !== 0 ? 'border-t border-border' : ''
          }`}
        >
          <span className="label shrink-0 pt-1 text-[10px] text-accent md:w-48">
            {group.category}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted transition-colors hover:border-accent/40 hover:text-text"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
