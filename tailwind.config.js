/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    screens: {
      xs: '480px',
      sm: '600px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },

    extend: {
      fontFamily: {
        sans:'Atkinson Hyperlegible, sans-serif'
      },

      colors: {
        "Main": '#2d3748',
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
],
}
