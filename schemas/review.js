export default {
	name: 'review',
	title: 'Review',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		// {
		// 	name: 'slug',
		// 	title: 'Slug',
		// 	type: 'slug',
		// 	options: {
		// 		source: 'title',
		// 		maxLength: 96,
		// 	},
		// },
		{
			name: 'reviewer',
			title: 'Reviewer Name',
			type: 'string',
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			})
		},
	},
}
