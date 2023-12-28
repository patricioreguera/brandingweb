"use client";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { ServiceIterface } from "../../interfaces/ServiceInterface";
import { Button } from "@nextui-org/react";
import { AppContext } from "@/app/context/ContextProvider";

const ServiceCard = ({ service }: ServiceIterface) => {
	const { services, setServices } = AppContext();

	const saveInContext = (item: any) => {
		// Verificar si el elemento ya existe en la lista
		const isDuplicate = services.some(
			(existingService) => existingService._id === item._id
		);

		if (!isDuplicate) {
			// Si no es un duplicado, agrégalo
			const updatedServices = [...services, item];
			setServices(updatedServices);
		}
	};

	const removeFromContext = (serviceId: string) => {
		const updatedServices = services.filter(
			(service) => service._id !== serviceId
		);
		setServices(updatedServices);
	};
	const isDuplicate = services.some(
		(existingService) => existingService._id === service._id
	);

	return (
		<div className="w-[300px] ">
			<Image
				as={NextImage}
				key={service._id}
				width={300}
				height={300}
				alt={service.title}
				src={service.image}
				/* className="hover:cursor-pointer" */
				draggable="false"
			/>
			<div className="p-3">
				<div className="flex flex-col  ">
					<h6>{service.title}</h6>
					<p className="text-sm font-thin">
						{service.description[0].children[0].text}
					</p>
				</div>
				<div className="flex justify-between items-center pt-2">
					<p className="text-lg font-bold-">Price: {service.price} €</p>
					<div className="flex gap-3">
						{isDuplicate ? (
							<Button
								isIconOnly
								color="default"
								variant="bordered"
								onClick={() => removeFromContext(service._id)}
								aria-label="Like"
							>
								<p className="font-bold text-xl">-</p>
							</Button>
						) : (
							<Button
								isIconOnly
								color="secondary"
								variant="bordered"
								onClick={() => saveInContext(service)}
								aria-label="Like"
							>
								<p className="font-bold text-xl">+</p>
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
