import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
const WorkProcess = () => {
	const WorkProcessList = [
		{
			title: "Proyecto",
			description:
				"La primera parte del proyecto es una reunión presencial o por videollamada en la cual hablamos sobre el proyecto, las necesidades y los objetivos. Con todo eso elaboro un presupuesto detallado y comenzamos con la fase de contenido.",
		},
		{
			title: "Contenido",
			description:
				"Con nuestro objetivo en mente comenzamos a recolectar todo el material necesario para realizar el sitio web, textos, imágenes y cualquier otro tipo de material necesario para el sitio web. El cual no solo es copiar y pegar sino que se optimizara y corregirá para luego poder ser utilizado y que tenga la calidad necesaria.",
		},
		{
			title: "Desarrollo",
			description:
				"Ya con todo el contenido listo y optimizado comienza la etapa del desarrollo y la programación del sitio web.                 La primera etapa de desarrollo se centra en el diseño de la web proceso durante el cual me encargo de la estética del mismo. Para luego pasar a la segunda etapa de desarrollo y programacion de la web.",
		},
		/* 	{
			title: "Ajustes",
			description:
				"Una vez ya terminada la etapa de desarrollo realizaremos una reunión en la cual podrás ver tu sitio web en funcionamiento y podremos hacer los ajustes finales antes de su lanzamiento.",
		},
		{
			title: "Entrega",
			description:
				"Llego el dia! Una vez finalizada tu web tendremos una videollamada en la que tendrás una capacitación para poder acceder a tu panel de administrador del sitio. Esta misma quedara guardada en video para que puedas consultarla cuando quieras. También recibirás un documento pdf en el cual tendrás toda la información necesaria para acceder a tu negocio online.",
		}, */
	];

	return (
		<Tabs
			aria-label="Options"
			color="secondary"
			className="flex justify-center"
		>
			{WorkProcessList.map((process) => (
				<Tab key={process.title} title={process.title}>
					<Card>
						<CardBody>{process.description}</CardBody>
					</Card>
				</Tab>
			))}
		</Tabs>
	);
};

export default WorkProcess;
