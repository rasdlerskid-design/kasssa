/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F7F4',
        graphite: '#1A1D20',
        graphiteSoft: '#2A2E33',
        gold: '#C5A059',
        goldLight: '#D9BC7F',
        stoneWarm: '#8B8578',
        line: '#E6E2D9',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
