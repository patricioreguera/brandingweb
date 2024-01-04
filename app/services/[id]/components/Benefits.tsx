import React from "react";
import Icon from "@mdi/react";
import {
	mdiWeb,
	mdiImageMultipleOutline,
	mdiImageCheckOutline,
	mdiGoogleAds,
	mdiSchoolOutline,
	mdiClockTimeEightOutline,
} from "@mdi/js";
import { Spacer } from "@nextui-org/react";

const Benefits = () => {
	const benefitsList = [
		{
			title: "Configuración de Dominio y Hosting",
			icon: mdiWeb,
		},
		{
			title: "Optimización de Imágenes y Banners",
			icon: mdiImageMultipleOutline,
		},
		{
			title: "Interfaz Personalizada",
			icon: mdiImageCheckOutline,
		},
		{
			title: "Configuración Google Analytics",
			icon: mdiGoogleAds,
		},
		{
			title: "Capacitación Online",
			icon: mdiSchoolOutline,
		},
		{
			title: "Rapida entrega",
			icon: mdiClockTimeEightOutline,
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
