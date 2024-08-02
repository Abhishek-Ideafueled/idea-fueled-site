/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'extra-xl':'1366px',
      },
      fontFamily:{
        konsoleRegular: ["Konsole-Regular"],
        konsoleRegular2: ["Konsole-Regular2"],
        narwaSemiBold: ["Narwa-SemiBold"],
        narwaBold: ["Narwa-Bold"],
      },
      colors:{
        'custom-heading':'#222020',
        'custom-blue':'#1D71B8',
        'custom-body':'#4B5864',
        'active-blue':'#0E5EA2',
        'light-gray':'#F8FAFB',

      },
      backgroundImage:{
          'hero-section' : "linear-gradient(114.13deg, #2FBEC2 -5.35%, #2E82A3 22.85%, #301065 89.65%)",
          'clutch-section':"linear-gradient(90deg, #F8FAFB 4.25%, #FFF2F1 101.43%)",
          'clutch-section2':"linear-gradient(90deg, #F8FAFB 4.25%, #FEE2E0 101.43%)",
          'upwork-section':"linear-gradient(90deg, #F8FAFB 4.25%, #EBF7E9 101.43%)",
          'upwork-section2':"linear-gradient(90deg, #F8FAFB 4.25%, #E3FBE0 101.43%)",
          'case-studies':"url('/case-studies.jpg')"
      }
    },
  },
  plugins: [],
}

