/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smalllaptop': '993px',
        'smallmobile': '480px',
      },
    },
  },
  plugins: [],
}