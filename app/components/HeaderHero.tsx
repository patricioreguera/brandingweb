import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";
import heropicture from "../../public/images/heropicture.png";
const HeaderHero = () => {
	return (
		<div className="w-full bg-gradient-to-b  mt-8 ">
			<header className="grid grid-cols-1 items-center justify-center mt-20 min-h-[calc(90vh-64px)] bg-hero-pattern bg-no-repeat bg-cover  lg:grid-cols-2 gap-3 ">
				<div className="text-center leading-9 md:leading-10 col-span-1 lg:pl-36 ">
					<h1 className="tracking-tight  inline font-semibold  text-[4rem] lg:text-8xl bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
						Comienza tu viaje Digital Ahora
					</h1>
					<h4 className="w-full my-2 font-thin lg:text-xl text-default-500 block max-w-full  ">
						Destaca en línea con nuestro servicio de diseño web.
					</h4>
					<Button
						as={Link}
						/* color="primary" */
						href="/projects"
						variant="shadow"
						className="mt-5 bg-white text-r_black"
					>
						View Projects
					</Button>
				</div>
				<div className="col-span-1 flex justify-center">
					<Image src={heropicture} alt="Producto Destacado" className="" />
				</div>
			</header>
		</div>
	);
};

export default HeaderHero;
