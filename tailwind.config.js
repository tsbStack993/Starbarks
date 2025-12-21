/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9ff',
          500: '#5b7cfa',
          600: '#4a69e6'
        }
      }
    }
  },
  plugins: []
}
