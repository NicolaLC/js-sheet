const fs = require("fs");
const { watch } = require('gulp');
function sniff(data) {
	setTimeout(() => {
		delete require.cache[require.resolve('./jss/styles')]
		const { stylesheets } = require('./jss/styles');
		return parseContent(stylesheets);
	}, 1000);
}

function parseContent(original) {
	const result = parseSniffet(original);
	overrideFile("./dist/dist.css", result);
	return Promise.resolve();
}

function parseSniffet(original) {
	let result = "";

	result = parseObject(original['root']);

	return result;
}

function parseObject(root) {
	let result = '';
	const {selector} = root;
	result += parseElement(selector,root);
	if (root.childrens) {
		root.childrens.map(child => {
			result += parseObject( child );
		})
	}

	return result;
}

function parseElement(selector, properties, parentSelector) {
	return `${
		parentSelector ? parentSelector + " " : ""
	}${selector}{${parseProperties(properties)}}`;
}

function parseProperties(properties) {
	let result = "";
	Object.keys(properties).map(prop => {
		switch (prop) {
			case "align":
				result += prepareAlign(properties[prop]);
				break;
			case 'selector':
      case "childrens": break;
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
			fs.writeFile(filename, content, r => {console.log('JSS updated')});
		}
	});
}

exports.default = function() {
	const watcher = watch('./**/jss/*.js',{usePolling: true, delay: 5000}).on('change', sniff);
	watcher.on('change', function(path, stats) {
		console.log(`File ${path} was changed`);
	});
};

exports.sniff = sniff;