/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'black': '#16171D',
        'gray': '#21242D',
        'green': '#48D05D',
        'red': '#F34949',
        'blue': '#67ABDC',
        'ujin': '#00C0C9',
        'tabbarGrey': '#959595'
      }
    },
  },
  plugins: [],
}