/**
 * Profile Configuration
 * 
 * This file contains your personal information and social links.
 * Update these values to personalize your portfolio.
 */

export const profileConfig = {
  // Your name configuration
  name: {
    // Full name
    full: "Abhinav Aditya",
    // Short/nickname (displayed in hero)
    short: "Abhi",
    // Extra characters for the typing animation effect on hover
    // e.g., if short is "john" and extraChars is "athan", hovering shows "johnathan"
    extraChars: "nav",
  },

  // Hero section greeting
  greeting: {
    en: "Hi, I'm",
  },

  // Social links (leave empty string to hide)
  social: {
    email: "aditya.ab@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/abhinavaditya811/",
    github: "https://github.com/abhinavaditya811",
    twitter: "https://x.com/abhinaveeb",
    twitch: "https://www.twitch.tv/iggsomba",
    // Add more social links as needed
  },

  // Profile image (displayed on hover in hero section)
  // Place your image in /public/ folder
  profileImage: "/headshot.jpeg",

  // Neighbor/Friend website links (optional)
  // Set siteConfig.features.neighborLinks to true to enable
  neighborLinks: {
    left: {
      url: "",
      label: "Previous",
    },
    center: {
      url: "",
      icon: "/white.svg",
    },
    right: {
      url: "",
      label: "Next",
    },
  },
};

export type ProfileConfig = typeof profileConfig;
