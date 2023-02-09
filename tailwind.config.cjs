/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    textColor:
    {
      white: "#FFF",
      red1: "#C1272D",
    },
    colors:
    {
      "grey1": "#121212",
      "grey2": "#181818",
      "footer": "#212121",
      "red2":  "#451012",
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
