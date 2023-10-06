import React from "react";

const Testimonials = () => {
	return (
		<section className=" py-8 ">
			<div className="container mx-auto">
				<h2 className="text-2xl font-bold text-center mb-4">
					Testimonios Destacados
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="p-4 border border-gray-200 rounded shadow-lg">
						<p className="text-xl mb-2">
							&quot;La experiencia fue de lo mejor, nos demoramos en entregar
							unas fotografías y Patricio lo supo resolver como para que no
							perdamos tiempo en tener nuestro sitio en línea. Muchas gracias
							por todo.&quot; - Gerogina Barleta, Propietaria de Brave.
						</p>
					</div>
					<div className="p-4 border border-gray-200 rounded shadow-lg">
						<p className="text-xl mb-2">
							&quot;Excelente trabajo, quedamos muy satisfechos con nuestro
							logotipo y la identidad de la marca.&quot; - Martina G.,
							Propietaria de Growing Up.
						</p>
					</div>
					<div className="p-4 border border-gray-200 rounded shadow-lg">
						<p className="text-xl mb-2">
							&quot;Quedé muy conforme con nuestro sitio web, agradezco a
							Patricio por el trato y la paciencia.&quot; - Marc S., Propietario
							de Machine Shop.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
