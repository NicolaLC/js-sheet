/**
 * ANIMATIONS PARTIAL
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc handle animation styles
 */

/**
 * .Footer styling
 */
const animations = [
	{
		selector: "@keyframes fadeIn",
		animationSteps: {
			0: {
				opacity: 0
			},
			100: {
				opacity: 1
			}
		}
	},
	{
		selector: "@keyframes vibrate",
		animationSteps: {
			0: {
				transform: 'translate(0)'
			},
			20: {
				transform: 'translate(-2px, 2px)'
			},
			40: {
				transform: 'translate(-2px, -2px)'
			},
			60: {
				transform: 'translate(2px, 2px)'
			},
			80: {
				transform: 'translate(2px, -2px)'
			},
			100: {
				transform: 'translate(0)'
			}
		}
	},

];

module.exports = {
	animations
};
