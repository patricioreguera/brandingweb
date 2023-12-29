import TopHeroBar from "../components/TopHeroBar/TopHeroBar";
import { getServices } from "@/sanity/sanity-utils";
import ServiceCard from "./components/ServiceCard";
import { ButtonToBudget } from "./components/ButtonToBudget";

const Services = async () => {
	const services = await getServices();

	return (
		<>
			<TopHeroBar title="OUR_SERVICES" description="OUR_SERVICES_DESCRIPTION" />

			<div className="gap-4  flex flex-wrap px-8 justify-center">
				{services?.map((service: any) => (
					<ServiceCard service={service} key={service._id} />
				))}
			</div>
			<div className="flex items-center justify-center py-10">
				<ButtonToBudget />
			</div>
		</>
	);
};

export default Services;
export const revalidate = 60; // revalidate this page every 60 seconds
