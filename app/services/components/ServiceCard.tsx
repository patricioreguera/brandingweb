"use client";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { ServiceIterface } from "../../interfaces/ServiceInterface";
import { Button } from "@nextui-org/react";
import { AppContext } from "@/app/context/ContextProvider";

const ServiceCard = ({ service }: ServiceIterface) => {
	const { services, setServices } = AppContext();

	const saveInContext = (item: any) => {
		const isDuplicate = services.some(
			(existingService) => existingService._id === item._id
		);

		if (!isDuplicate) {
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
				draggable="false"
			/>
			<div className="p-3">
				<div className="flex flex-col ">
					<h6>{service.title}</h6>
					<p className="text-sm font-thin">
						{service.description[0].children[0].text}
					</p>
				</div>
				<div className="flex justify-between items-center pt-2">
					<p className="text-lg font-bold">Price: {service.price} €</p>
					<div className="flex gap-3">
						{isDuplicate ? (
							<Button
								/* isIconOnly */
								color="default"
								variant="bordered"
								onClick={() => removeFromContext(service._id)}
								aria-label="Like"
								size="sm"
							>
								<p className="font-normal text-sm">Delete Budget</p>
							</Button>
						) : (
							<Button
								/* isIconOnly */
								size="sm"
								color="secondary"
								variant="solid"
								onClick={() => saveInContext(service)}
								aria-label="add budget"
							>
								<p className="font-normal text-sm">Add Budget</p>
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
