/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lightgrey': '#15151D',
      'textgrey': '#141414',
      'white':'#fff'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '48px'],
      xxxl: ['64px','77px'],
      large: ['168px','201px']
    },
    extend: {},
  },
  plugins: [],
}


