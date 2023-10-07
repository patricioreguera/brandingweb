import React from "react";
import { Image } from "@nextui-org/image";

const ProductHero = () => {
	return (
		<section className=" py-8 ">
			<div className="container mx-auto">
				<h2 className="text-2xl font-bold text-center mb-4">
					Nuestro Producto Destacado
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Imagen del Producto */}
					<div className="mx-auto">
						<Image
							src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
							alt="Producto Destacado"
							className="max-w-full"
						/>
					</div>
					{/* Descripción del Producto */}
					<div>
						<p className="text-xl mb-2">
							Presentamos nuestro producto estrella, diseñado para potenciar tu
							marca y satisfacer todas tus necesidades en línea.
						</p>
						<ul className="list-disc pl-4">
							<li>Característica 1 del Producto.</li>
							<li>Característica 2 del Producto.</li>
							<li>Característica 3 del Producto.</li>
							{/* Agrega más características del producto según sea necesario */}
						</ul>
						<div className="mt-4">
							<p className="text-2xl font-semibold">
								¡Obtén este increíble producto hoy mismo!
							</p>
							<p className="text-lg">
								Contacta con nosotros para más detalles y precios.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductHero;
