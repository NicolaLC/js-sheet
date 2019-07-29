/**
 * MENU PARTIAL
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc handle .Menu partial styles
 */

/// get color constants
const { colors, layout } = require("../variables");
/// custom partial constants

/**
 * .Menu styling
 */
const menu = {
	selector: ".Menu",
	zIndex: '10001',
	position: "fixed",
	top: '1rem',
	left: '1rem',
	children: [
		{
			selector: '.MenuIcon',
			width: '2rem',
			height: '2rem',
			background: 'url(assets/images/menu.svg) transparent no-repeat',
			"background-size": "100%",
			"background-position": "center",
			cursor: 'pointer',
			transition: 'transform .2s ease-out',
		},
		{
			selector: '.MenuWrapper',
			position: 'fixed',
			top: '1rem',
			left: '5rem',
			width: '15rem',
			height: '20rem',
			background: colors.secondary
		},
		{
			selector: ':hover',
			children: [
				{
					selector: '.MenuIcon',
					transform: 'rotate(45deg)'
				}
			]
		}
	]
};

module.exports = {
	menu
};
