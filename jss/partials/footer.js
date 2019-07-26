/**
 * FOOTER PARTIAL
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc handle .Footer partial styles
 */

/// get color constants
const { colors, layout } = require("../variables");
/// custom partial constants
const footerHeight = "75vh";
/// utilities
const footerElementCalculatedSize = `calc(100% - ${layout.itemsPaddingBig}*2)`;

/**
 * .Footer styling
 */
const footer = {
	selector: ".Footer",
	color: 'white',
	width: "100%",
	backgroundColor: colors.dark,
	display: 'grid',
	gridTemplate: {
		columns: 'repeat( auto-fit, minmax(250px, 1fr) );'
	},
	children: [
		{
			selector: '.FooterElement',
			align: "top column",
			width: footerElementCalculatedSize,
			height: footerElementCalculatedSize,	
			padding: layout.itemsPaddingBig
		}
	]
};

module.exports = {
	footer
};
