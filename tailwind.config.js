/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      letterSpacing: {
        widest_t1: ".5em",
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.blue.200'), 0 0 20px theme('colors.blue.700')",
      },
    },
  },
  plugins: [],
};
