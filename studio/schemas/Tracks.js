export default {
	name: 'track',
	title: 'Track',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'file',
			title: 'File',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
	],
}
