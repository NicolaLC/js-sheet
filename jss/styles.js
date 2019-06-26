/**
 * ROOT STYLESHEET
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc the root stylesheet, don't rename stylesheets export
 */

/// Get shared constants
const { fonts, colors } = require("./variables");
/// Get partials
const { body } = require("./partials/body");
const { header } = require("./partials/header");
const { generics } = require("./partials/generics");

/**
 * Core stylesheet
 */
const stylesheets = {
	root: {
		selector: "body",
		background: colors.primary,
		fontFamily: fonts.main,
		padding: 0,
		margin: 0,
		overflowX: "hidden",
		childrens: [header, body, ...generics]
	}
};

module.exports = {
	stylesheets
};
