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
const footerElementCalculatedSize = (padding) => `calc(100% - ${padding}*2)`;

/**
 * .Footer styling
 */
const footer = {
	selector: ".Footer",
	color: 'white',
	width: "100%",
	backgroundColor: colors.dark,
	display: 'grid',
	zIndex: '1001',
	gridTemplate: {
		columns: 'repeat( auto-fit, minmax(250px, 1fr) );'
	},
	children: [
		{
			selector: '.FooterElement',
			align: "top column",
			width: footerElementCalculatedSize(layout.itemsPaddingBig),
			height: footerElementCalculatedSize(layout.itemsPaddingBig),
			padding: layout.itemsPaddingBig,
			mediaQueries: [
				{
					selector: layout.mediaQueries.mobile,
					padding: layout.itemsPadding,
					width: footerElementCalculatedSize(layout.itemsPadding),
					height: footerElementCalculatedSize(layout.itemsPadding),
				}
			]
		}
	]
};

module.exports = {
	footer
};
