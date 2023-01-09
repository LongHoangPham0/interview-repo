const labelsClasses = [
  "lightOrange",
  "darkOrange",
  "lightBlue",
  "darkBlue",
  "orange",
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "pink"
];

const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      },
      colors: {
        orange: colors.orange,
        lightOrange: "#FFF7ED",
        darkOrange: "#F97316",
        darkBlue: "#0f4c81",
        lightBlue: "#b3e5fc",
        lightGreen: ""
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
