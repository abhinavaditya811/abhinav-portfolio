import type { Metadata } from 'next';
import type React from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Script from 'next/script';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PersonaProvider } from '@/contexts/PersonaContext';
import { siteConfig } from '@/config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  authors: [{ name: siteConfig.metadata.author }],
  icons: { icon: siteConfig.icons.favicon },
  metadataBase: siteConfig.metadata.siteUrl ? new URL(siteConfig.metadata.siteUrl) : undefined,
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    type: 'website',
    url: siteConfig.metadata.siteUrl || undefined,
  },
  twitter: {
    card: 'summary',
    site: siteConfig.metadata.twitterHandle || undefined,
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
  },
};

// Set the theme class before first paint to avoid a flash of the wrong theme.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = 'dark';
    document.documentElement.classList.add(t === 'light' ? 'light' : 'dark');
    document.documentElement.style.colorScheme = t === 'light' ? 'light' : 'dark';
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = siteConfig.googleAnalyticsId;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        <ThemeProvider>
          <LanguageProvider>
            <PersonaProvider>{children}</PersonaProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
