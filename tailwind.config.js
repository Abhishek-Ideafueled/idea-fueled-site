/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        konsoleRegular: ["Konsole-Regular"],
        konsoleRegular2: ["Konsole-Regular2"],
        narwaSemiBold: ["Narwa-SemiBold"],
        narwaBold: ["Narwa-Bold"],
      },
      colors:{
        'custom-heading':'#222020',
        'custom-blue':'#1D71B8',

      },
      backgroundImage:{
          'hero-section' : "linear-gradient(114.13deg, #2FBEC2 -5.35%, #2E82A3 22.85%, #301065 89.65%)",
      }
    },
  },
  plugins: [],
}

