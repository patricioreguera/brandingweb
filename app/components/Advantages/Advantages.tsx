"use client";
import React from "react";
import { mdiSpeedometer, mdiPencilRuler, mdiCashMultiple } from "@mdi/js";
import AdvantagesItem from "./components/AdvantagesItem";
import { useLanguage } from "@/app/context/LanguageProvider";

const Advantages = () => {
	const { translate } = useLanguage();
	return (
		<section className="py-8 ">
			<div className="grid  grid-cols-1 lg:grid-cols-3  ">
				<AdvantagesItem
					icon={mdiSpeedometer}
					title={translate.SPEED}
					description_short={translate.SPEED_DESCRIPTION_SHORT}
					desciption_large={translate.SPEED_DESCRIPTION}
				/>
				<AdvantagesItem
					icon={mdiPencilRuler}
					title={translate.PERSONALIZED_DESIGN}
					description_short={translate.PERSONALIZED_DESIGN_DESCRIPTION_SHORT}
					desciption_large={translate.PERSONALIZED_DESIGN_DESCRIPTION}
				/>
				<AdvantagesItem
					icon={mdiCashMultiple}
					title={translate.SAVE_MONEY}
					description_short={translate.SAVE_MONEY_DESCRIPTION_SHORT}
					desciption_large={translate.SAVE_MONEY_DESCRIPTION}
				/>
			</div>
		</section>
	);
};

export default Advantages;
