/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.zinc,
        brand: {
          pink: '#D18EF0',
          green: '#84D99B',
          violet: '#8576E1',
          dark: colors.zinc[800],
        },
        text: {
          header: colors.zinc[700],
          main: colors.zinc[600],
          input: colors.zinc[400],
        },
      },
      fontFamily: {
        sans: ['Owen Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
