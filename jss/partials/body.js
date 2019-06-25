const { fonts, getBodyHeight } = require("../variables");
const body = {
	selector: ".Body",
	color: "white",
	width: "100%",
	height: getBodyHeight(),
	align: "center column",
	padding: "2rem",
	childrens: [
		{
			selector: ".Title",
			"font-size": "3rem",
			"font-weight": "bold",
			"font-family": fonts.secondary,
			childrens: [
				{
					selector: ":before",
					content: " ",
					height: "1rem",
					width: "100%",
					background: "white",
					position: "absolute",
					bottom: 0,
					left: 0
				}
			]
		}
	]
};

module.exports = {
	body
};
