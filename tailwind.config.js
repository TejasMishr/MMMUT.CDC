/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(89, 89, 97, 0.3)',
        'custom-blue-gray': 'rgba(131, 138, 167, 0.24)',
      },
    },
  },
  plugins: [],
}