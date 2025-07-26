import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['var(--font-fredoka)'],
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        scrollbar: {
          track: 'hsl(var(--scrollbar-track) / <alpha-value>)',
          thumb: 'hsl(var(--scrollbar-thumb) / <alpha-value>)',
          'thumb-hover': 'hsl(var(--scrollbar-thumb-hover) / <alpha-value>)',
        },
        error: 'hsl(var(--error) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value: string) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),

    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'grid-cols-autofill': (value: string) => {
            return {
              'grid-template-columns': `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
            };
          },
        },
        {
          values: theme('spacing'),
        },
      );
    }),
  ],
} satisfies Config;
