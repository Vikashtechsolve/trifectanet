/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        secondary: '#00a0d2',
        accent: '#ff6b00',
        darkbg: '#05192d',
        highlight: '#6ab04c',
      }
    },
  },
  plugins: [],
}
