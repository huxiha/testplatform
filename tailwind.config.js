/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myRed: {
          DEFAULT: "#FF3D57",
          100: "#FF8A48",
        },
        myBlue: {
          DEFAULT: "#0081FF"
        },
        dark: {
          DEFAULT: "#1F2935",
          100:"#425365",
          200:"#161D26"
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
}
