"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getServices } from "@/sanity/sanity-utils";
import { Button, Spacer, Divider, Image } from "@nextui-org/react";
import Link from "next/link";
import Service from "./components/Service";
import Benefits from "./components/Benefits";
import NextImage from "next/image";
import ButtonAddBudget from "./components/ButtonAddBudget";
import { ButtonToBudget } from "../components/ButtonToBudget";
import ServiceCard from "../components/ServiceCard";
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
	const [allServices, setAllServices] = useState([]);
	const pathname = usePathname();

	useEffect(() => {
		getServices().then((services: ServicesResponse) => {
			const foundService = services.find((item) => pathname.includes(item._id));
			if (foundService) {
				setService(foundService);
				setAllServices(services);
			}
		});
	}, [pathname]);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="gap-3 p-10 flex flex-col justify-center items-center bg-hero-pattern bg-no-repeat bg-cover bg-center w-full ">
				<h1 className=" leading-normal text-[3rem] lg:text-7xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
					{service?.title}
				</h1>
			</div>
			<div className="bg-white w-full text-pureBlack flex justify-center py-5">
				<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 max-w-5xl px-6 ">
					<div className="col-span-2 ">
						<Service service={service} />
						<Spacer y={16} />
						<h1>Otras sugerencias</h1>
						<Spacer y={4} />

						<div className="flex flex-wrap gap-5 justify-center items-start">
							{allServices
								?.filter((item: any) => item._id !== service?._id)
								?.map((service: any) => (
									<ServiceCard service={service} key={service._id} />
								))
								?.slice(1, 3)}
						</div>
						<Spacer y={10} />
					</div>
					<div className="bg-gradient-to-tl from-darkgray via-darkgray to-pureBlack rounded-lg flex flex-col p-5 lg:gap-3 h-fit">
						<h1 className="text-n_violet text-xl font-bold text-center">
							Beneficios Webs
						</h1>
						<Spacer y={4} />

						<Divider />
						<Benefits />
						<Spacer y={4} />
						<ButtonAddBudget service={service} />
						<Spacer y={4} />
						<ButtonToBudget />
						<Spacer y={4} />
						<h1 className="text-white text-sm text-center">Ultimos Trabajos</h1>
						<Spacer y={4} />
						<Divider />
						<div className="flex justify-center items-center">
							<Link href="/projects">
								<Image
									as={NextImage}
									src={"/images/works.jpeg"}
									alt="Producto Destacado"
									className="rounded-xl"
									draggable={false}
									width={300}
									height={300}
									isZoomed
								/>
							</Link>
						</div>
						<Spacer y={4} />
						<Button
							as={Link}
							className="w-full"
							color="default"
							variant="bordered"
							aria-label="Like"
							href="/services"
						>
							volver a servicios
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
