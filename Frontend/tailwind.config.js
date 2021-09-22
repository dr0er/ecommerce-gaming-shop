module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-light': '#383838',
        'background-grey': '#F3F5F7',
      },
      backgroundImage: {
        'landing-page-background': "url('./Assets/background-lp.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
