/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dms: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        banner: 'url("../src/assets/banner.png")',
      },
    },
  },
  plugins: [],
};
