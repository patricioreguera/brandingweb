"use client";
import { AppContext } from "@/app/context/ContextProvider";
import { Avatar, Button } from "@nextui-org/react";

const BudgetCard = ({ service }: any) => {
	const { services, setServices } = AppContext();

	const removeFromContext = (serviceId: string) => {
		const updatedServices = services.filter(
			(service) => service._id !== serviceId
		);
		setServices(updatedServices);
	};
	return (
		<div className="flex gap-5 items-center justify-between">
			<div className="flex gap-5">
				<div>
					<Avatar src={service.image} />
				</div>
				<div>
					<h1 key={service._id}>{service.title}</h1>
					<p className="text-sm font-thin">
						{service.description[0].children[0].text}
					</p>
					<p className="text-sm font-thin">Price: {service.price} €</p>
				</div>
			</div>
			<div>
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
			</div>
		</div>
	);
};

export default BudgetCard;
