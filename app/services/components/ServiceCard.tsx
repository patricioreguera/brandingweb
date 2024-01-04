"use client";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { ServiceInterface } from "../../interfaces/ServiceInterface";
import { Button, Divider } from "@nextui-org/react";
import { AppContext } from "@/app/context/ContextProvider";
import confetti from "canvas-confetti";
import Link from "next/link";
import { mdiEyeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useSaveService } from "@/app/hooks/useSaveService";

const ServiceCard = ({ service }: ServiceInterface) => {
	const { saveInContext, removeFromContext, handleConfetti, isDuplicate } =
		useSaveService({ service });

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
					<p className="text-sm font-light">{service?.shortdescription}</p>
				</div>
				<Divider className="my-4" />
				<div className="flex justify-between items-center ">
					<p className="text-sm font-bold">Price: {service.price} €</p>
					<div className="flex gap-3">
						{isDuplicate(service) ? (
							<>
								<Button
									/* isIconOnly */
									color="secondary"
									variant="bordered"
									onClick={() => removeFromContext(service._id)}
									aria-label="Like"
									size="sm"
								>
									<p className="font-normal text-sm">Delete Budget</p>
								</Button>
								<Button
									as={Link}
									isIconOnly
									size="sm"
									color="default"
									variant="solid"
									aria-label="add budget"
									href={`/services/${service._id}`}
								>
									<Icon path={mdiEyeOutline} size={1} />
								</Button>
							</>
						) : (
							<>
								<Button
									/* isIconOnly */
									size="sm"
									color="secondary"
									variant="solid"
									onClick={() => saveInContext(service)}
									aria-label="add budget"
									onPress={handleConfetti}
								>
									<p className="font-normal text-sm">Add Budget</p>
								</Button>
								<Button
									as={Link}
									isIconOnly
									size="sm"
									color="default"
									variant="solid"
									aria-label="add budget"
									href={`/services/${service._id}`}
								>
									<Icon path={mdiEyeOutline} size={1} />
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
