'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view. Observes sections that exist on
 * mount AND any that appear later (e.g. the client-fetched Testimonials
 * section), via a MutationObserver.
 */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    const observed = new Set<string>();
    const observeAvailable = () => {
      ids.forEach((id) => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      });
    };

    observeAvailable();

    // Re-check when the DOM changes so late-mounting sections get observed.
    const mutationObserver = new MutationObserver(() => observeAvailable());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [ids.join(',')]);

  return active;
}
