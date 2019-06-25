const fs = require("fs");
const { watch } = require("gulp");

function parse() {
	delete require.cache[require.resolve("./jss/styles")];
	const { stylesheets } = require("./jss/styles");
	try {
		return parseContent(stylesheets);
	} catch (e) {
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
	return result;
}

function parseObject(root, parentSelector) {
	let result = "";
	const { selector } = root;
	result += parseElement(selector, root, parentSelector);
	if (root.childrens) {
		root.childrens.map(child => {
			result += parseObject(child, selector);
		});
	}

	return result;
}

function parseElement(selector, properties, parentSelector = "") {
	if (parentSelector && selector.indexOf(":") < 0) {
		parentSelector += " ";
	}
	return `${parentSelector}${selector}{${parseProperties(properties)}}`;
}

function parseProperties(properties) {
	let result = "";
	Object.keys(properties).map(prop => {
		switch (prop) {
			case "align":
				result += prepareAlign(properties[prop]);
				break;
			case "content":
				const content = properties[prop].trim();
				result +=  `${prop}:${!content ? '" "': content};`;
				break;
			case "selector":
			case "childrens":
				break;
			default:
				result += `${prop}:${properties[prop]};`;
				break;
		}
	});
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
	fs.open(filename, "r", function(err, fd) {
		if (err) {
			fs.writeFile(filename, content || "", function(err) {
				if (err) {
					console.log(err);
				}
			});
		} else {
			fs.writeFile(filename, content, r => {
				console.log("JSS updated");
			});
		}
	});
}

exports.default = function() {
	const watcher = watch(["./**/jss/*.js","./**/jss/**/*.js"]);
	watcher.on("change", function(path, stats) {
		console.log(`File ${path} was changed`);
		parse();
	});
};

exports.parse = parse;
