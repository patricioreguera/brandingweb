"use client";
import { AppContext } from "@/app/context/ContextProvider";
import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardHeader,
	Image,
	CardFooter,
} from "@nextui-org/react";
import NextImage from "next/image";
import { motion } from "framer-motion";

const BudgetCard = ({ service }: any) => {
	const { services, setServices } = AppContext();

	const removeFromContext = (serviceId: string) => {
		const updatedServices = services.filter(
			(service) => service._id !== serviceId
		);
		setServices(updatedServices);
	};
	return (
		<>
			<motion.div
				animate={{
					scale: [0, 1],
					rotate: [30, 0],
				}}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
					duration: 10,
				}}
				/* initial={{ scale: 0 }}
				animate={{ rotate: 0, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
					duration: 10,
				}} */
			>
				<Card
					isFooterBlurred
					className="w-[250px]  h-[250px]col-span-12 sm:col-span-7 "
				>
					<CardHeader className="absolute z-10 top-1 flex-col items-end">
						<Button
							isIconOnly
							color="default"
							variant="shadow"
							onClick={() => removeFromContext(service._id)}
							aria-label="Like"
							size="sm"
						>
							<p className="font-normal text-sm">X</p>
						</Button>
					</CardHeader>
					<NextImage
						/* removeWrapper */
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover"
						src={service.image}
						draggable={false}
						width={1000}
						height={1000}
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
						<div className="flex flex-grow gap-2 items-center">
							<div className="flex flex-col">
								<p className="text-tiny text-white">{service.title}</p>
								<p className="text-tiny text-white/60">
									{service.shortdescription.slice(0, 40)}...
								</p>
							</div>
						</div>
					</CardFooter>
				</Card>
			</motion.div>
			{/* 	<Card className="w-[300px]">
				<CardHeader className="justify-between bg-black  ">
					<Image
						key={service.id}
						width={100}
						height={45}
						alt={service.name}
						src={service.image}
						draggable={false}
						className="object-cover"
					/>
					<div className="flex items-center gap-4">
						
						<NextImage
							key={service.id}
							width={45}
							height={45}
							alt={service.name}
							src={service.image}
							draggable={false}
							className="rounded-full"
						/>
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
						<p className="text-sm font-thin">{service.shortdescription}</p>
						<p className="text-sm font-thin">Price: {service.price} €</p>
					</div>
				</CardBody>
			</Card> */}
		</>
	);
};

export default BudgetCard;
