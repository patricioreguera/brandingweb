"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getServices } from "@/sanity/sanity-utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";
// Ajusta el tipo ServiceInterface para que coincida con la estructura de tus servicios
export interface ServiceInterface {
	_id: string;
	title: string;
	image: string;
	inputType: string;
	url: string;
	price: number;
	shortdescription: string;
	description: string;
	demo: string;
}

// Define el tipo para la respuesta de getServices
type ServicesResponse = ServiceInterface[];

const Page = () => {
	const [service, setService] = useState<ServiceInterface | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		getServices().then((services: ServicesResponse) => {
			const foundService = services.find((item) => pathname.includes(item._id));
			if (foundService) {
				setService(foundService);
			}
		});
	}, [pathname]);

	const renderTextWithLineBreaks = (text: string) => {
		return text?.split("<br />").map((line) => (
			<>
				{line}
				<br />
			</>
		));
	};

	// Asegúrate de manejar el caso en que el servicio no esté definido
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="bg-r_black w-full p-1">
				<Button
					as={Link}
					color="default"
					variant="ghost"
					size="sm"
					aria-label="back to services"
					href="/services"
				>
					volver a servicios
				</Button>
			</div>
			<div className="gap-3 p-20 flex flex-col justify-center items-center bg-hero-pattern bg-no-repeat bg-cover bg-center w-full">
				<h1 className="leading-none text-[3rem] lg:text-7xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
					{service?.title}
				</h1>
				<p className="max-w-[900px] p-5">{service?.shortdescription}</p>
			</div>
			<p className="max-w-[900px] p-5">
				{service && renderTextWithLineBreaks(service?.description)}
			</p>
		</div>
	);
};

export default Page;
