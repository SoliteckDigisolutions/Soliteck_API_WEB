/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Provide some helpful semantic colors using CSS variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        card: 'var(--card)',
      },
    },
  },
  plugins: [],
};