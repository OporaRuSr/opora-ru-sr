module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./pages/**/*.jsx",
    "./components/**/*.jsx",
  ],
  theme: {
    extend: {

      spacing: {
        '1200' : '1200px',
      },
    },
  },
  variants: {},
  plugins: [],
}
