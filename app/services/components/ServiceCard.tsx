"use client";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { ServiceInterface } from "../../interfaces/ServiceInterface";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { mdiEyeOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useSaveService } from "@/app/hooks/useSaveService";
import { useLanguage } from "@/app/context/LanguageProvider";

const ServiceCard = ({ service }: ServiceInterface) => {
	const { translate } = useLanguage();
	const { saveInContext, removeFromContext, handleConfetti, isDuplicate } =
		useSaveService({ service });

	return (
		<div className="w-[300px] ">
			<Link href={`/services/${service._id}`}>
				<NextImage
					key={service._id}
					width={500}
					height={500}
					alt={service.title}
					src={`${service.image}?fit=crop&w=1000&h=1000`}
					draggable="false"
					className="rounded-xl"
				/>
			</Link>
			{/* <Image
				key={service._id}
				width={300}
				height={300}
				alt={service.title}
				src={`${service.image}?fit=crop&w=1000&h=1000`}
				draggable="false"
			/> */}
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
									aria-label="Delete budget"
									size="sm"
								>
									{translate.DELETE_BUDGET}
								</Button>
								<Button
									as={Link}
									isIconOnly
									size="sm"
									color="default"
									variant="solid"
									aria-label="view budget"
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
									{translate.ADD_BUDGET}
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
