import React from "react";
import Icon from "@mdi/react";
import { mdiSpeedometer } from "@mdi/js";
import { Spacer } from "@nextui-org/react";

const Benefits = () => {
	const benefitsList = [
		{
			title: "Configuración de Dominio y Hosting",
			icon: mdiSpeedometer,
		},
		{
			title: "Optimización de Imágenes y Banners",
			icon: mdiSpeedometer,
		},
		{
			title: "Interfaz Personalizada",
			icon: mdiSpeedometer,
		},
		{
			title: "Plugins Profesionales",
			icon: mdiSpeedometer,
		},
		{
			title: "Configuración Google Analytics",
			icon: mdiSpeedometer,
		},
		{
			title: "Capacitación Online",
			icon: mdiSpeedometer,
		},
		{
			title: "Lista en 30 días",
			icon: mdiSpeedometer,
		},
	];
	return (
		<div>
			{benefitsList.map((benefit): any => (
				<>
					<Spacer y={2} />
					<div
						className="flex justify-start items-center gap-5"
						key={benefit.title}
					>
						<Icon
							path={benefit.icon}
							title="User Profile"
							size={1.5}
							color="#a958fa"
						/>
						<h6 className="text-sm font-light ">{benefit.title}</h6>
					</div>
				</>
			))}
		</div>
	);
};

export default Benefits;
