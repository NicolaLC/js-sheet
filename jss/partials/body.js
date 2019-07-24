const { fonts, colors } = require("../variables");
const body = {
	selector: ".Body",
	color: "white",
	width: "calc(100% - 4rem)",
	align: "center column",
	padding: "2rem",
	position: "relative",
	children: [
		{
			selector: ".Title",
		  	fontSize: "3rem",
			fontWeight: "bold",
			fontFamily: fonts.secondary,
			zIndex: "1001"
		},
		{
			selector: ":before",
			content: " ",
			height: "3rem",
			transform: "rotate(1.5deg)",
			width: "100%",
			background: colors.primary,
			position: "absolute",
			top: "-1rem",
			left: "0",
			zIndex: "0",
			"box-shadow": `0px -10px 0 0 ${colors.tertiary}`
		},
		{
			selector:"p",
			maxWidth: "75vw",
			textAlign: "center"
		},
		{
			selector:"a",
			color: colors.tertiary
		}
	]
};

module.exports = {
	body
};
