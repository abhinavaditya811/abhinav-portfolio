/**
 * Experience Configuration
 *
 * Work experience, internships, and education. Each entry's `description` is a
 * list of bullet points; HTML (e.g. <b>...</b>) is allowed inside a bullet.
 */

export interface ExperienceItem {
  // Company / institution name
  name: string;
  // Role / position / degree
  role: string;
  // Location, degree subtitle, etc.
  subtitle: string;
  // Date range
  timeline: string;
  // Bullet points
  description: string[];
  // Link to company / institution
  url: string;
  // Logo path (place in /public)
  logo: string;
}

export const experienceConfig = {
  work: {
    title: "Experience",
    items: [
      {
        name: "Radius",
        role: "SDE - Applied AI & Data",
        subtitle: "Bengaluru, India",
        timeline: "Jun 2023 - Jun 2024",
        description: [
          "Shipped a production GenAI agent over the MLS listing API, letting agents query property details in natural language; caching cut response latency 40% (5s → 3s).",
          "Built Metabase dashboards on MySQL to monitor housing-sales and subscription metrics, surfacing usage patterns that drove product experiments.",
          "Ran A/B testing and funnel analysis across 1,000+ users, driving a 19% lift in sign-ups and a 17% increase in lead conversion.",
          "Led a front-end revamp of the CRM in Next.js with Redux, integrating RESTful APIs and partnering with product stakeholders to define success KPIs ahead of each release.",
        ],
        url: "https://radiusagent.com",
        logo: "/radiuslogo.jpg",
      },
      {
        name: "Radius",
        role: "SDE - DevOps & Infrastructure",
        subtitle: "Bengaluru, India",
        timeline: "Jun 2022 - Jun 2023",
        description: [
          "Established a CI/CD pipeline with GitHub Actions (78.3% test coverage), cutting build time by 57%.",
          "Instrumented Prometheus telemetry across Docker services for real-time anomaly detection on Radius Rooms, a WebRTC platform scaled to 500+ MAUs.",
        ],
        url: "https://radiusagent.com",
        logo: "/radiuslogo.jpg",
      },
    ] as ExperienceItem[],
  },

  // Internships - sourced from LinkedIn. Logos pending; empty `logo` renders a
  // monogram placeholder. Bullets are minimal/factual - flesh out as needed.
  internships: {
    title: "Internships",
    items: [
      {
        name: "Thrillophilia",
        role: "Software Development Engineer Intern",
        subtitle: "Internship",
        timeline: "Jan 2022 - May 2022",
        description: [
          "Built and shipped web features in JavaScript, collaborating through Git-based workflows.",
        ],
        url: "https://www.thrillophilia.com",
        logo: "",
      },
      {
        name: "turf Football",
        role: "Senior Editor & Head of Product Development",
        subtitle: "Delhi, India",
        timeline: "May 2020 - Jan 2022",
        description: [
          "Led editorial and product for an Indian football platform covering news, transfers, and match analysis.",
          "Drove product development as Head of Product Development (Nov 2020 - Dec 2021).",
        ],
        url: "",
        logo: "",
      },
      {
        name: "Altorum Leren",
        role: "Software Engineer Intern",
        subtitle: "Internship",
        timeline: "Jun 2021 - Jul 2021",
        description: [
          "Contributed to engineering work using Git-based development workflows.",
        ],
        url: "https://www.altorumleren.com",
        logo: "",
      },
    ] as ExperienceItem[],
  },

  education: {
    title: "Education",
    items: [
      {
        name: "Northeastern University",
        role: "MS, Data Analytics Engineering",
        subtitle: "Boston, Massachusetts",
        timeline: "Aug 2024 - Apr 2026",
        description: [
          "<b>Current CGPA: 3.87 / 4.0</b>",
          "<b>Relevant coursework:</b> MLOps, Applied Generative AI, Data Mining, Data Management for Analytics, Databases, Machine Learning.",
        ],
        url: "https://www.northeastern.edu/",
        logo: "/neulogo.png",
      },
      {
        name: "Manipal University Jaipur",
        role: "BTech, Computer & Communication Engineering",
        subtitle: "Jaipur, India",
        timeline: "Jun 2018 - Jun 2022",
        description: [
          "<b>CGPA: 8.13 / 10.0</b>",
          "<b>Leadership:</b> Captain of the university soccer team; co-mentor for Java at ACM MUJ.",
        ],
        url: "https://jaipur.manipal.edu/",
        logo: "/muj.png",
      },
    ] as ExperienceItem[],
  },
};

export type ExperienceConfig = typeof experienceConfig;
