/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0A073C",
        secondary: "#aaa6c3",
        tertiary: "#00135D",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bluebg.png')",
      },
      animation: {
        blinker: "blinker 1s linear infinite",
      },
      keyframes: {
        blinker: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
