<<<<<<< HEAD
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        'grey-light': '#383838',
        'background-grey': '#F3F5F7',
      },
=======
      colors:{
       'grey-light': '#383838',
       "background-grey": '#F3F5F7',
      },
      fontFamily: {
        'lato': ['"Lato"', 'cursive']
      }
>>>>>>> d5a7a3d... adding page layout
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
=======
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
       'grey-light': '#383838',
       "background-grey": '#F3F5F7',
      },
      fontFamily: {
        'lato': ['"Lato"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
>>>>>>> aabb4c4... basic features added
