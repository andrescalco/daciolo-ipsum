;(function (root, factory) {
	'use strict'
	if (typeof define === 'function' && define.amd) {
		define('DACIOLO', factory)
	} else if (typeof exports === 'object') {
		exports = module.exports = factory()
	} else {
		root.DACIOLO = factory()
	}
})(this, function () {
	const quotes = require('quotes')

	const defaults = {
		paragraphs: 2,
		quotes_per_paragraph: 3,
		wrap_with_paragraph_tags: false,
	}

	const random = number => Math.floor(Math.random() * number) + 1;

	const generate_quote = (options) => {

		const args = { ...defaults, ...options }
		const { paragraphs, quotes_per_paragraph, wrap_with_paragraph_tags } = args;

		let text = "";

		for (let i = 1; i <= paragraphs; i++) {
			
			if ( wrap_with_paragraph_tags ) {
				text += '<p>'
			}

			for (let i = 1; i <= quotes_per_paragraph; i++) {
				text += quotes[random(quotes.length -1)];
				text += " ";
			}

			if ( wrap_with_paragraph_tags ) {
				text += '</p>'
			} else {
				text += ` \n`;
				text += ` \n`;
			}
		}

		return text;

	}

	return {
		generate_quote
	}

})