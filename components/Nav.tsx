'use client';

import { useEffect, useState } from 'react';
import { profileConfig } from '@/config';
import { ThemeToggle } from './ThemeToggle';
import { SECTIONS as LINKS } from './sections';
import { useScrollSpy } from './useScrollSpy';

export function Nav() {
  const active = useScrollSpy(LINKS.map((l) => l.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 md:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-sm font-medium text-text"
        >
          <span className="text-accent">~/</span>
          {profileConfig.name.short.toLowerCase()}
        </button>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`label rounded-md px-3 py-2 text-[10px] transition-colors ${
                  active === id ? 'text-accent' : 'text-text-muted hover:text-text'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
