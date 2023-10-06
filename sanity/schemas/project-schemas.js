const project = {
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "image",
			title: "Imagen",
			type: "image",
			options: {
				hotspot: true, // <-- Defaults to false
			},
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
		},
		{
			name: "url",
			title: "URL",
			type: "url",
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "inputType",
			title: "Input Type",
			type: "string",
			initialValue: "text",
			options: {
				layout: "dropdown",
				list: [
					{ value: "web", title: "Website" },
					{ value: "design", title: "Design" },
					{ value: "marketing", title: "Marketing" },
					{ value: "branding", title: "Branding" },
				],
			},
		},
	],
};

export default project;
