/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro"],
  theme: {
    textColor:
    {
      white: "#FFF",
    },
    colors:
    {
      "grey": "#212121",
      "black": "#000000",
      "footer": "#333333"
    },
    extend: 
    {
      keyframes: 
      {
        headerHide: 
        {
          '0%': { top: '0px' },
          '100%': { top: '-120px' },
        },
        headerReveal:
        {
          '0%': {top: '-120px'},
          '100%': {top: '0px'},
        }
      },
      animation:
      {
        'hide': 'headerHide 0.2s linear forwards',
        'reveal': 'headerReveal 0.2s linear forwards',
      },
    },
  },
  plugins: [],
}
