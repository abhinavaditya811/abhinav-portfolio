/**
 * Profile Configuration
 *
 * Personal identity, hero copy, and social links.
 */

export const profileConfig = {
  name: {
    full: "Abhinav Aditya",
    short: "Abhinav",
  },

  // Hero role + one-liner (instrument-panel hero)
  role: "Data & AI Engineer",
  tagline:
    "Building AI systems at scale - from LLM pipelines to MLOps.",
  location: "New York, NY",

  // GitHub username powering the live data sections (lib/github.ts).
  // Can also be overridden with the GITHUB_USERNAME env var.
  githubUsername: "abhinavaditya811",

  // Résumé (place file in /public)
  resume: "/Abhinav_Aditya_Resume.pdf",

  // Profile image (place file in /public)
  profileImage: "/me.jpeg",

  // Social links (leave empty string to hide)
  social: {
    email: "aditya.ab@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/abhinavaditya811/",
    github: "https://github.com/abhinavaditya811",
    twitter: "https://x.com/abhinaveeb",
    twitch: "https://www.twitch.tv/iggsomba",
  },
};

export type ProfileConfig = typeof profileConfig;
