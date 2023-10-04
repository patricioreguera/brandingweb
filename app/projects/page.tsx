import { getProjects } from "@/sanity/sanity-utils";

const Projects = async () => {
	const projects = await getProjects();
	// ya con el resultado de la llamada se puede hacer el .map
	return (
		<>
			<h1>Hello world</h1>
			{projects?.map((project: any) => (
				<h1 key={project._id}>{project.name}</h1>
			))}
			<h1>aqui va el mapeo</h1>
		</>
	);
};

export default Projects;
export const revalidate = 60; // revalidate this page every 60 seconds
