const { fonts, layout, colors } = require("../variables");
const headersProps = {
	margin: layout.itemsMargin,
	color: colors.secondary,
	fontFamily: fonts.secondary,
}
const generics = [
	{
		selector: "h1",
		display: 'block',
		whiteSpace: 'pre-wrap',
		fontSize: fonts.sizes.h1,
		...headersProps,
		transition: "all .1s ease-out",
		children: [
			{
				selector: ":hover",
				letterSpacing: `.5rem`,
				cursor: "default"
			}
		]
	},
	{
		selector: "h2",
		fontSize: fonts.sizes.h2,
		...headersProps
	},
	{
		selector: "h3",
		fontSize: fonts.sizes.h3,
		...headersProps
	},
	{
		selector: "::-webkit-scrollbar",
		width: ".25rem",
		height: ".25rem",
		background: colors.dark
	},
	{
		selector: "::-webkit-scrollbar-thumb",
		background: colors.tertiary
	},
	{
		selector: "p",
		fontSize: fonts.sizes.p,
		fontFamily: fonts.secondary,
		margin: layout.itemsMargin
	},
	{
		selector: "pre",
		background: colors.dark,
		color: "white",
		margin: 0,
		maxWidth: '95%',
		padding: layout.itemsPadding,
		borderRadius: layout.borderRadius,
		fontFamily: fonts.main,
		children: [
			{
				selector: "b",
				color: colors.secondary
			},
			{
				selector: "code",
				fontFamily: fonts.main,
				display: 'block',
				whiteSpace: 'pre-wrap'
			}
		]
	},
	{
		selector: "ul",
		padding: 0,
		margin: 0,
		children: [
			{
				selector: "li",
				padding: 0,
				margin: 0
			}
		]
	},
	{
		selector: 'a',
		color: colors.secondary,
		textDecoration: 'none'
	},
	{
		selector: 'b',
		fontWeight: 'bold',
		color: colors.secondary
	},
	{
		selector: 'i',
		color: colors.tertiary
	},
	{
		selector: '.fc-secondary',
		color: colors.secondary
	},
	{
		selector: '.fc-tertiary',
		color: colors.tertiary
	},
	{
		selector: '.f-small',
		fontSize: fonts.sizes.small
	}
];

module.exports = {
	generics
};
