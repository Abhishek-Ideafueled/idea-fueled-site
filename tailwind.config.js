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
        'pills-bg':'#363A3E',
      },
      backgroundImage:{
          'hero-section' : "linear-gradient(114.13deg, #2FBEC2 -5.35%, #2E82A3 22.85%, #301065 89.65%)",
          'clutch-section':"linear-gradient(90deg, #F8FAFB 4.25%, #FFF2F1 101.43%)",
          'clutch-section2':"linear-gradient(90deg, #F8FAFB 4.25%, #FEE2E0 101.43%)",
          'upwork-section':"linear-gradient(90deg, #F8FAFB 4.25%, #EBF7E9 101.43%)",
          'upwork-section2':"linear-gradient(90deg, #F8FAFB 4.25%, #E3FBE0 101.43%)",
          'case-studies':"url('/case-studies.jpg')",
          'project-card':"linear-gradient(93.67deg, #2B2B2B -3.37%, #171B18 108.14%)",
          'pricing-bg':"url('/pricing-bg.jpg')",
          'pricing-cardbg':"linear-gradient(93.67deg, #2B2B2B -3.37%, #171B18 108.14%)",
          'pricing-border':"linear-gradient(90deg, #373737 0%, #787878 47%, #1B1E1C 100%)",
          'pricing-hover':"linear-gradient(93.67deg, #113655 -3.37%, #0A2A46 108.14%)",
          'contactform-bg':'linear-gradient(59.15deg, #1D71B8 12.54%, #0960A9 46.27%, #338FDD 69.86%, #1D71B8 105.77%)',

      },
      boxShadow:{
        'project-card-shadow':"0px 9px 5.3px 0px rgba(0, 0, 0, 0.3)",
        'services-card-shadow':"4px 4px 20px 0px #0000000A",
        'testimonial-shadow':"0px 0px 20px 0px #67676714",

      }

    },
  },
  plugins: [],
}

