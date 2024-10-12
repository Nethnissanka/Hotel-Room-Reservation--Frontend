/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        custom: ['Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: '#0a0a0a',
        customGray: '#dcdcdc',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
        
      },
    },
  },
  plugins: [],
}