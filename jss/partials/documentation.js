const { fonts, colors, layout } = require("../variables");
const documentation = {
	selector: ".Documentation",
	align: "top left row",
	padding: "5rem 2rem",
	children: [
		{
			selector: ".DocumentationMenu",
			width: '25%',
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
									fontWeight: 'bold'
								}
							]
						},
						{
							selector: '.MenuTitle',
							opacity: .5,
							fontSize: fonts.sizes.small,
							margin: '0 0 1rem 0',
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
								}
							]
						}
					]
				}
			]
		},
		{
			selector: ".DocumentationContent",
			overflowY: 'scroll',
			width: '75%',
			maxHeight: '800px',
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
							selector: '+ .DocumentationPart',
							margin: '5rem 0 0 0'
						},
						{
							selector: 'h3',
							margin: '0 0 2rem 0'
						},
						{
							selector: "pre",
							maxWidth: '100%',
							margin: '2rem 0'
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
		}
	]
};

module.exports = {
	documentation
};
