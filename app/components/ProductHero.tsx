import React from "react";
/* import { Image } from "@nextui-org/image"; */
import Image from "next/image";
import fastloading from "../../public/images/fast-loading.png";
import loading from "../../public/images/loading.png";
import { Progress } from "@nextui-org/progress";

const ProductHero = () => {
	return (
		<section className="py-8 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
				{/* Imagen del Producto */}
				<div className="mx-auto">
					<Image
						src={loading}
						alt="Producto Destacado"
						className=""
						height={500}
					/>
				</div>
				{/* Descripción del Producto */}
				<div>
					<h1 className="tracking-tight  inline font-semibold  text-[2rem] lg:text-7xl">
						Fast Loading
					</h1>
					<ul className="list-disc pl-4">
						<li>Característica 1 del Producto.</li>
						<li>Característica 2 del Producto.</li>
						<li>Característica 3 del Producto.</li>
						{/* Agrega más características del producto según sea necesario */}
					</ul>
					<p>Comparativa de velocidad de carga en segundos</p>
					<h1>Nuestra Web</h1>
					<p>0,5 seg</p>
					<Progress aria-label="Loading..." value={20} className="max-w-md" />
					<h1>Wordpress</h1>
					<Progress
						aria-label="Loading..."
						color="default"
						value={80}
						className="max-w-md"
					/>
					<p>5 seg</p>
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
		</section>
	);
};

export default ProductHero;
