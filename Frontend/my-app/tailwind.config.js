/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      maxWidth: {
        '1200': '1200px',
        '1000': '1000px'
      },
      colors: {
        primary: '#edf5ff',
      },
      screens: {
        'desktop': '1200px',
        'pad':'1000px'
        
      },
      fontFamily: {
        'dm-serif-display': ['DM Serif Display', 'serif'],
      },
      boxShadow: {
        '3xl': '20px 0px 70px -15px rgba(0, 0, 0, 1)',
      },


    },
  },
  plugins: [],
}

