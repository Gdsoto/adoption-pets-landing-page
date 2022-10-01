/** @type {import('tailwindcss').Config} */

// Theme
const defaultTheme = require('tailwindcss/defaultTheme');

// Fonts
const {
  INTER_REGULAR,
  INTER_SEMIBOLD,
  INTER_BOLD,
  ALBERT_SEMIBOLD,
  ALBERT_BOLD,
  GREEN_700,
  GREEN_400,
  GRAY_200,
  GRAY_500,
  GRAY_800,
  PINK_700,
  PINK_500,
  PINK_300,
  WHITE,
  BLACK,
} = require('./src/styles/styles.constants');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: WHITE,
      black: BLACK,
      yellow: '#EDB507',
      orange: '#E1692D',
      blue: '#71BDEF',
      green: {
        400: GREEN_400,
        700: GREEN_700,
      },
      pink: {
        300: PINK_300,
        500: PINK_500,
        700: PINK_700,
      },
      gray: {
        200: GRAY_200,
        500: GRAY_500,
        800: GRAY_800,
      },
    },
    fontFamily: {
      interRegular: [INTER_REGULAR, ...defaultTheme.fontFamily.sans],
      interSemiBold: [INTER_SEMIBOLD, ...defaultTheme.fontFamily.sans],
      interBold: [INTER_BOLD, ...defaultTheme.fontFamily.sans],
      albertSemiBold: [ALBERT_SEMIBOLD, ...defaultTheme.fontFamily.sans],
      albertBold: [ALBERT_BOLD, ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
