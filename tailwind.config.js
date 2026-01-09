/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand color palette according to PRD
        brand: {
          blue: {
            50:  '#eff6ff',   // very light blue background
            500: '#3b82f6',   // main blue (buttons, accents)
            600: '#2563eb',   // hover state
            700: '#1d4ed8',   // active / darker
          },
          gray: {
            50:  '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      // Optional: very subtle shadows we can use later
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
