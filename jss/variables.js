/**
 * This is an example of variables constants
 * 
 * Handle here shared constants
 */

/// FONTS RELATED CONSTANTS
const fonts = {
	main: "'B612 Mono', monospace",
	secondary: "'Rubik', sans-serif",
	sizes: {
		h1: "10vw",
		h2: "2rem",
		h3: "1.5rem",
		p: "1rem",
		small: '.75rem'
	}
};

/// COLORS RELATED CONSTANTS
const colors = {
	primary: "#323232",
	secondary: "#14ffec",
	tertiary: "#0d7377",
	dark: "#212121"
};

/// LAYOUT RELATED CONSTANTS
const layout = {
	itemsMargin: "1rem 0",
	itemsPadding: "1rem",
	itemsPaddingBig: "5rem",
	borderRadius: ".5rem",
	mediaQueries: {
		mobile: 'only screen and (max-width: 700px)',
		tablet: 'only screen and (min-width: 701px) and (max-width: 1200px)',
		desktop: 'only 	screen and (min-width: 1201px)'
	}
};

module.exports = {
	fonts,
	colors,
	layout
};
