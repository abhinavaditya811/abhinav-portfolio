import { profileConfig } from '@/config';
import { SocialIcon, DownloadIcon } from './icons';
import { PersonaPanel } from './PersonaPanel';

export function Hero() {
  return (
    <header className="grid-backdrop relative pt-32 md:pt-44">
      {/* fade the grid out toward the content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />

      <div className="relative flex flex-col items-start gap-8 pb-14 md:pb-20">
        <div className="flex w-full flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="label mb-5 flex items-center gap-2 text-[11px] text-accent">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              available for opportunities
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-text md:text-7xl">
              {profileConfig.name.full}
            </h1>

            <p className="mb-6 mt-4 font-mono text-lg text-accent md:text-xl">
              {profileConfig.role}
            </p>

            <PersonaPanel />
          </div>

          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-border md:h-36 md:w-36">
            <img
              src={profileConfig.profileImage}
              alt={profileConfig.name.full}
              className="h-full w-full scale-105 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profileConfig.resume}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            <DownloadIcon className="h-4 w-4" />
            Résumé
          </a>

          <div className="flex items-center gap-2">
            {Object.entries(profileConfig.social).map(
              ([platform, url]) =>
                url && (
                  <a
                    key={platform}
                    href={platform === 'email' ? `mailto:${url}` : (url as string)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/50 text-text-muted transition-colors hover:border-accent/50 hover:text-text"
                  >
                    <SocialIcon platform={platform} className="h-4 w-4" />
                  </a>
                ),
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
