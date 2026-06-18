import { profileConfig } from '@/config';
import { SocialIcon } from './icons';

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-border py-10 md:flex-row">
      <div className="text-center md:text-left">
        <p className="font-mono text-sm text-text">
          <span className="text-accent">~/</span>
          {profileConfig.name.short.toLowerCase()}
        </p>
        <p className="label mt-1 text-[9px] text-text-faint">
          © {new Date().getFullYear()} {profileConfig.name.full} · built with next.js
        </p>
      </div>

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
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-accent/50 hover:text-text"
              >
                <SocialIcon platform={platform} className="h-4 w-4" />
              </a>
            ),
        )}
      </div>
    </footer>
  );
}
