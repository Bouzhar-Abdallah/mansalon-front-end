module.exports = {
  plugins: {
    plugins: [require('postcss-import'), require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer')],
    tailwindcss: {},
    autoprefixer: {},
  },
}
