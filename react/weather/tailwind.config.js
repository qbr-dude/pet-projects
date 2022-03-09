module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flexGrow: {
      '0': 0,
      '1': 1,
      '2': 2,
    },
    flex: {
      /* crutch */
      '15': "1 1 15%",
      '6': "1 1 6%",
      '50': "1 1 50%",
    },
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      backgroundImage: {
        'mountain': "url('./imgs/mountain.jpg')",
        'landscape': "url('./imgs/landscape.jpg')",
        'sea': "url('./imgs/sea.jpg')",
        'search': "url('./imgs/search.svg')",
        'close': "url('./imgs/close.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}