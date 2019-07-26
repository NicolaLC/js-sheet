/**
 * HEADER PARTIAL
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc handle .Header partial styles
 */

/// get color constants
const { colors, layout } = require("../variables");
/// custom partial constants
const headerHeight = "75vh";
const headerBackground =
	"url('https://www.toptal.com/designers/subtlepatterns/patterns/white-waves.png')";

/**
 * .Header styling
 */
const header = {
	selector: ".Header",
	color: colors.primary,
	width: "100%",
	height: headerHeight,
	align: "center column",
	background: headerBackground,
	animation: 'fadeIn 2s ease-out',
	children: [
		{
			selector: "img",
			width: "5rem",
			height: "auto",
			margin: layout.itemsMargin,
			borderRadius: layout.borderRadius,
			children: [{
				selector: ':hover',
				animation: 'vibrate 0.3s linear infinite both',
				cursor: 'pointer'
			}]
		}
	]
};

module.exports = {
	header
};
