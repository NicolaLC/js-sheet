/**
 * Get useful vars
 */
const { fonts, colors } = require("./variables");
/**
 * Get the partials
 */
const { body } = require("./partials/body");
const { header } = require("./partials/header");
const { generics } = require("./partials/generics");

/**
 * Core stylesheet
 */
const stylesheets = {
	root: {
		selector: "body",
		align: "column",
		width: "100%",
		height: "100%",
		background: colors.main,
		"font-family": fonts.main,
		childrens: [header, body, ...generics]
	}
};

module.exports = {
	stylesheets
};
