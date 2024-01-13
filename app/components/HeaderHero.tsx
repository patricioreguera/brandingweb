"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";
import heropicture from "../../public/images/heropicture.png";
import { useLanguage } from "../context/LanguageProvider";

const HeaderHero = () => {
	const { translate } = useLanguage();
	return (
		<div className="w-full bg-gradient-to-b  mt-3 lg:mt-0">
			<header className="grid grid-cols-1 items-center justify-center mt-20 min-h-[calc(90vh-64px)] bg-hero-pattern bg-no-repeat bg-cover  lg:grid-cols-2 gap-3 ">
				<div className="text-center leading-9 md:leading-10 col-span-1 lg:pl-36 ">
					<h1 className="lg:leading-[60px]   inline font-semibold  text-[4rem] lg:text-8xl  md:tracking-tight  md:inline md:font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
						{translate?.HERO_TITLE || "Start your Digital Journey Now"}
					</h1>
					<h4 className="w-full my-2 font-thin lg:text-xl text-default-500 block max-w-full tracking-wide ">
						{translate?.HERO_DESCRIPTION ||
							"Stand out online with our web design service."}
					</h4>
					<Button
						as={Link}
						color="primary"
						href="/projects"
						variant="shadow"
						className="mt-5 bg-white text-r_black"
					>
						{translate?.VIEW_PROJECTS || "View Projects"}
					</Button>
				</div>
				<div className="col-span-1 flex justify-center">
					<Image src={heropicture} alt="Producto Destacado" draggable="false" />
				</div>
			</header>
		</div>
	);
};

export default HeaderHero;
