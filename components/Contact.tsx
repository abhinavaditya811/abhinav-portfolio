import { profileConfig } from '@/config';
import { SocialIcon } from './icons';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="grid-backdrop relative overflow-hidden rounded-xl border border-border bg-surface/50 p-8 text-center md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-bg/60" />
        <div className="relative flex flex-col items-center gap-6">
          <p className="label flex items-center gap-2 text-[11px] text-accent">
            <span className="font-mono text-text-faint">$</span> let&apos;s connect
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text md:text-5xl">
            Building something at the edge of AI & data?
          </h2>
          <p className="max-w-md text-text-muted">
            I&apos;m open to roles, collaborations, and good problems. My inbox is always open.
          </p>
          <a
            href={`mailto:${profileConfig.social.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            <SocialIcon platform="email" className="h-4 w-4" />
            {profileConfig.social.email}
          </a>
        </div>
      </div>
    </section>
  );
}
