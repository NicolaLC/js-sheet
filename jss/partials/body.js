const { fonts, colors, layout } = require("../variables");
const body = {
	selector: ".Body",
	color: "white",
	width: "calc(100% - 4rem)",
	align: "center column",
	padding: "2rem",
	position: "relative",
	backgroundColor: colors.primary,
	children: [
		{
			selector: ".Title",
			width: '100%',
			fontSize: "3rem",
			fontWeight: "bold",
			fontFamily: fonts.secondary,
			textAlign: 'center',
			zIndex: "1001"
		},
		{
			selector: ":before",
			content: " ",
			height: "6.25rem",
			width: "100%",
			background: 'url(assets/images/test.svg) transparent no-repeat',
			"background-size": 'cover',
			position: "absolute",
			top: "-6.25rem",
			left: "0",
			zIndex: "0"
		},
		{
			selector: ":after",
			content: " ",
			height: "6.25rem",
			transform: "rotate(-180deg)",
			width: "100%",
			background: 'url(assets/images/test.svg) transparent no-repeat',
			"background-size": 'cover',
			position: "absolute",
			bottom: "-6.25rem",
			left: "0",
			zIndex: "0"
		},
		{
			selector: "p",
			maxWidth: "75vw",
			textAlign: "center",
			mediaQueries: [
				{
					selector: layout.mediaQueries.mobile,
					maxWidth: '95vw'
				}
			]
		},
		{
			selector: "a",
			color: colors.tertiary
		}
	]
};

module.exports = {
	body
};
