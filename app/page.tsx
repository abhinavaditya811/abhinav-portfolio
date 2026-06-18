import { experienceConfig, projectsConfig, interestsConfig } from '@/config';
import { getGitHubData } from '@/lib/github';

import { Nav } from '@/components/Nav';
import { DotRail } from '@/components/DotRail';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ExperienceList } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { GitHubRepos } from '@/components/GitHubRepos';
import { OpenSourceContributions } from '@/components/OpenSourceContributions';
import { Interests } from '@/components/Interests';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default async function Home() {
  const gh = await getGitHubData();

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-bg">
      <Nav />
      <DotRail />

      <main className="mx-auto max-w-5xl px-5 md:px-8">
        <Hero />

        <Section id="experience" index="01" title="Experience">
          <ExperienceList items={experienceConfig.work.items} />
        </Section>

        {experienceConfig.internships.items.length > 0 && (
          <Section id="internships" index="02" title="Internships">
            <ExperienceList items={experienceConfig.internships.items} />
          </Section>
        )}

        <Section id="education" index="03" title="Education">
          <ExperienceList items={experienceConfig.education.items} />
        </Section>

        <Section id="projects" index="04" title={projectsConfig.title}>
          <FeaturedProjects />
        </Section>

        {gh.repos.length > 0 && (
          <Section id="github" index="05" title="From GitHub">
            <GitHubRepos repos={gh.repos} />
          </Section>
        )}

        {gh.openSource.length > 0 && (
          <Section id="open-source" index="06" title="Open Source">
            <OpenSourceContributions contributions={gh.openSource} />
          </Section>
        )}

        <Section id="skills" index="07" title="Stack">
          <Skills />
        </Section>

        <Section id="interests" index="08" title={interestsConfig.title}>
          <Interests />
        </Section>

        <Testimonials />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}
