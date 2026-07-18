import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6EEDC',
        forest: '#2F4F3F',
        terracotta: '#B65C3D',
        gold: '#CFA24A',
        ink: '#1F231E',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 45px -20px rgba(47, 79, 63, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
