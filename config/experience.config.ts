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
        name: "Cloud9 Esports Inc.",
        role: {
          en: "Data Scientist",
        },
        subtitle: {
          en: "Los Angeles, California",
        },
        timeline: {
          en: "June 2024 – Present",
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
        url: "https://cloud9.gg",
        logo: "/C9_Icon_Blue_AllMode.png",
      },
      {
        name: "USC Information Sciences Institute",
        role: {
          en: "Research Assistant",
        },
        subtitle: {
          en: "Los Angeles, California",
        },
        timeline: {
          en: "Sep 2023 – May 2024",
        },
        description: {
          en: [
            "Architected a <b>RAG-based knowledge delivery system</b> integrating <b>Llama 2, Mistral</b>, and <b>Hugging Face embeddings</b>, enhancing search relevance by pinpointing QA-style results and surpassing traditional passage retrieval methods through <b>context-aware vector search</b>",
            "Spearheaded <b>prompt engineering</b> efforts to optimize <b>LLM performance</b> on domain-specific queries, integrating retrieval and generation techniques to improve answer fidelity for complex research corpora"
          ].join(" || "),
        },
        url: "https://isi.edu",
        logo: "/ISI-New-Logo.png",
      },
    ] as ExperienceItem[],
  },

  // Internship experience section
  internships: {
    // Section title
    title: {
      en: "Internships",
    },
    // Your internship positions
    items: [
      {
        name: "Nanyang Technological University",
        role: {
          en: "Research Intern",
        },
        subtitle: {
          en: "Singapore",
        },
        timeline: {
          en: "Jan 2022 – Jun 2022",
        },
        description: {
          en: [
            "Developed a <b>'Sentic Computing' framework</b> by scraping and processing <b>Twitter data</b> to assess mental well-being patterns, building a dashboard to visualize trends in online footprints via <b>NLP-driven sentiment analysis</b>",
            "Utilized a range of <b>SenticNet APIs</b> to enhance analysis validity, mapping unstructured social media text to <b>psychological indicators</b> for public health research"
          ].join(" || "),
        },
        url: "https://ntu.edu.sg",
        logo: "/ntu.png",
      },
      {
        name: "KoiReader Technologies",
        role: {
          en: "NLP Intern",
        },
        subtitle: {
          en: "India",
        },
        timeline: {
          en: "Apr 2021 – Jul 2021",
        },
        description: {
          en: [
            "Implemented <b>BERT-based Named Entity Recognition (NER)</b> models to automate information extraction from logistics documents",
            "Leveraged <b>SpaCy, OCR</b>, and <b>StanfordNLP</b> to perform <b>Coreference Resolution</b> on freight forwarding documents, significantly improving data extraction accuracy for supply chain automation, achieving <b>100% reduction</b> in manual data entry efforts for billing forms"
          ].join(" || "),
        },
        url: "https://www.koireader.com/",
        logo: "/koireader.png",
      },
      {
        name: "The Sparks Foundation",
        role: {
          en: "Data Science Intern",
        },
        subtitle: {
          en: "India",
        },
        timeline: {
          en: "Aug 2020 – Sep 2020",
        },
        description: {
          en: [
            "Mastered various concepts of <b>Data Science</b> including <b>Keras, PyTorch, TensorFlow, XGBoost</b> and <b>EDA</b> on industrial data"
          ].join(" || "),
        },
        url: "https://www.linkedin.com/company/the-sparks-foundation/",
        logo: "/tsf.png",
      },
      {
        name: "Piltover Technologies",
        role: {
          en: "Machine Learning Intern",
        },
        subtitle: {
          en: "India",
        },
        timeline: {
          en: "Aug 2019 – Aug 2020",
        },
        description: {
          en: [
            "Directed research on state-of-the-art technologies for <b>EMG data processing</b> and gained extensive knowledge in developing <b>CNN models</b> to assess and analyze EMG data to replicate gestures of a human arm and integrate them for <b>3D printed prosthetic limbs</b>"
          ].join(" || "),
        },
        url: "https://piltovertechnologies.com/",
        logo: "/piltover.png",
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
        name: "University of Southern California",
        role: {
          en: "Master of Science in Applied Data Science",
        },
        subtitle: {
          en: "Los Angeles, California",
        },
        timeline: {
          en: "Graduated Dec 2024",
        },
        description: {
          en: [
            "<b>CGPA: 3.9/4.0</b>",
            "<b>Relevant Coursework:</b> NLP, Data Mining, Data Management, Big Data, Databases, Deep Learning, Machine Learning, Artificial Intelligence"
          ].join(" || "),
        },
        url: "https://usc.edu/",
        logo: "/usc.png",
      },
      {
        name: "Manipal University Jaipur",
        role: {
          en: "Bachelor of Technology in Computer Science",
        },
        subtitle: {
          en: "India",
        },
        timeline: {
          en: "Graduated Jul 2022",
        },
        description: {
          en: [
            "<b>CGPA: 9.17/10.0</b>",
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
