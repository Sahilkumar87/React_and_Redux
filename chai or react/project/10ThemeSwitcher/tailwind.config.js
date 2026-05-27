/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- YE LINE ZAROORI HAI. Agar missing hai toh add karein.
  theme: {
    extend: {},
  },
  plugins: [],
}