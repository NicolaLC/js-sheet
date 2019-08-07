const fs = require("fs");
const { watch } = require("gulp");
const color = require("gulp-color");
const figlet = require("figlet");
const CONSOLE_PREFIX = "[JSS] ";
let MEDIA_QUERIES = '';

function parse() {
	for (const path in require.cache) {
		if (path.endsWith(".js")) {
			// only clear *.js, not *.node
			delete require.cache[path];
		}
	}
	try {
		const { stylesheets } = require("./jss/styles");
		return parseContent(stylesheets);
	} catch (e) {
		console.log(
			color(`${CONSOLE_PREFIX} an error has occured while compiling:`, "RED")
		);
		console.error(e);
		return Promise.resolve();
	}
}

function parseContent(original) {
	const result = parseSniffet(original);
	overrideFile("./dist/dist.css", result);
	return Promise.resolve();
}

function parseSniffet(original) {
	let result = "";
	result = parseObject(original["root"]);
	if (MEDIA_QUERIES !== '') {
		result += MEDIA_QUERIES;
	}
	MEDIA_QUERIES = '';
	return result;
}

function parseObject(root, parentSelector) {
	let result = "";
	const { selector } = root;
	result += parseElement(selector, root, parentSelector);
	if (root.children) {
		root.children.map(child => {
			result += parseObject(child, selector);
		});
	}
	return result;
}

function parseElement(selector, properties, parentSelector = "") {
	if (parentSelector && selector.indexOf(":") < 0) {
		parentSelector += " ";
	}
	return `${properties.selector.indexOf('keyframes') < 0 ? parentSelector : ''}${selector}{${parseProperties(properties, selector, parentSelector)}}`;
}

function parseProperties(properties, selector, parentSelector) {
	let result = "";
	Object.keys(properties).map(prop => {
		switch (prop) {
			case "align":
				result += prepareAlign(properties[prop]);
				break;
			case "content":
				const content = properties[prop].trim();
				result += `${prop}:${!content ? '" "' : content};`;
				break;
			case "fontFamily":
				result += `font-family:${properties[prop]};`;
				break;
			case "overflowX":
				result += `overflow-x:${properties[prop]};`;
				break;
			case "overflowY":
				result += `overflow-y:${properties[prop]};`;
				break;
			case "fontSize":
				result += `font-size:${properties[prop]};`;
				break;
			case "fontWeight":
				result += `font-weight:${properties[prop]};`;
				break;
			case "fontFamily":
				result += `font-family:${properties[prop]};`;
				break;
			case "zIndex":
				result += `z-index:${properties[prop]};`;
				break;
			case "boxShadow":
				result += `box-shadow:${properties[prop]};`;
				break;
			case "textShadow":
				result += `text-shadow:${properties[prop]};`;
				break;
			case "whiteSpace":
				result += `white-space:${properties[prop]};`;
				break;
			case "borderRadius":
				result += `border-radius:${properties[prop]};`;
				break;
			case "borderBottom":
				result += `border-bottom:${properties[prop]};`;
				break;
			case "borderTop":
				result += `border-top:${properties[prop]};`;
				break;
			case "borderLeft":
				result += `border-left:${properties[prop]};`;
				break;
			case "borderRight":
				result += `border-right:${properties[prop]};`;
				break;
			case "letterSpacing":
				result += `letter-spacing:${properties[prop]};`;
				break;
			case "maxWidth":
				result += `max-width:${properties[prop]};`;
				break;
			case "maxHeight":
				result += `max-height:${properties[prop]};`;
				break;
			case "textAlign":
				result += `text-align:${properties[prop]};`;
				break;
			case "textTransform":
				result += `text-transform:${properties[prop]};`;
				break;
			case "backgroundColor":
				result += `background-color:${properties[prop]};`;
				break;
			case "gridTemplate":
				const { columns, rows } = properties[prop];
				if (columns) {
					result += `grid-template-columns:${columns};`;
				}
				if (rows) {
					result += `grid-template-rows:${rows};`;
				}
				break;
			case "textDecoration":
				result += `text-decoration:${properties[prop]};`;
				break;
			case "selector":
			case "children":
				break;
			case "animationSteps":
				result += parseAnimationSteps(properties[prop]);
				break;
			case "mediaQueries":
				MEDIA_QUERIES += parseMediaQueries(properties[prop], selector, parentSelector);
				break;
			default:
				result += `${prop}:${properties[prop]};`;
				break;
		}
	});
	return result;
}

function parseMediaQueries(properties, elementSelector, parentSelector) {
	let result = '';
	properties.map(
		propertiesMap => {
			const { selector } = propertiesMap;
			delete propertiesMap.selector;
			result += `@media ${selector}{${parentSelector}${elementSelector}{${parseProperties(propertiesMap)}}}`;
		}
	);
	return result;
}

function prepareAlign(alignment) {
	let result = "display:flex;";
	let properties = [];
	alignment.split(" ").map(align => {
		switch (align) {
			case "center":
				properties.push({ "align-items": "center" });
				properties.push({ "justify-content": "center" });
				break;
			case "bottom":
				properties.push({ "align-items": "flex-end" });
				break;
			case "top":
				properties.push({ "align-items": "flex-start" });
				break;
			case "left":
				properties.push({ "justify-content": "flex-start" });
				break;
			case "right":
				properties.push({ "justify-content": "flex-end" });
				break;
			case "column":
				properties.push({ "flex-direction": "column" });
				break;
			default:
				break;
		}
	});
	result += getPropsStringNoDuplicates(properties);
	return result;
}

function parseAnimationSteps(animationSteps) {
	let res = '';
	for (let step in animationSteps) {
		res += `${step}%{${parseProperties(animationSteps[step])}}`;
	}
	return res;
}

function getPropsStringNoDuplicates(properties) {
	const tempArray = [];
	let result = "";
	for (let prop of properties) {
		const key = Object.keys(prop)[0];
		if (tempArray.indexOf(key) < 0) {
			result += `${key}:${Object.values(prop)[0]};`;
			tempArray.push(key);
		}
	}
	return result;
}

function overrideFile(filename, content) {
	fs.open(filename, "r", function (err, fd) {
		if (err) {
			fs.writeFile(filename, content || "", function (err) {
				if (err) {
					console.log(err);
				}
			});
		} else {
			fs.writeFile(filename, content, r => {
				console.log(color(`${CONSOLE_PREFIX}CSS Updated`, "GREEN"));
			});
		}
	});
}

exports.default = function () {
	figlet("JSSheet", function (err, data) {
		if (err) {
			console.log("Something went wrong...");
			console.dir(err);
			return;
		}
		console.log(color(data, "YELLOW"));
		console.log(
			color(
				`  @author: nicolacastellanidev@gmail.com\n  @version: 1.0.0.0\n`,
				"YELLOW"
			)
		);

		const watcher = watch(["./**/jss/*.js", "./**/jss/**/*.js"]);
		watcher.on("change", function (path, stats) {
			console.log(color(`${CONSOLE_PREFIX}${path} has changed`, "GREEN"));
			parse();
		});
		parse();
	});
};

exports.parse = parse;
