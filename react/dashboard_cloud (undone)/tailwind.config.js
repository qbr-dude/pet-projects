module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'cloud-light': '#7C8DB5',
        'cloud-strong': '#505887',
      },
      screens: {
        'xlx': { 'max': '1280px' },
      },
      dropShadow: {
        'folder-p': '0px 30px 30px #EDEEFD',
        'folder-g': '0px 30px 30px #E0F5FB',
        'folder-y': '0px 30px 30px #FFEEE7',
        'folder-r': '0px 30px 30px #FFE5E5',
      },
      height: {
        '9\/10': '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
