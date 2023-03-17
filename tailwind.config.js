/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#016B4F",
        
"secondary": "#69091F",
        
"accent": "#019D75",
        
"neutral": "#9C1B2C",
        
 "base-100": "#FFFFFF",
        
"info": "#24214E",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
}
