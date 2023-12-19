"use client";
import React from "react";
import { mdiSpeedometer, mdiPencilRuler, mdiCashMultiple } from "@mdi/js";
import AdvantagesItem from "./components/AdvantagesItem";

const Advantages = () => {
	return (
		<section className="py-8 ">
			<div className="grid  grid-cols-1 lg:grid-cols-3  ">
				<AdvantagesItem
					icon={mdiSpeedometer}
					title={"SPEED"}
					description={
						"Nuestras web cargan un 200% mas rapidas que la competencia"
					}
				/>
				<AdvantagesItem
					icon={mdiPencilRuler}
					title={"DISEÑO PERSONALIZADO"}
					description={
						"Todos nuestros diseños son personalizados, sin templates"
					}
				/>
				<AdvantagesItem
					icon={mdiCashMultiple}
					title={"SAVE MONEY"}
					description={
						"Ahorra hasta 200€ anuales con nuestra tecnologica libre de alojamiento web"
					}
				/>
			</div>
		</section>
	);
};

export default Advantages;
