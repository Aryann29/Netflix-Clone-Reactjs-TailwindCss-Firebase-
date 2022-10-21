const scrollbarHide = require('tailwind-scrollbar-hide');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      height:{
        "68px" : "68px"
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
