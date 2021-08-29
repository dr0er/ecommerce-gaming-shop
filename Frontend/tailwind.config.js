module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"grey-very-light": "#D7DAE2",
				"grey-light": "#383838",
				"background-grey": "#F3F5F7",
			},
			fontFamily: {
				sans: ["Lato"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
