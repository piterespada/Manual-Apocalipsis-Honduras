/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Caveat"', '"Segoe Script"', 'cursive'],
        body: ['"Inter"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        paper: { DEFAULT: '#f3ead3', deep: '#e9dcc0', line: '#d6c49a' },
        ink: { DEFAULT: '#3b2f1e', soft: '#6b5a3e' },
        moss: '#5b6b3a',
        rust: '#a4492b',
      },
    },
  },
  plugins: [],
};
