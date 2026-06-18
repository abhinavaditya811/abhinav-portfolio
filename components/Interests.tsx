import { interestsConfig } from '@/config';
import { SocialIcon } from './icons';

export function Interests() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {interestsConfig.items.map((interest) => {
        if (interest.spotifyEmbed) {
          return (
            <div
              key={interest.title}
              className="flex flex-col gap-3 rounded-lg border border-border bg-surface/50 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="label text-[9px] text-accent">{interest.category}</span>
                <SocialIcon platform="spotify" className="h-5 w-5 text-text-faint" />
              </div>
              <h3 className="text-base font-semibold text-text">{interest.title}</h3>
              <iframe
                src={interest.spotifyEmbed}
                width="100%"
                height="152"
                style={{ borderRadius: 8 }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify playlist"
              />
            </div>
          );
        }

        return (
          <a
            key={interest.title}
            href={interest.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-lg border border-border"
          >
            {interest.image && (
              <img
                src={interest.image}
                alt={interest.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
            <div className="relative p-5">
              <span className="label text-[9px] text-accent">{interest.category}</span>
              <h3 className="mt-1 text-lg font-semibold text-text">{interest.title}</h3>
              {interest.description && (
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {interest.description}
                </p>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}
