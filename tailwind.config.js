/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./**/*{tsx,scss,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

