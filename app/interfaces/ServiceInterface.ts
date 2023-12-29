export interface ServiceInterface {
	service: {
		_id: string;
		title: string;
		image: string;
		inputType: string;
		url: string;
		price: number;
		description: {
			children: {
				text: string;
			}[];
		}[];
	};
}