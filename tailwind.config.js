/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#3077F1',
          dark: '#2966CF',
          light: '#327BFA',
        },
        secondary: {
          DEFAULT: '#46618F',
          dark: '#163770',
          light: '#2458B3',
        },
      },
    },
  },
  plugins: [],
};