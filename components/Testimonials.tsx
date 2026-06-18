'use client';

import { useEffect, useState } from 'react';
import { SectionHeading } from './Section';
import { SocialIcon, StarIcon } from './icons';

interface Feedback {
  name: string;
  relationship: string;
  title: string;
  linkedin: string;
  text: string;
  consent: string;
  rating: number;
}

const STEIN_URL =
  'https://api.steinhq.com/v1/storages/695d0b39affba40a62363936/Form%20Responses%201';

function isAnon(consent: string) {
  return consent.toLowerCase().includes('anonymously');
}

function TestimonialCard({ t }: { t: Feedback }) {
  const [expanded, setExpanded] = useState(false);
  const anon = isAnon(t.consent);
  const name = anon ? 'Verified Professional' : t.name;
  const role = t.title || t.relationship;
  const LIMIT = 180;
  const long = t.text.length > LIMIT;
  const text = expanded || !long ? t.text : `${t.text.slice(0, LIMIT)}...`;

  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40 md:p-6">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-3.5 w-3.5 ${i < Math.round(t.rating / 2) ? 'text-accent' : 'text-border'}`}
          />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-text-muted">
        &ldquo;{text}&rdquo;
        {long && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="label ml-1.5 text-[9px] text-accent hover:underline"
          >
            {expanded ? 'less' : 'more'}
          </button>
        )}
      </p>
      <div className="border-t border-border pt-4">
        {t.linkedin && !anon ? (
          <a
            href={t.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text hover:text-accent"
          >
            {name}
            <SocialIcon platform="linkedin" className="h-3.5 w-3.5 text-[#0A66C2]" />
          </a>
        ) : (
          <p className="text-sm font-semibold text-text">{name}</p>
        )}
        <p className="label mt-0.5 text-[9px] text-text-faint">{role}</p>
      </div>
    </div>
  );
}

function QuickPraise({ r }: { r: Feedback }) {
  const anon = isAnon(r.consent);
  const name = anon ? 'Verified Colleague' : r.name;
  return (
    <div className="flex items-center gap-3 rounded-full border border-border bg-surface/50 px-4 py-2">
      <div className="flex flex-col">
        {r.linkedin && !anon ? (
          <a
            href={r.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-text hover:text-accent"
          >
            {name}
          </a>
        ) : (
          <span className="text-xs font-semibold text-text">{name}</span>
        )}
        <span className="label text-[8px] text-text-faint">{r.title || r.relationship}</span>
      </div>
      <span className="flex items-center gap-1 rounded bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-bold text-accent tnum">
        {r.rating}/10
        <StarIcon className="h-2.5 w-2.5" />
      </span>
    </div>
  );
}

export function Testimonials() {
  const [featured, setFeatured] = useState<Feedback[]>([]);
  const [quick, setQuick] = useState<Feedback[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(STEIN_URL);
        const data = await res.json();

        const consentKey =
          'Do you agree to have a quote from your feedback (anonymized or attributed to your job title/relationship) included in my professional portfolio?';
        const descKey =
          'In your own words, describe a specific successful project or moment where you felt I made a significant difference.';
        const ratingKey =
          'How would you rate my overall contribution to our shared goals/projects?';

        const all: Feedback[] = data
          .filter((row: any) => row[consentKey] && row[consentKey].toLowerCase() !== 'no')
          .map((row: any) => ({
            name: row['First and Last Name'],
            relationship: row['What is your professional relationship with me?'],
            title: row['Current job title and company'],
            linkedin: row['LinkedIn Profile'],
            text: (row[descKey] || '').trim(),
            consent: row[consentKey],
            rating: parseInt(row[ratingKey]) || 10,
          }));

        setFeatured(all.filter((f) => f.text.length > 20));
        setQuick(all.filter((f) => f.text.length <= 20));
      } catch (err) {
        console.error('Failed to fetch testimonials', err);
      }
    })();
  }, []);

  if (featured.length === 0 && quick.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 py-14 md:py-20">
      <SectionHeading index="09" title="Testimonials" />

      {featured.length > 0 && (
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      )}

      {quick.length > 0 && (
        <div className="flex flex-wrap gap-2.5">
          {quick.map((r, i) => (
            <QuickPraise key={i} r={r} />
          ))}
        </div>
      )}
    </section>
  );
}
