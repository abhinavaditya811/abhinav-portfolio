import { profileConfig, experienceConfig, projectsConfig, skillsConfig } from '@/config';

// Machine-readable profile summary, surfaced by the "Machine" persona.
export const dynamic = 'force-static';

export function GET() {
  const { name, role, location, social } = profileConfig;

  const lines: string[] = [
    `# ${name.full}`,
    '',
    `> ${role} - ${profileConfig.tagline}`,
    '',
    `Location: ${location}`,
    `Open to: full-time AI/ML & data engineering roles (graduated Apr 2026)`,
    `Email: ${social.email}`,
    `GitHub: ${social.github}`,
    `LinkedIn: ${social.linkedin}`,
    '',
    '## Experience',
    ...experienceConfig.work.items.map(
      (i) => `- ${i.role}, ${i.name} (${i.timeline}) - ${i.subtitle}`,
    ),
    '',
    '## Education',
    ...experienceConfig.education.items.map(
      (i) => `- ${i.role}, ${i.name} (${i.timeline})`,
    ),
    '',
    '## Featured projects',
    ...projectsConfig.items.map((p) => `- ${p.name}: ${p.description} (${p.url})`),
    '',
    '## Stack',
    ...skillsConfig.groups.map((g) => `- ${g.category}: ${g.items.join(', ')}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
