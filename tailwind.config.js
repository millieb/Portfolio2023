/* global module */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30,30,17);"
      },
      backgroundColor: {
        'background-color': '#322653',
        'custom-purple': '#512D6D',
        'custom-white': '#EEEEEE',
        'custom-salmon': '#F8485E',
        'custom-blue': '#00C1D4',
      },
      textColor: {
        'custom-grey': '#20262E',
        'custom-salmon': '#F8485E',
      },
    },
  },
  plugins: [],
}


