/** @license MIT License (c) copyright 2010-2013 original author or authors */
var marked = require('marked');

/**
 * A simple cola markdown formatter
 */
module.exports = function(node, data, info) {
	node.innerHTML = marked(data[info.prop]);
};
