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
			background: 'url(assets/images/menu.svg) white no-repeat',
			"background-size": "75%",
			"background-position": "center",
			cursor: 'pointer',
			borderRadius: '8px',
			transition: 'transform .2s ease-out',
			children: [
				{
					selector: ':hover',
					transform: 'rotate(45deg)',
				}
			]
		},
		{
			selector: '.MenuWrapper',
			display: 'none',
			position: 'fixed',
			top: '1.1rem',
			left: '4rem',
			width: '15rem',
			children: [
				{
					selector: '.MenuItem',
					margin: '0 1rem 0 0',
					cursor: 'pointer',
					transition: 'color .25s ease-out',
					background: colors.secondary,
					padding: '.25rem',
					children: [
						{
							selector: ':hover',
							color: colors.primary
						}
					]
				}
			]
		},
		{
			selector: '.MenuWrapper.Opened',
			align: 'left center row'
		}
	]
};

module.exports = {
	menu
};
