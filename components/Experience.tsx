import type { ExperienceItem } from '@/config/experience.config';

function Item({ item }: { item: ExperienceItem }) {
  return (
    <div className="group relative pl-8 md:pl-10">
      {/* timeline rail + node */}
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent" />
      <span className="absolute left-[5px] top-5 h-[calc(100%-0.5rem)] w-px bg-border group-last:hidden" />

      <div className="rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-surface-2 p-1.5">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="font-mono text-lg font-bold text-accent">
                  {item.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-base font-semibold text-text md:text-lg">{item.role}</h3>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-accent hover:underline"
                >
                  {item.name}
                </a>
              ) : (
                <span className="font-mono text-sm text-accent">{item.name}</span>
              )}
              <p className="text-xs text-text-faint">{item.subtitle}</p>
            </div>
          </div>
          <span className="label shrink-0 text-[9px] text-text-faint tnum">{item.timeline}</span>
        </div>

        <ul className="mt-4 space-y-2 border-t border-border pt-4">
          {item.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-text-muted">
              <span aria-hidden className="select-none leading-relaxed text-accent">▹</span>
              <span className="flex-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
