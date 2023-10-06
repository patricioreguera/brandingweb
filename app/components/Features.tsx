// components/Features.js
import React from "react";

const Features = () => {
	return (
		<section className="py-8">
			<div className="container mx-auto">
				<h2 className="text-2xl font-bold text-center mb-4">
					Beneficios Destacados
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="p-4 border border-gray-200 rounded shadow-lg">
						<h3 className="text-xl font-semibold mb-2">
							Diseños Personalizados
						</h3>
						<p>Crearemos un sitio web único según tus necesidades.</p>
					</div>
					<div className="p-4 border border-gray-200 rounded shadow-lg">
						<h3 className="text-xl font-semibold mb-2">Fácil de Administrar</h3>
						<p>Edición y gestión sencilla con unos pocos clics.</p>
					</div>
					<div className="p-4 border border-gray-200 rounded shadow-lg">
						<h3 className="text-xl font-semibold mb-2">Optimizado para SEO</h3>
						<p>Mejora la visibilidad de tu marca en los motores de búsqueda.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
