"use client";
import { useEffect, useState } from "react";
import { AppContext } from "../context/ContextProvider";
import BudgetCard from "./components/BudgetCard";
import { Button, useDisclosure } from "@nextui-org/react";
import TopHeroBar from "../components/TopHeroBar/TopHeroBar";
import { ModalComponent } from "../components/Modal/ModalComponent";
import { whatsappSender } from "../utils/whatsappSender";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";

const Budget = () => {
	const { services, clientName } = AppContext();

	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const totalBudget = (services: any) => {
		let total = 0;
		for (let i = 0; i < services.length; i++) {
			total += services[i].price;
		}
		return total;
	};

	useEffect(() => {
		if (!clientName) {
			onOpen();
		}
	}, []);

	return (
		<>
			<TopHeroBar
				title="Budget"
				description="Revisa tu presupuesto y envianos tu consulta"
			/>
			<div className="gap-4  flex flex-col justify-center items-center ">
				<div className="flex flex-col gap-5 p-20">
					{services.map((service) => (
						<BudgetCard service={service} key={service._id} />
					))}
				</div>
				<div className="flex    justify-center items-center gap-10">
					<p>Total {totalBudget(services)} €</p>

					<Button
						color="success"
						variant="bordered"
						onClick={() => whatsappSender({ services, clientName })}
					>
						<Icon path={mdiWhatsapp} title="Whatsapp Icon" size={1} />
						Send
					</Button>
					<ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} />
				</div>
			</div>
		</>
	);
};

export default Budget;
