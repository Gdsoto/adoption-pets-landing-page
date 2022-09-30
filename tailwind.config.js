/** @type {import('tailwindcss').Config} */

// Theme
const defaultTheme = require('tailwindcss/defaultTheme');

// Fonts
const {
  NUNITO_REGULAR,
  NUNITO_SEMIBOLD,
  NUNITO_BOLD,
  BREE_REGULAR,
  LIGHT_GREEN,
  DARK_GREEN,
  LIGHT_ORANGE,
  DARK_ORANGE,
  LIGHT_PINK,
  WHITE,
} = require('./styles/styles.constants');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: WHITE,
      green: {
        500: LIGHT_GREEN,
        800: DARK_GREEN,
      },
      orange: {
        500: LIGHT_ORANGE,
        800: DARK_ORANGE,
      },
      pink: {
        200: LIGHT_PINK,
      },
    },
    fontFamily: {
      nunitoRegular: [NUNITO_REGULAR, ...defaultTheme.fontFamily.sans],
      nunitoSemiBold: [NUNITO_SEMIBOLD, ...defaultTheme.fontFamily.sans],
      nunitoBold: [NUNITO_BOLD, ...defaultTheme.fontFamily.sans],
      breeRegular: [BREE_REGULAR, ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
