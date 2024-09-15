/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#48ECF3",
          dark: "#17B3CC",
          dark2: "#0ABAAF"
        },
        gray: {
          100: "#A0A0A0",
          300: '#F4F4F4',
          900: "#F9F9F9"
        },
        green: {
          400: "#72E755"
        }
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}