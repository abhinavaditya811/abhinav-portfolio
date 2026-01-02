'use client';

import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

import Script from 'next/script';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { siteConfig } from '@/config';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

const minecraft = localFont({
  src: '../public/fonts/MinecraftRegular-Bmg3.otf',
  variable: '--font-minecraft',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = siteConfig.googleAnalyticsId;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <html lang="en" className={`${jetbrainsMono.variable} ${minecraft.variable}`}>
          <head>
          <title>{siteConfig.metadata.title}</title>
          <meta name="description" content={siteConfig.metadata.description} />
          <meta name="author" content={siteConfig.metadata.author} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href={siteConfig.icons.favicon} sizes="any" />
          <link rel="icon" href={siteConfig.icons.favicon} type="image/x-icon" />
          
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:title" content={siteConfig.metadata.title} />
          <meta property="og:description" content={siteConfig.metadata.description} />
          <meta property="og:type" content="website" />
          {siteConfig.metadata.siteUrl && (
            <meta property="og:url" content={siteConfig.metadata.siteUrl} />
          )}
          
          {/* Twitter Card Meta Tags */}
          {siteConfig.metadata.twitterHandle && (
            <>
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content={siteConfig.metadata.twitterHandle} />
              <meta name="twitter:title" content={siteConfig.metadata.title} />
              <meta name="twitter:description" content={siteConfig.metadata.description} />
            </>
          )}
          
          <style
            dangerouslySetInnerHTML={{
              __html: `
            link[rel="icon"] {
              border-radius: 4px;
            }
          `,
            }}
          />
        </head>

        <body className={`bg-[#1a1a1a] min-h-screen antialiased`}>
          {/* Google Analytics Script - only if GA ID is provided */}
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
                    gtag('config', '${gaId}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
          {children}
        </body>
      </html>
    </LanguageProvider>
  </ThemeProvider>
  );
}
