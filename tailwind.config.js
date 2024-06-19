/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      "big-black": ['"big-black"'],
      "big-bold": ['"big-bold"'],
      "big-extrabold": ['"big-extrabold"'],
      "big-extralight": ['"big-extralight"'],
      "big-light": ['"big-light"'],
      "big-medium": ['"big-medium"'],
      "big-regular": ['"big-regular"'],
      "big-semibold": ['"big-semibold"'],
      "big-thin": ['"big-thin"'],
      "mono-bold": ['"mono-bold"'],
      "mono-bolditalic": ['"mono-bolditalic"'],
      "mono-italic": ['"mono-italic"'],
      "mono-regular": ['"mono-regular"'],
    },
    extend: {
      colors: {
        primaryBorder: "#242424",
        secondaryBorder: "#606060",
        primaryButton: "#fffc14",
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
