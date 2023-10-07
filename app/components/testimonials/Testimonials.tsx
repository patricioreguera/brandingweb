import React from "react";
import TestimonialsCard from "./components/TestimonialsCard";

const Testimonials = () => {
	const testimonials = [
		{
			id: "1",
			name: "Gerogina Barleta",
			company: "Brave",
			testimony:
				"La experiencia fue de lo mejor, nos demoramos en entregar unas fotografías y Patricio lo supo resolver como para que no perdamos tiempo en tener nuestro sitio en línea. Muchas gracias por todo",
		},
		{
			id: "2",
			name: "Martina G",
			company: "Growing Up",
			testimony:
				"Excelente trabajo, quedamos muy satisfechos con nuestro logotipo y la identidad de la marca",
		},
		{
			id: "3",
			name: "Marc S.",
			company: "Machine Shop",
			testimony:
				"Quedé muy conforme con nuestro sitio web, agradezco a Patricio por el trato y la paciencia.",
		},
	];

	return (
		<section className=" py-8 ">
			<div className="container mx-auto">
				<h2 className="text-2xl font-bold text-center mb-4">
					Testimonios Destacados
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{testimonials.map((testimonial) => (
						<TestimonialsCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
