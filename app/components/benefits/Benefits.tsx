import React from "react";

import BenefitsCard from "./components/BenefitsCard";

const Benefits = () => {
	const benefitsList = [
		"Sitios web diseñados a medida que se adaptan a tus necesidades específicas.",
		"Fácil autoadministración y edición con solo unos clics.",
		"Genera ingresos con tu catálogo de productos o servicios y acepta pagos en línea de manera segura.",
		"Optimización para los motores de búsqueda con palabras clave que definen tu marca.",
		"Conexión directa con tus Redes Sociales: tus actualizaciones en redes aparecerán en tu sitio web.",
		"Soporte postventa ilimitado para resolver tus dudas en cualquier momento.",
	];

	return (
		<section className="py-8">
			<div className="container mx-auto">
				<div className="text-center py-12 ">
					<div className="inline-block ">
						<h1 className="tracking-tight inline font-semibold text-[3rem] lg:text-7xl ">
							Nuestos&nbsp;
						</h1>
						<h1 className="tracking-tight inline font-semibold from-colorgradient1 to-btngradient2 text-[3rem] lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r">
							Beneficios
						</h1>
					</div>
				</div>
				<div className=" grid grid-cols-2 gap-5 lg:grid-cols-3">
					{benefitsList.map((benefit, index) => (
						<BenefitsCard benefit={benefit} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
