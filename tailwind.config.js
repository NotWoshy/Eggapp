/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F1D895",
        secondary: "#D9D9D9"
      },
      fontFamily: {
        Micro5: ["Micro5", "serif"],
      },
    },
  plugins: [],
  },
};