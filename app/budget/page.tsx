"use client";
import { useEffect } from "react";
import { AppContext } from "../context/ContextProvider";
import BudgetCard from "./components/BudgetCard";
import { Button, useDisclosure } from "@nextui-org/react";
import { ModalComponent } from "../components/Modal/ModalComponent";
import { whatsappSender } from "../utils/whatsappSender";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";
import { useLanguage } from "../context/LanguageProvider";

const Budget = () => {
	const { services, clientName } = AppContext();
	const { translate } = useLanguage();

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
			<div className="gap-3 p-20 flex flex-col justify-center items-center bg-hero-pattern bg-no-repeat bg-cover bg-center">
				<h1 className="leading-none text-[3rem] lg:text-7xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
					{`${translate?.HI || "Hello"} ${clientName}`}
				</h1>
				<p>{translate?.HI_DESCRIPTION} </p>
			</div>

			<div className="gap-4  flex flex-col justify-center items-center ">
				<div className="flex flex-col lg:flex-row flex-wrap gap-5 lg:p-5 p-5">
					{services.map((service) => (
						<BudgetCard service={service} key={service._id} />
					))}
				</div>
				<div className="flex items-center gap-10">
					<p>Total {totalBudget(services)} €</p>

					<Button
						color="success"
						variant="solid"
						onClick={() => whatsappSender({ services, clientName })}
					>
						<Icon path={mdiWhatsapp} title="Whatsapp Icon" size={1} />
						{translate?.SEND}
					</Button>
					<ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} />
				</div>
			</div>
		</>
	);
};

export default Budget;
