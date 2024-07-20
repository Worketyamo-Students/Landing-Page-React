/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif']
      },

      colors: {
        primary: '#7286D3',
        secondary: '#8EA7E9',
        gray: '#9E9E9F',
        dark: '#19192C',
        light: '#FFF2F2',
      }
    },
  },
  plugins: [],
}