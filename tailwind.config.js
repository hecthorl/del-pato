const colors = require('tailwindcss/colors');

module.exports = {
   purge: {
      mode: 'layers',
      content: ['src/**/*.jsx', 'public/**/*.html'],
   },
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors: {
         gray: colors.trueGray,
         cyan: colors.cyan,
         fuchsia: colors.fuchsia,
         indigo: colors.indigo,
         'light-blue': colors.lightBlue,
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
