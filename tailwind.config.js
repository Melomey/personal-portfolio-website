/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'roboto' : "'Roboto', 'sans-serif'"
    },
    extend: {
      colors: {
        'primary' : '#5E3BEE',
        'headingColor' : '#282938',
        'bgShade': '#f5fcff',
        'dribble' : '#E62872',
        'body' : '#1C1E53'
      },
    },
  },
  plugins: [],
}