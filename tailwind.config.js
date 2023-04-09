/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily:{
        Poppins:  ['Poppins', 'sans-serif']
      },
      backgroundImage:
         {
          
         }
    },
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
  },
 plugins: [require("tw-elements/dist/plugin")]
})

