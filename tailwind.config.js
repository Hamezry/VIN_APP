/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],  
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
      display: ['Open Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      rotate: {
        '20': '20deg',
        '21': '21deg',
        '22': '22deg',
        '23': '23deg',
        '24': '24deg',
        '25': '25deg',
        '26': '26deg',
        '27': '27deg',
        '28': '28deg',
        '29': '29deg',
        '30': '30deg',
        '31': '31deg',
        '32': '32deg',
        '33': '33deg',
        '34': '34deg',
        '35': '35deg',
        '36': '36deg',
        '37': '37deg',
        '38': '38deg',
        '39': '39deg',
        '40': '40deg',
        '50': '50deg',
        '60': '60deg',
        '70': '70deg',
        '80': '80deg',
        '95': '95deg',
        '96': '96deg',
        '97': '97deg',
        '98': '98deg',
        '99': '99deg',
        '100': '100deg',
        '130': '130deg',
        '140': '140deg',
        '150': '150deg',


      },

      colors: {
       VIN: {
        background: '#161d31',
          navColor: '#161d31',
         textGray:'#555b6c',
         textWhite:'#ffffff'
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
});
