import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import imageBackground from "../../public/background.svg";
const HeaderHero = () => {
	return (
		<header className="flex items-center justify-center flex-col w-full mt-20 min-h-[calc(75vh-64px)]  bg-hero-pattern bg-no-repeat bg-cover ">
			<div className="text-center leading-9 md:leading-10 md:text-left">
				<div className="inline-block">
					<h1 className="tracking-tight inline font-semibold text-[3rem] lg:text-7xl">
						Comienza tu Viaje&nbsp;
					</h1>
					<h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[3rem] lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r">
						Digital&nbsp;
					</h1>
				</div>
				<h1 className="tracking-tight inline font-semibold text-[3rem] lg:text-7xl">
					Ahora!
				</h1>
			</div>
			<h4 className="w-full my-2 font-thin lg:text-xl  text-default-500 block max-w-full text-center  ">
				Destaca en línea con nuestro servicio de diseño web.
			</h4>
			<Button
				as={Link}
				color="primary"
				href="/projects"
				variant="shadow"
				className="mt-5"
			>
				View Projects
			</Button>
		</header>
	);
};

export default HeaderHero;
