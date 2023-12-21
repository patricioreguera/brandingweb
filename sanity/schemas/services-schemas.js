const services = {
	name: "services",
	title: "Services",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
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
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			title: "Price",
			name: "price",
			type: "number",
			inputComponent: NumericInput,
			validation: (Rule) => Rule.positive(),
			options: {
				decimalScale: 2,
				fixedDecimalScale: true,
				allowNegative: false,
				decimalSeparator: ",",
				thousandSeparator: ".",
				prefix: "€ ",
			},
		},
	],
};

export default services;
