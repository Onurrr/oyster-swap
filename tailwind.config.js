const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inter var',
  'system-ui',
];

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fontFamily,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}