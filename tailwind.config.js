/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#131e3a",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
