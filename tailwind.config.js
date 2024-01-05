/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components//.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components//.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'bright': ' bright 3s infinite cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes:{
        bright:{
          '0%' :{right : '0%'},
          '100%' :{right: '150%'}
        }
      },
      fontFamily:{
        'azo':["Azo Sans Uber W01 Regular"],
        'Montserrat':["'Montserrat', sans-serif "],
      }, 
      boxShadow: {
        'yellow': ' 0px 9px 29px 0px rgba(253, 218, 96, 0.50)',
      },
      background:{
        'light':'rgba(255, 255, 255, 0.10)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 84.14%, #0B0B0B 100%)',
      },    
    },
  },
  plugins: [],
}

