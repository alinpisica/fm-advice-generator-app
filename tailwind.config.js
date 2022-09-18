/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        'cyan': 'hsl(193, 38%, 86%)',
        'neon': 'hsl(150, 100%, 66%)'
      },
      neutral: {
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)'
      }
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    fontWeight: {
      base: '800'
    }
  },
  plugins: [],
};
