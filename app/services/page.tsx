import TopHeroBar from "../components/TopHeroBar/TopHeroBar";
import { getServices } from "@/sanity/sanity-utils";
import ServiceCard from "./components/ServiceCard";
const Services = async () => {
	const services = await getServices();

	return (
		<>
			<TopHeroBar title="OUR_SERVICES" description="OUR_SERVICES_DESCRIPTION" />

			<div className="gap-4  flex flex-wrap px-8 justify-center -m-10">
				{services?.map((service: any) => (
					<ServiceCard service={service} key={service._id} />
				))}
			</div>
		</>
	);
};

export default Services;
export const revalidate = 60; // revalidate this page every 60 seconds
