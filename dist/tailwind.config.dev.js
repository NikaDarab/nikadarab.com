"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#F8EBE9',
        'hot-red': '#A42B18',
        'hot-pink': '#BE4A83',
        'midnight-blue': '#13294B',
        'dark-gray': '#2C2D2C'
      },
      fontSize: {
        'xs': '.5rem',
        's': ".8rem",
        'sm': '8px',
        'm': "1rem",
        'md': "1.5rem",
        'lg': '1.8rem',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '32': '32px',
        '35': '35px',
        '40': '40px',
        '48': '48px',
        '50': '50px',
        '64': '64px',
        '300': '300px',
        '500': '500px',
        'x-large': '1.5rem'
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        '12': '12px'
      },
      width: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '35': '35px',
        '40': '40px',
        '100': '100px',
        '110': '110px',
        '115': '115px',
        '120': '120px',
        '300': '300px',
        '600': '600px',
        '700': '700px',
        '800': '800px'
      },
      height: {
        '800': '800px',
        '1000': '1000px'
      },
      gap: {
        '20': '20px',
        '30': '30px'
      }
    }
  },
  plugins: []
};