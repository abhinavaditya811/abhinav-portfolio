/**
 * Projects Configuration
 * 
 * This file contains your projects to showcase.
 * Update these values to display your work.
 */

export interface ProjectItem {
  // Project name/title
  name: {
    en: string;
  };
  // Project URL (GitHub, live demo, etc.)
  url: string;
  // Optional: brief description
  description?: {
    en: string;
  };
}

export const projectsConfig = {
  // Section title
  title: {
    en: "Projects",
  },

  // Your projects list
  items: [
    {
      name: {
        en: "CiteConnect: Semantic Academic Search Engine",
      },
      url: "https://github.com/Cite-Connect",
      description: {
        en: "A scalable, end-to-end recommendation system to help researchers discover relevant academic literature through semantic search and citation graph analysis",
      },
    },
    {
      name: {
        en: "BOTBOT: Business Optimisation Transformer BOT",
      },
      url: "https://github.com/heisenberg1804/BIBOT-genBi-hackathon",
      description: {
        en: "A multi-agent chatbot to automate business intelligence insights and visualisations from user-uploaded CSVs using LangChain",
      },
    },
    {
      name: {
        en: "Insurance Claim Prediction",
      },
      url: "https://github.com/heisenberg1804/Predicting-Insurance-Claim-Likelihood-and-Severity-based-on-Extreme-Weather-Events",
      description: {
        en: "Built predictive models to assess flood claim approval likelihood by merging property data with storm indicators",
      },
    }
  ] as ProjectItem[],
};

export type ProjectsConfig = typeof projectsConfig;
