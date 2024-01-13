interface Datos {
	nombre: string;
	fecha: string;
	url: string;
	imagen: string;
}

const api = {
	demo: {
		list: async (): Promise<Datos[]> => {
			return fetch(
				/* "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ27i53CM7YLN4qS1udBR7vLGW0mVIX-KmAsp2AYo8qlvR6xlh7p5Mgu7IOPiIzPuwqFdmCqNq2HTxN/pub?output=tsv" */
				"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ27i53CM7YLN4qS1udBR7vLGW0mVIX-KmAsp2AYo8qlvR6xlh7p5Mgu7IOPiIzPuwqFdmCqNq2HTxN/pub?output=tsv"
			)
				.then((res) => res.text())
				.then((text) => {
					return text
						.split("\n")
						.slice(1)
						.map((row) => {
							const [, fecha, nombre, url, imagen] = row.split("\t");
							return {
								fecha,
								nombre,
								url,
								imagen,
							};
						});
				});
		},
	},
};
export default api;
