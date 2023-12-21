import React from "react";
import TopHeroBar from "../components/TopHeroBar/TopHeroBar";
import { getServices } from "@/sanity/sanity-utils";
import { ServiceModal } from "./components/ServiceModal";

const Services = async () => {
	const services = await getServices();

	return (
		<>
			<TopHeroBar title="OUR_SERVICES" description="OUR_SERVICES_DESCRIPTION" />
			<div className="gap-4  flex flex-wrap px-8 justify-center -m-10">
				{services?.map((service: any) => (
					<ServiceModal service={service} key={service.id} />
				))}
			</div>
		</>
	);
};

export default Services;
export const revalidate = 60; // revalidate this page every 60 seconds
