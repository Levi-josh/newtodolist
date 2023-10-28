/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        r: "0.1px"
      },
      width: {
        100: "60%"
      },
      colors: {
        100: '#1f1e1e'
      },
      margin: {
        100: "54%"
      },
      gap: {
        22: "85px"
      }
    },
  },
  plugins: [],
}

