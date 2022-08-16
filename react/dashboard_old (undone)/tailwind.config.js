module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'right-bg': "url('./imgs/right-bg.jpg')",
      },
      outline: {
        green: '3px solid #065f46',
      },
      flex: {
        '2': '2 2 0%',
      }
    },
    fontFamily: {
      'basic': 'Nanum Gothic',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '50':'50px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
