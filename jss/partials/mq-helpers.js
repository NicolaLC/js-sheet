const { fonts, colors, layout } = require("../variables");

const sharedMQHelpersProps = (beforeText = '') => {
	return {
		display: 'none',
		textTransform: 'uppercase',
		color: colors.secondary,
		backgroundColor: colors.tertiary,
		padding: layout.itemsPadding,
		fontSize: fonts.sizes.small,
		borderRadius: layout.borderRadius,
		children: [
			{
				selector: ':before',
				content: `'${beforeText}'`,
				position: 'absolute',
				top: '-3.5rem',
				right: 0,
				width: '15rem',
				textAlign: 'center',
				display: 'none',
				backgroundColor: '#4a4a4a',
				padding: layout.itemsPadding
			},
			{
				selector: `:hover`,
				cursor: 'pointer',
			},
			{
				selector: ':hover:before',
				display: 'inline'
			}
		]
	}
}

const mqHelpers = {
	selector: '.MQHelper',
	position: 'fixed',
	bottom: '1rem',
	right: '1rem',
	zIndex: 1001,
	children: [
		{
			selector: '#MQHelperMobile',
			...sharedMQHelpersProps('We are on mobile size device'),
			mediaQueries: [
				{
					selector: layout.mediaQueries.mobile,
					display: 'block'
				}
			]
		},
		{
			selector: '#MQHelperTablet',
			...sharedMQHelpersProps('We are on tablet size device'),
			mediaQueries: [
				{
					selector: layout.mediaQueries.tablet,
					display: 'block'
				}
			]
		},
		{
			selector: '#MQHelperDesktop',
			...sharedMQHelpersProps('We are on desktop size device'),
			mediaQueries: [
				{
					selector: layout.mediaQueries.desktop,
					display: 'block'
				}
			]
		}
	]
};

module.exports = {
	mqHelpers
};
