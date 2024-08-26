/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/public/index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

