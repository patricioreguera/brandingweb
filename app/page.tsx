import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
//import Image from "next/image";

const Home = async () => {
	const projects = await getProjects();
	// ya con el resultado de la llamada se puede hacer el .map
	return (
		<>
			<h1>Hello world</h1>
			{projects?.map((project: any) => (
				<h1 key={project._id}>{project.name}</h1>
			))}
		</>
	);
};

export default Home;
export const revalidate = 60; // revalidate this page every 60 seconds
