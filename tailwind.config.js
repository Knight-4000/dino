/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    container: {
      center: true,
    },
    listStyleType: {
      disc: 'circle',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};