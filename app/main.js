define({

	theme: { module: 'css!theme/basic.css' },

	commentBox: {
		render: {
			template: { module: 'text!app/box/template.html' },
			replace: { module: 'i18n!app/box/strings' }
		},
		insert: { first: 'dom.first!body' }
	},

	commentList: {
		render: { module: 'text!app/list/template.html' },
		insert: { last: 'commentBox' },
		bind: {
			to: { $ref: 'comments' },
			bindings: {
				author: '.commentAuthor',
				text: { selector: '.commentText', handler: { module: 'app/markdown' } }
			}
		}
	},

	commentForm: {
		render: {
			template: { module: 'text!app/form/template.html' },
			replace: { module: 'i18n!app/form/strings' }
		},
		insert: { after: 'commentList' },
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
		bind: { to: { $ref: 'comments' } }
	},

	form: { module: 'cola/dom/form' },

	// Wire.js plugins
	plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		{ module: 'wire/dom/render' },
		{ module: 'wire/on' },
		{ module: 'cola' }
	]
});