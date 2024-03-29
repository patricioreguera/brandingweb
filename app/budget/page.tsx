"use client";
import { AppContext } from "../context/ContextProvider";
import BudgetCard from "./components/BudgetCard";
import { Button } from "@nextui-org/react";
import { whatsappSender } from "../utils/whatsappSender";
import Icon from "@mdi/react";
import { mdiWhatsapp, mdiPlusBox } from "@mdi/js";
import { useLanguage } from "../context/LanguageProvider";
import { redirect } from "next/navigation";
import Link from "next/link";
const Budget = () => {
	const { services } = AppContext();
	const { translate } = useLanguage();

	const totalBudget = (services: any) => {
		let total = 0;
		for (let i = 0; i < services.length; i++) {
			total += services[i].price;
		}
		return total;
	};

	if (services.length === 0) {
		redirect("/services");
	}

	return (
		<>
			<div className=" bg-promo-pattern bg-no-repeat bg-cover bg-center">
				<div className="gap-3 p-20 flex flex-col justify-center items-center bg-gradient-to-t from-pureBlack  to-pureBlack/0">
					<h1 className="leading-none text-[3rem] lg:text-7xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
						{`${translate?.HI || "Hello"}`}
					</h1>
					<p>{translate?.HI_DESCRIPTION} </p>
				</div>
			</div>

			<div className="gap-4 flex flex-col justify-center items-center">
				<div className="flex flex-col lg:flex-row flex-wrap gap-5 lg:p-5 p-5 justify-center items-center">
					{services.map((service) => (
						<BudgetCard service={service} key={service._id} />
					))}
				</div>
				<div className="flex flex-col lg:flex-row items-center gap-5 ">
					<p>Total {totalBudget(services)} €</p>
					<Button color="secondary" variant="solid" as={Link} href="/services">
						<Icon path={mdiPlusBox} title="Whatsapp Icon" size={1} />
						{translate.MORE_SERVICES}
					</Button>
					<Button
						color="success"
						variant="solid"
						onClick={() => whatsappSender({ services })}
					>
						<Icon path={mdiWhatsapp} title="Whatsapp Icon" size={1} />
						{translate?.SEND}
					</Button>
				</div>
			</div>
		</>
	);
};

export default Budget;
