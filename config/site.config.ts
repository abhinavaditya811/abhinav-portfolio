/**
 * Site Configuration
 * 
 * This file contains all the site-level configuration.
 * Update these values to personalize your portfolio website.
 */

export const siteConfig = {
  // Site metadata (used in <head> and SEO)
  metadata: {
    title: "Sam Saxena - Portfolio",
    description: "and this is me in a nutshell",
    author: "Samarth Saxena",
    siteUrl: "https://samsaxena.me", // Your deployed URL
    locale: "en_US",
    twitterHandle: "@samarth1337", // Optional: for Twitter cards
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
