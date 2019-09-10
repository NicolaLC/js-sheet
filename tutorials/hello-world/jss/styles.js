/**
 * HELLO WORLD EXAMPLE
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc the root stylesheet, don't rename stylesheets export
 */

const { generics } = require('./partials/generics');

/**
 * Core stylesheet
 */
const stylesheets = {
	root: {
		selector: "body",
		padding: 0,
		margin: 0,
		overflowX: "hidden",
		background: '#4a4a4a',
		width: '100vw',
		height: '100vh',
		align: 'center column',
		fontFamily: "'Roboto Mono', monospace",
		"text-rendering": "geometricPrecision",
		children: [
			...generics
		]
	}
};

module.exports = {
	stylesheets,
};
