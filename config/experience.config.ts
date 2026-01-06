/**
 * Experience Configuration
 * 
 * This file contains your education and work experience.
 * Update these values to showcase your background.
 */

export interface ExperienceItem {
  // Company/Institution name
  name: string;
  // Your role/position
  role: {
    en: string;
  };
  // Subtitle (location, degree, etc.)
  subtitle: {
    en: string;
  };
  // Timeline (date range)
  timeline: {
    en: string;
  };
  // Description (detailed summary)
  description: {
    en: string;
  };
  // URL to company/institution website
  url: string;
  // Logo image path (place in /public/ folder)
  logo: string;
}

export const experienceConfig = {
  // Current section - what you're doing now (Work Experience)
  current: {
    // Section title
    title: {
      en: "Work Experience",
    },
    // Your current positions/activities
    items: [
      {
        name: "Radius",
        role: {
          en: "Software Developer Engineer",
        },
        subtitle: {
          en: "San Francisco, California",
        },
        timeline: {
          en: "June 2022 – June 2024",
        },
        description: {
          en: [
            "Led end-to-end development of a generative AI chatbot by fine-tuning OpenAI's gpt-3.5-turbo model on 500+ documents, reducing average response time from 5+ seconds to less than 3 seconds using caching.",
            "Optimised RAG retrieval by benchmarking embedding dimensions, upgrading from 384 to 1024 after K=3 evaluation to improve semantic accuracy.",
            "Identified critical user drop-off points using Heap funnels, then developed a new homepage (NextJS) based on the findings, resulting in a 19% increase in sign-ups in 3 months.",
            "Architected a CI/CD pipeline using GitHub Actions with 3 parallel jobs and esbuild; implemented automated unit tests and reported 78.3% code coverage via Codecov, contributing to a 57% reduction in build time.",
            "Led full-stack revamp of CRM tool serving 1,000+ agents, migrating from VanillaJS to ReactJS with Redux, integrating 10+ RESTful APIs, and improving lead conversion rate by 17%.",
            "Collaborated with a 12-person cross-platform team to develop 'Radius Rooms', a WebRTC solution using the Agora SDK; supported 100 concurrent users per room by implementing host, speaker, listener, and screen sharing features, resulting in 500+ monthly active users and a 6% MoM increase in user engagement."
          ].join(" || "),
        },
        url: "https://radiusagent.com",
        logo: "/radiuslogo.jpg",
      },
    ] as ExperienceItem[],
  },

  // Education section
  education: {
    // Section title
    title: {
      en: "Education",
    },
    // Your education history
    items: [
      {
        name: "Northeastern University",
        role: {
          en: "MS in Data Analytics Engineering",
        },
        subtitle: {
          en: "Boston, Massachusetts",
        },
        timeline: {
          en: "Graduating June 2026",
        },
        description: {
          en: [
            "<b>Current CGPA: 3.947/4.0</b>",
            "<b>Relevant Coursework:</b> MLOps, Applied Generative AI, Data Mining, Data Management for Analytics, Databases, Machine Learning"
          ].join(" || "),
        },
        url: "https://usc.edu/",
        logo: "/neulogo.png",
      },
      {
        name: "Manipal University Jaipur",
        role: {
          en: "BTech in Computer and Communication Engineering",
        },
        subtitle: {
          en: "India",
        },
        timeline: {
          en: "Graduated Jul 2022",
        },
        description: {
          en: [
            "<b>CGPA: 8.13/10.0</b>",
            "<b>Co-Curricular & Leadership:</b> Captain of university soccer team, co-mentor for JAVA at ACM MUJ."
          ].join(" || "),
        },
        url: "https://jaipur.manipal.edu/",
        logo: "/muj.png",
      },
    ] as ExperienceItem[],
  },

  // Keep previous for backward compatibility (maps to internships)
  previous: {
    title: {
      en: "Internships",
    },
    items: [] as ExperienceItem[],
  },
};

export type ExperienceConfig = typeof experienceConfig;
