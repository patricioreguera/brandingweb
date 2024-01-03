"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getServices } from "@/sanity/sanity-utils";
import { Button, Spacer, Divider } from "@nextui-org/react";
import Link from "next/link";
import Service from "./components/Service";
import Benefits from "./components/Benefits";
import Image from "next/image";
import works from "../../../public/images/works.jpeg";
import WorkProcess from "./components/WorkProcess";
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
			<div className="gap-3 p-10 flex flex-col justify-center items-center bg-hero-pattern bg-no-repeat bg-cover bg-center w-full ">
				<h1 className="leading-normal text-[3rem] lg:text-7xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
					{service?.title}
				</h1>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 max-w-5xl p-5 ">
				<div className="col-span-2 p-5">
					<Service service={service} />
				</div>
				<div className="bg-gradient-to-tl from-darkgray via-darkgray to-pureBlack rounded-lg flex flex-col p-5 lg:gap-5 h-fit">
					<h1 className="text-n_violet text-xl font-bold text-center">
						Beneficios
					</h1>
					<Divider />
					<Benefits />
					<Spacer y={4} />
					<Button>Add Budget</Button>
					<Spacer y={4} />
					<Image
						src={works}
						alt="Producto Destacado"
						className="rounded-xl"
						draggable={false}
					/>
					<Spacer y={4} />
				</div>
			</div>
			{/* 			<div className=" max-w-5xl text-center">
				<Spacer y={10} />
				<h6 className="text-sm">¿Empezamos juntos un nuevo proyecto?</h6>
				<h1 className="text-4xl"> Mi proceso de trabajo</h1>
				<Spacer y={10} />
				<WorkProcess />
			</div> */}
		</div>
	);
};

export default Page;
