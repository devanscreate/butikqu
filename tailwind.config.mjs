/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          hover: '#2D2D2D',
          dark: '#0F0F0F',
        },
        background: {
          DEFAULT: '#F9FAFB',
          card: '#FFFFFF',
          subtle: '#F3F4F6',
        },
        accent: {
          DEFAULT: '#C5A880',
          hover: '#B59567',
          light: '#EADBC8',
          dark: '#9F7C4E',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(26, 26, 26, 0.06)',
        card: '0 10px 30px -4px rgba(26, 26, 26, 0.08)',
        modal: '0 25px 50px -12px rgba(26, 26, 26, 0.25)',
      },
    },
  },
  plugins: [],
};

