/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(4, 100%, 67%)",
        secondary: "hsl(234, 29%, 20%)",
        bgColor: "hsl(235, 18%, 26%)",
        accent: "hsl(231, 7%, 60%)",
      },
      dropShadow: {
        "4xl": ["0 10px 15px rgba(255, 98, 87,0.60)"],
      },
    },
  },
  plugins: [],
};
