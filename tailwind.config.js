/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#BE123C',
        customBlack: '#111114',
        customOb: '#1b1b1e',
        customHover: '#1f1f22',
        customPinkHover: '#c7274e'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Example for Google Fonts
        'customFont': ['Antonio'], // Example for custom .ttf font
      },
    },
  },
  plugins: [],
};
