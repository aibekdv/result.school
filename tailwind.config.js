/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xll: "1400px",
    },
    fontFamily: {
      golos: ["Golos", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#ED7138",
        indigo: "#7F76FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
