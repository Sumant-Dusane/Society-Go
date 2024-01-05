/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': {
        200: '#e5e7eb',
        300: '#1e1e1e',
        500: '#000000'
      },
      'slate': {
        300: '#cbd5e1',
        500: '#64748b',
        700: '#334155'
      },
      'primary': {
        100: '#fbf5f5',
        500: '#ffbe3d' 
      },
      'secondary': {
        500: '#f06543'
      }
    },
  },
  plugins: [],
}

