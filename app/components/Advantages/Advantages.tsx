"use client";
import React from "react";
import { mdiSpeedometer, mdiPencilRuler, mdiCashMultiple } from "@mdi/js";
import AdvantagesItem from "./components/AdvantagesItem";
import { AppContext } from "../../context/ContextProvider";
import { useLanguage } from "@/app/context/LanguageProvider";
import { LanguageSwitcher } from "../LanguageButton/LanguageSwitcher";
const Advantages = () => {
	const { t } = useLanguage();
	return (
		<section className="py-8 ">
			<div className="grid  grid-cols-1 lg:grid-cols-3  ">
				<AdvantagesItem
					icon={mdiSpeedometer}
					title={t.SPEED}
					description_short={
						"Nuestras web cargan un 200% mas rapidas que la competencia"
					}
					desciption_large={
						"Ahorra hasta 200€ anuales con nuestra tecnologica libre de alojamiento web"
					}
				/>
				<AdvantagesItem
					icon={mdiPencilRuler}
					title={t.PERSONALIZED_DESIGN}
					description_short={
						"Todos nuestros diseños son personalizados, sin templates"
					}
					desciption_large={
						"Ahorra hasta 200€ anuales con nuestra tecnologica libre de alojamiento web"
					}
				/>
				<AdvantagesItem
					icon={mdiCashMultiple}
					title={t.SAVE_MONEY}
					description_short={
						"Ahorra hasta 200€ anuales con nuestra tecnologica libre de alojamiento web"
					}
					desciption_large={
						"Ahorra hasta 200€ anuales con nuestra tecnologica libre de alojamiento web"
					}
				/>
			</div>
		</section>
	);
};

export default Advantages;
