/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
             //just add this below and your all other tailwind colors willwork
          ...colors
      }
  }
  },
  plugins: [],
}