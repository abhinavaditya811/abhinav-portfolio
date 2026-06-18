import { projectsConfig } from '@/config';
import { ArrowUpRight } from './icons';

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projectsConfig.items.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40 md:p-6"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold leading-tight text-text group-hover:text-accent md:text-lg">
              {project.name}
            </h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-text-faint transition-colors group-hover:text-accent" />
          </div>

          <div className="mb-2 flex flex-wrap gap-1.5">
            {project.ongoing && (
              <span className="label inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 px-2 py-0.5 text-[8px] text-accent">
                <span className="h-1 w-1 rounded-full bg-accent" />
                in progress
              </span>
            )}
            {project.badge && (
              <span className="label inline-flex w-fit items-center rounded-full border border-border px-2 py-0.5 text-[8px] text-text-muted">
                ★ {project.badge}
              </span>
            )}
          </div>

          <p className="flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>

          {project.tech && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="label rounded border border-border px-2 py-1 text-[8px] text-text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
