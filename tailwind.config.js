/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        custom: {
          grey: "#808080",
          green: "#43C4B2",
        },
      },
    },
  },
  plugins: [],
};
