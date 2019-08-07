/**
 * ROOT STYLESHEET
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc the root stylesheet, don't rename stylesheets export
 */

/// Get shared constants
const { fonts, layout, colors } = require("./variables");
/// Get partials
const { body } = require("./partials/body");
const { header } = require("./partials/header");
const { footer } = require("./partials/footer");
const { menu } = require("./partials/menu");
const { generics } = require("./partials/generics");
const { animations } = require("./partials/animations");
const { mqHelpers } = require("./partials/mq-helpers");


/**
 * Core stylesheet
 */
const stylesheets = {
	root: {
		selector: "body",
		fontFamily: fonts.main,
		padding: 0,
		margin: 0,
		overflowX: "hidden",
		width: '100%',
		height: '100%',
		children: [
			header,
			body,
			footer,
			menu,
			...generics,
			...animations,
			mqHelpers
		]
	}
};

module.exports = {
	stylesheets
};
