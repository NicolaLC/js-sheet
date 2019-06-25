const fonts = {
	main: "'B612 Mono', monospace",
	secondary: "'Rubik', sans-serif",
	sizes: {
		h1: "2rem",
		h2: "1.75rem"
	}
};

const colors = {
	main: "#5f27cd",
	secondary: "#48dbfb"
};

const layout = {
	itemsMargin: "1rem 0"
};

const headerHeight = "75vh";
const headerBackground =
	'url("https://www.toptal.com/designers/subtlepatterns/patterns/white-waves.png")';

const getBodyHeight = () => {
	return `auto`;
};

module.exports = {
	fonts,
	colors,
	layout,
	headerHeight,
	headerBackground,
	getBodyHeight
};
