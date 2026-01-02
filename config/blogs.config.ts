/**
 * Blogs Configuration
 * 
 * This file contains your blog posts configuration.
 * Update these values to manage your blog content.
 */

export interface BlogItem {
  // Blog identifier (used in URL: /blogs/[id])
  id: string;
  // Blog title
  title: {
    en: string;
  };
  // Author and date line
  meta: {
    en: string;
  };
  // Whether this blog is enabled/visible
  enabled: boolean;
  // Show "Coming Soon" indicator
  comingSoon?: boolean;
}

export const blogsConfig = {
  // Section title on homepage
  title: {
    en: "Writing",
  },

  // Your blog posts
  // Note: The actual blog content is in /app/blogs/[id]/page.tsx
  // This config controls what shows on the homepage
  items: [
    {
      id: "ontology-text-to-sql",
      title: {
        en: "why ontology for text-to-sql?",
      },
      meta: {
        en: "Samarth Saxena · Coming Soon",
      },
      enabled: false,
    },
    {
      id: "git",
      title: {
        en: "git commands",
      },
      meta: {
        en: "Samarth Saxena · Coming Soon",
      },
      enabled: false,
    },
    {
      id: "how-i-learned-to-code",
      title: {
        en: "how i learned to code",
      },
      meta: {
        en: "Samarth Saxena · Coming Soon",
      },
      enabled: false,
      comingSoon: true,
    },
  ] as BlogItem[],
};

export type BlogsConfig = typeof blogsConfig;
