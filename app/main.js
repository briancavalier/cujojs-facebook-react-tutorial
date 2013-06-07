define({

	theme: { module: 'css!theme/basic.css' },

	commentList: {
		element: { $ref: 'dom.first!.commentList' },
		bind: {
			to: { $ref: 'comments' },
			bindings: {
				author: '.commentAuthor',
				text: { selector: '.commentText', handler: { module: 'app/markdown' } }
			}
		}
	},

	commentForm: {
		element: { $ref: 'dom.first!.commentForm' },
		on: {
			'submit': 'form.getValues | comments.add | commentForm.reset'
		}
	},

	comments: { create: 'cola/Collection' },
	commentsData: {
		literal: [
			{ id: 1, author: '@briancavalier (Brian Cavalier)', text: 'This is one comment' },
			{ id: 2, author: 'cujoJS', text: 'This is *another* comment' }
		],
		bind: {
			to: { $ref: 'comments' }
		}
	},

	form: { module: 'cola/dom/form' },

	// Wire.js plugins
	plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		{ module: 'wire/on' },
		{ module: 'cola' }
	]
});