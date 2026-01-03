/**
 * Site Configuration
 * 
 * This file contains all the site-level configuration.
 * Update these values to personalize your portfolio website.
 */

export const siteConfig = {
  // Site metadata (used in <head> and SEO)
  metadata: {
    title: "Abhinav Aditya - Portfolio",
    description: "and this is me in a nutshell.",
    author: "Abhinav Aditya",
    siteUrl: "https://abhinav-aditya.com", // Your deployed URL
    locale: "en_US",
    twitterHandle: "@abhinaveeb", // Optional: for Twitter cards
  },

  // Google Analytics (optional - leave empty string to disable)
  googleAnalyticsId: "", // e.g., "G-XXXXXXXXXX"

  // Favicon and icons
  icons: {
    favicon: "/favicon.ico",
  },

  // Enable/disable features
  features: {
    // Enable blog section
    blogs: true,
    // Enable neighbor links (links to friend's websites)
    neighborLinks: false,
  },
};

export type SiteConfig = typeof siteConfig;
