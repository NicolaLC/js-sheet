const { fonts, colors, layout } = require("../variables");
const documentation = {
	selector: ".Documentation",
	align: "top left row",
	padding: "5rem 2rem",
	transition: 'all .25s ease-out',
	zIndex: '1',
	children: [
		{
			selector: ".DocumentationMenu",
			width: '25%',
			transition: 'all .25s ease-out',
			children: [
				{
					selector: 'ul',
					listStyle: 'none',
					children: [
						{
							selector: 'li',
							align: 'left column',
							position: 'relative',
							children: [
								{
									selector: 'a',
									fontWeight: 'bold',
									color: colors.secondary + '!important'
								}
							]
						},
						{
							selector: '.MenuTitle',
							fontSize: fonts.sizes.small,
							margin: '1rem 0',
							color: colors.tertiary,
							children: [
								{
									selector: ':before',
									position: 'absolute',
									left: '-1rem',
									top: 'calc(50% - .05rem)',
									width: '.5rem',
									height: '.1rem',
									content: ' ',
									background: colors.secondary
								},
								{
									selector: '&.Disabled',
									cursor: 'not-allowed',
									opacity: .3
								}
							]
						}
					]
				}
			]
		},
		{
			selector: ".DocumentationContent",
			overflowY: 'hidden',
			width: '75%',
			padding: '0 1rem 0 0',
			align: "top left column",
			children: [
				{
					selector: '.DocumentationPart',
					width: '100%',
					children: [
						{
							selector: 'hr',
							width: '1rem',
							margin: '1rem 0'
						},
						{
							selector: '& + .DocumentationPart',
							margin: '2rem 0 0 0'
						},
						{
							selector: 'h3',
							children: [
								{
									selector: '&:not(first-of-type)',
									margin: '2rem 0'
								}
							]
						},
						{
							selector: "pre",
							maxWidth: '100%',
							margin: '2rem 0'
						},
						{
							selector: '.Example',
							width: '100%',
							height: 'auto',
							background: colors.secondary,
							color: colors.primary,
							padding: '1rem 0',
							margin: '1rem 0',
							children: [
								{
									selector: '&.AlignCenter',
									align: 'center'
								},
								{
									selector: '&.AlignCenterColumn',
									align: 'center column'
								},
								{
									selector: '&.GridTemplate',
									gridTemplate: {
										rows: 'repeat( 3, minmax(33.33%, 1fr) );',
										columns: 'repeat( 3, minmax(33.33%, 1fr) );',
									}
								}
							]
						}
					]
				},
				{
					selector: "::-webkit-scrollbar",
					width: ".25rem",
					height: ".25rem",
				},
				{
					selector: "::-webkit-scrollbar-thumb",
					background: colors.secondary
				}
			]
		},
		{
			selector: '&.Focus',
			position: 'relative',
			children: [
				{
					selector: '.DocumentationMenu',
					position: 'fixed',
					maxWidth: 'calc(25% - 2rem)',
					top: '5rem',
					left: '2rem'
				},
				{
					selector: '.DocumentationContent',
					margin: '0 0 0 25%'
				}
			]
		}
	]
};

module.exports = {
	documentation
};
