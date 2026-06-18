import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const withAlpha = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{ts,tsx}', './contexts/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: withAlpha('--bg'),
        surface: {
          DEFAULT: withAlpha('--surface'),
          2: withAlpha('--surface-2'),
        },
        border: withAlpha('--border'),
        text: {
          DEFAULT: withAlpha('--text'),
          muted: withAlpha('--text-muted'),
          faint: withAlpha('--text-faint'),
        },
        accent: {
          DEFAULT: withAlpha('--accent'),
          strong: withAlpha('--accent-strong'),
          muted: withAlpha('--accent-muted'),
        },
      },
      borderColor: {
        DEFAULT: withAlpha('--border'),
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', '.light &');
    }),
  ],
};

export default config;
