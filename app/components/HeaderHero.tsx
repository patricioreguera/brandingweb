import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

const HeaderHero = () => {
	return (
		<div className="w-full bg-gradient-to-br from-n_secondary via-primaryDark to-primaryDark -mt-16">
			<header className="grid grid-cols-1 items-center justify-center p-5  mt-20 min-h-[calc(75vh-64px)] bg-hero-pattern bg-no-repeat bg-cover lg:grid-cols-3 gap-5 lg:p-20">
				<div className="text-center leading-9 md:leading-10 md:text-left col-span-2">
					<h1 className="tracking-tight inline font-semibold text-[3rem] lg:text-7xl">
						Comienza tu Viaje Digital Ahora!
					</h1>
					<h4 className="w-full my-2 font-thin lg:text-xl  text-default-500 block max-w-full ">
						Destaca en línea con nuestro servicio de diseño web.
					</h4>
					<Button
						as={Link}
						/* color="primary" */
						href="/projects"
						variant="shadow"
						className="mt-5 bg-n_secondary"
					>
						View Projects
					</Button>
				</div>
				<div className="col-span-1"></div>
			</header>
		</div>
	);
};

export default HeaderHero;
