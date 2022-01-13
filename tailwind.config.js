// https://play.tailwindcss.com/YelhilBeHb

// helper to get opacity value when using theming from css variables
const withOpacityValue =
  (colorValue) =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${colorValue}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${colorValue}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${colorValue}))`
  }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
