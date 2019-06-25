const { fonts, layout } = require("../variables");
const generics = [
	{
		selector: "h1",
		"font-size": fonts.sizes.h1,
		margin: layout.itemsMargin
	},
	{
		selector: "h2",
		"font-size": fonts.sizes.h2,
		margin: layout.itemsMargin
	}
];

module.exports = {
	generics
};
