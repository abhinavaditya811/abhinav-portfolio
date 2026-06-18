import type React from 'react';
import { Reveal } from './Reveal';

/**
 * A section wrapper with the instrument-panel heading: a monospace index,
 * an accent label, and a hairline rule running to the edge. Content fades in
 * on scroll via Reveal.
 */
export function Section({
  id,
  index,
  title,
  children,
  className = '',
}: {
  id?: string;
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 md:py-20 ${className}`}>
      <Reveal>
        <SectionHeading index={index} title={title} />
        {children}
      </Reveal>
    </section>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="label text-[11px] text-text-faint tnum">{index}</span>
      <h2 className="label text-[11px] text-accent whitespace-nowrap md:text-xs">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
