"use client";
import { AppContext } from "@/app/context/ContextProvider";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";

const BudgetCard = ({ service }: any) => {
	const { services, setServices } = AppContext();

	const removeFromContext = (serviceId: string) => {
		const updatedServices = services.filter(
			(service) => service._id !== serviceId
		);
		setServices(updatedServices);
	};
	return (
		<Card className="w-[300px]">
			<CardHeader className="justify-between ">
				<div className="flex items-center gap-2">
					<Avatar src={service.image} />
					<h1 key={service._id}>{service.title}</h1>
				</div>
				<Button
					isIconOnly
					color="default"
					variant="flat"
					onClick={() => removeFromContext(service._id)}
					aria-label="Like"
					size="sm"
				>
					<p className="font-normal text-sm">X</p>
				</Button>
			</CardHeader>
			<CardBody>
				<div>
					<p className="text-sm font-thin">
						{service.description[0].children[0].text}
					</p>
					<p className="text-sm font-thin">Price: {service.price} €</p>
				</div>
			</CardBody>
		</Card>
	);
};

export default BudgetCard;

/* 
<Card shadow="sm"   >
<CardBody className="overflow-visible p-0">
  <Image
	shadow="sm"
	radius="lg"
	width="100%"
	alt={item.title}
	className="w-full object-cover h-[140px]"
	src={item.img}
  />
</CardBody>
<CardFooter className="text-small justify-between">
  <b>{item.title}</b>
  <p className="text-default-500">{item.price}</p>
</CardFooter>
</Card> */
