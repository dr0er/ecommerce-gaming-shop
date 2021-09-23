module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-very-light': '#D7DAE2',
        'grey-light': '#383838',
        'background-grey': '#F3F5F7',
        'blue-after': '#498DF8',
        'grey-verylight': '#D7DAE2',
      },
      fontFamily: {
        sans: ['Lato'],
      },
      backgroundImage: {
        'landing-page-background': "url('./Assets/background-lp.jpg')",
      },
      backgroundPosition: {
        'left-transtion': 'left -570px top 0px',
      },
      backgroundSize: {
        '110%': '110%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
