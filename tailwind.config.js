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
      fontFamily:{
        'azo':["Azo Sans Uber W01 Regular"],
        'Montserrat':["'Montserrat', sans-serif "],
      }, 
      boxShadow: {
        'yellow': ' 0px 9px 29px 0px rgba(253, 218, 96, 0.50)',
      },
      background:{
        'light':'rgba(255, 255, 255, 0.10)'
      }    
    },
  },
  plugins: [],
}

