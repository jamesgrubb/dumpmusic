export default {
	name: 'siteSettings',
	title: 'Settings',
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
		},
		{
			name: 'tracks',
			title: 'Tracks',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'track' }],
				},
			],
			options: {
				filter: ({ document }) => {
					const ids = document.tracks.map((trk) => trk._ref).filter(Boolean)
					return {
						filter: '!(_id in $ids)',
						params: { ids },
					}
				},
			},
			validation: (Rule) => Rule.required(),
		},
	],
}
