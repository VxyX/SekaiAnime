/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: 'rgb(206,46,46)',
        lightPrimary: '#292929',
      },
      fontFamily: {
        default: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

