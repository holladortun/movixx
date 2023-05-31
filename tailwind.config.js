/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },

    extend: {
      colors: {
        green: '#00925D',
        grey: '#78828A',
        dark: '#0D0C0F',
      },
    },
  },
  plugins: [],
};
