module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-violet": "var(--clr-violet)",
        "brand-rose": "var(--clr-rose)",
        "brand-yellow": "--clr-yellow",
        "brand-crayola": "var(--clr-crayola)",
        "brand-turquoise": "var(--clr-turquoise)",
      },
    },
  },
  plugins: [],
};
