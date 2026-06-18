'use client';

import { SECTIONS } from './sections';
import { useScrollSpy } from './useScrollSpy';

/**
 * Fixed right-side vertical scroll-position indicator. One dot per section;
 * the active dot glows and expands, and each reveals its label on hover.
 */
export function DotRail() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-4 sm:right-5"
    >
      {SECTIONS.map(({ label, id }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => go(id)}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center justify-end gap-3"
          >
            <span
              className={`label whitespace-nowrap text-[9px] transition-all duration-300 ${
                isActive
                  ? 'text-accent opacity-100'
                  : 'text-text-muted opacity-0 group-hover:opacity-100'
              }`}
            >
              {label}
            </span>
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'h-3.5 w-3.5 bg-accent ring-4 ring-accent/25'
                  : 'h-2.5 w-2.5 bg-text-faint/70 group-hover:bg-accent group-hover:ring-4 group-hover:ring-accent/15'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
