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
        en: "LiM: Less is More (Ongoing)",
      },
      url: "https://github.com/abhinavaditya811/LiM",
      description: {
        en: "An intelligent orchestration layer that cuts 90% of LLM costs by routing tasks to the correct, hyper-efficient small model paradigm.",
      },
    },
    {
      name: {
        en: "CiteConnect: Semantic Academic Search Engine",
      },
      url: "https://github.com/Cite-Connect",
      description: {
        en: "A scalable, end-to-end recommendation system to help researchers discover relevant academic literature through semantic search and citation graph analysis.",
      },
    },
    {
      name: {
        en: "BOTBOT: Business Optimisation Transformer BOT",
      },
      url: "https://github.com/heisenberg1804/BIBOT-genBi-hackathon",
      description: {
        en: "A multi-agent chatbot to automate business intelligence insights and visualisations from user-uploaded CSVs using LangChain.",
      },
    },
    {
      name: {
        en: "Insurance Claim Prediction",
      },
      url: "https://github.com/heisenberg1804/Predicting-Insurance-Claim-Likelihood-and-Severity-based-on-Extreme-Weather-Events",
      description: {
        en: "Built predictive models to assess flood claim approval likelihood by merging property data with storm indicators.",
      },
    },
    {
      name: {
        en: "EEG Classification Model",
      },
      url: "https://colab.research.google.com/drive/1tKZjO6JjgSJJrvmFIyhCFMqlHjLrIJO2?usp=sharing",
      description: {
        en: "Classified EEG signals into seizure vs non-seizure categories using a Convolutional Neural Network (CNN) architecture.",
      },
    },
    {
      name: {
        en: "Customer Segmentation using RFM analysis and K-means",
      },
      url: "https://github.com/abhinavaditya811/Customer-Segmentation/tree/abhinav/detailed-improvements",
      description: {
        en: "Built a customer segmentation model using RFM (Recency, Frequency, Monetary) analysis and K-means clustering to identify distinct customer groups for targeted marketing strategies, resulting in improved customer engagement and retention.",
      },
    },
    {
      name: {
        en: "Log Ingestion and Analysis Pipeline for Customer Support",
      },
      url: "https://github.com/abhinavaditya811/stressTestLog",
      description: {
        en: "Built a minimal log ingestion and analysis pipeline using Cloud Run, and Pub/Sub to process and analyze customer support logs in real-time.",
      },
    },
    {
      name: {
        en: "Sentiment Analysis using NLTK on Amazon reviews",
      },
      url: "https://github.com/abhinavaditya811/abhinavaditya811.github.io",
      description: {
        en: "Implemented a sentiment analysis model using the Natural Language Toolkit (NLTK) to classify Amazon product reviews as positive, negative, or neutral.",
      },
    },
    {
      name: {
        en: "LeetCode Solutions",
      },
      url: "https://github.com/abhinavaditya811/leetCode",
      description: {
        en: "A collection of solutions to various coding problems from LeetCode, implemented in Python, covering a wide range of topics including data structures, and algorithms.",
      },
    },
    {
      name: {
        en: "Blockchain Basics",
      },
      url: "https://github.com/abhinavaditya811/Working-of-Blockchain",
      description: {
        en: "Basic applications of blockchain including how hashes work, encryption, decryption using SHA256, and how a merkle tree is constructed to ensure data integrity and security in a blockchain network.",
      },
    },
    {
      name: {
        en: "Fight the Mind",
      },
      url: "https://github.com/abhinavaditya811/ftm-django",
      description: {
        en: "A one-stop mental health platform built using Django that provides users with resources, self-help tools, and a supportive community to promote mental well-being and resilience.",
      },
    }
  ] as ProjectItem[],
};

export type ProjectsConfig = typeof projectsConfig;
