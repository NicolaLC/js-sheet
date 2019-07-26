/**
 * ANIMATIONS PARTIAL
 * 
 * @author nicolacastellanidev@gmail.com
 * @desc handle animation styles
 */

/**
 * .Footer styling
 */
const animations = {
	selector: "@keyframes fadeIn",
	animationSteps: {
		0: {
			opacity: 0
		},
		100: {
			opacity: 1
		}
	}
};

module.exports = {
	animations
};
