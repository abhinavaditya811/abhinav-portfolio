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
            "Architected an end-to-end <b>Generative AI Content Ecosystem</b> (Scripts, Clips, Captions) using <b>Gemini, Claude, GPT, ElevenLabs</b> and <b>DeepL</b> & Human-in-the-Loop <b>RAG pipeline</b> (Async FFmpeg, PostgreSQL, BM25, LangChain, yt-dlp) to automate <b>100%</b> of short-form script drafting, multilingual captioning in <b>33+ languages</b>, and viral highlights extraction, reducing manual curation time by <b>90%</b>, increasing content output by <b>300%</b> and saving <b>100+ labor hours</b> and an estimated annualized <b>$240k</b> for the company",
            "Deployed a <b>'PMT Agent'</b>, an autonomous <b>n8n workflow</b> orchestrating Slack, Google Drive, and Gemini APIs to auto-capture, QA, and organize social media deliverables, eliminating manual reporting bottlenecks and ensuring <b>100% data accuracy</b> for legal compliance",
            "Developed a <b>League of Legends draft prediction engine</b> using an ensemble of <b>Random Forests</b> and <b>Sequential models</b>, utilizing <b>Reinforcement Learning</b> for qualitative state evaluation and <b>Riot API</b> data to simulate probability-based draft scenarios",
            "Created an <b>Automated Viewership Dashboard</b> via a robust <b>ETL pipeline</b> aggregating metrics across <b>7 social media platforms</b>; implemented <b>Cron-based daily scheduling</b> with file locking and exponential backoff, facilitating key strategic decisions, directly aiding Sales, Content, and Partnerships teams, generating an estimated <b>$50k+</b> in annual labor savings",
            "Built a <b>semantic search engine</b> for <b>80TB</b> of unstructured media on Google Drive using <b>Gemini API</b> for automated asset tagging, reducing retrieval time from <b>~20 minutes to less than 10 seconds</b> via descriptive metadata indexing"
          ].join(" || "),
        },
        url: "https://radiusagent.com",
        logo: "/radiuslogo.png",
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
          en: "Master of Science in Data Analytics Engineering",
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
          en: "Bachelor of Technology in Computer and Communication Engineering",
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
            "<b>Co-Curricular & Leadership:</b> Head of Events (Founding Member) for <b>Glitch! Esports Society of MUJ</b> & Organizer for <b>ACM MUJ</b>"
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
