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
        headerBottom: 
        {
          '0%': { top: '0%' },
          '100%': 
          {
            top: '85%',
            display: 'none',
          },
        },
        headerTop:
        {
          '0%': { bottom: '0%' },
          '100%': 
          {
            bottom: '85%',
            display: 'none',
          },
        }
      },
      animation:
      {
        'hide': 'headerBottom 0.2s ease forwards',
        'reveal': 'headerTop 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
