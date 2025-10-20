/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "pop-bold": ["pop-bold"],
        "pop-medium": ["pop-medium"],
        "pop-regular": ["pop-regular"],
        "pop-semibold": ["pop-semibold"],
        "pop-light": ["pop-light"],
      },
      colors: {
        "text-bg": "#4CAF5050",
        icons: "#2E7D32",
      },
    },
  },
  plugins: [],
};
