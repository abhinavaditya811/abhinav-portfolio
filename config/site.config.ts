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
    description: "Welcome to my hub.",
    author: "Abhinav Aditya",
    siteUrl: "https://1abhinavaditya.com",
    locale: "en_US",
    twitterHandle: "@abhinaveeb",
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
