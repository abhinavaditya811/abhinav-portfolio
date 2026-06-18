'use client';

import { usePersona, type Persona } from '@/contexts/PersonaContext';
import { profileConfig } from '@/config';

const OPTIONS: { key: Exclude<Persona, null>; label: string }[] = [
  { key: 'recruiter', label: 'Recruiter' },
  { key: 'engineer', label: 'Engineer' },
  { key: 'machine', label: 'Machine' },
];

const CONTENT: Record<
  Exclude<Persona, null>,
  { summary: string; highlights: string[] }
> = {
  recruiter: {
    summary:
      'Outcomes first. MS in Data Analytics Engineering at Northeastern, two years shipping AI & infrastructure at Radius - graduated Apr 2026 and open to full-time AI/ML & data roles.',
    highlights: [
      '19% sign-up lift',
      '57% faster builds',
      '1st - NEU Data Mining Hackathon',
      'GPA 3.87 / 4.0',
    ],
  },
  engineer: {
    summary:
      'I build multi-agent LLM systems and pipelines, plus the MLOps to run them in production - Vertex AI, Gemini 3 Pro, Pinecone, Airflow, and Kubernetes with drift-triggered retraining.',
    highlights: [
      'Multi-agent + RAG',
      'Vertex AI · Gemini 3 Pro',
      'Airflow · K8s · drift retraining',
      'Python · TypeScript · SQL',
    ],
  },
  machine: { summary: '', highlights: [] },
};

function MachineView() {
  const profile = {
    name: profileConfig.name.full,
    role: profileConfig.role,
    location: profileConfig.location,
    open_to: 'full-time AI/ML & data engineering roles',
    graduating: '2026-04',
    education: 'MS Data Analytics Engineering, Northeastern University',
    focus: ['multi-agent LLM systems', 'RAG', 'MLOps'],
    links: {
      github: profileConfig.social.github,
      linkedin: profileConfig.social.linkedin,
      email: profileConfig.social.email,
    },
    machine_readable: '/llms.txt',
  };

  return (
    <div className="mt-5 max-w-xl overflow-hidden rounded-lg border border-border bg-surface-2/60">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="label text-[9px] text-text-faint">profile.json</span>
        <a href="/llms.txt" className="label text-[9px] text-accent hover:underline">
          /llms.txt →
        </a>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-text-muted">
        {JSON.stringify(profile, null, 2)}
      </pre>
    </div>
  );
}

export function PersonaPanel() {
  const { persona, setPersona } = usePersona();

  return (
    <div>
      <div className="mb-5 inline-flex flex-wrap items-center gap-1 rounded-lg border border-border bg-surface/50 p-1">
        <button
          onClick={() => setPersona(null)}
          className={`label rounded-md px-3 py-1.5 text-[9px] transition-colors ${
            persona === null ? 'bg-accent text-bg' : 'text-text-muted hover:text-text'
          }`}
        >
          root
        </button>
        {OPTIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setPersona(persona === opt.key ? null : opt.key)}
            className={`label rounded-md px-3 py-1.5 text-[9px] transition-colors ${
              persona === opt.key
                ? 'bg-accent text-bg'
                : 'text-text-muted hover:text-text'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {persona === 'machine' ? (
        <MachineView />
      ) : (
        <>
          <p className="max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            {persona ? CONTENT[persona].summary : profileConfig.tagline}
          </p>

          {persona && (
            <div className="mt-4 flex flex-wrap gap-2">
              {CONTENT[persona].highlights.map((h) => (
                <span
                  key={h}
                  className="label rounded-full border border-accent/30 px-3 py-1 text-[9px] text-accent"
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          <p className="label mt-4 text-[10px] text-text-faint">
            <span className="text-text-muted">◇</span> {profileConfig.location}
          </p>
        </>
      )}
    </div>
  );
}
