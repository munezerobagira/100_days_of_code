const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)  ",
        white: colors.white,
        black: colors.black,
        gray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
