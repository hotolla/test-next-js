/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      middle: '24px'
    },
    extend: {
      colors: {
        'tabGray': '#94A3B8',
      },
    },
  },
  plugins: [plugin(function({ addBase, config }) {
    addBase({
      'h3': {
        fontSize: config('theme.fontSize.middle'),
        fontWeight: 700,
        lineHeight: '24px'
      },
    })
  })],
};
