const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./modules/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  safelist: [
    {
      pattern: /space-(x|y)-(0|1|2|3|4|6|10|16|24)/,
      variants: ['sm'],
    },
  ],

  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafcff',
          100: '#D6EAFF',
          200: '#A3D0FF',
          300: '#6BB3FF',
          400: '#3898FF',
          500: '#007DFF',
          600: '#006CE0',
          700: '#005EC2',
          800: '#004FA3',
          900: '#004085',
          950: '#003975',
        },
      },
      fontSize: {
        xxs: ['0.65rem', '1rem'],
      },
      boxShadow: {
        special: '8px 8px 0px 0px #1D027D;',
        'special-dark': '8px 8px 0px 0px #120347',
      },
      maxWidth: {
        xxxs: '12rem',
        xxs: '16rem',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [
    /* eslint-disable global-require */
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
