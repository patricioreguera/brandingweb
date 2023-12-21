import { getProjects } from "@/sanity/sanity-utils";
import { ProjectModal } from "../components/ProjectModal/ProjectModal";

const Projects = async () => {
	const projects = await getProjects();

	return (
		<>
			<div className="gap-3 mt-16 flex justify-center">
				<h1 className="  text-[4rem] lg:text-8xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
					Our Projects
				</h1>
			</div>
			<div className="gap-3 mt-16 flex flex-wrap px-8 justify-center">
				{projects?.map((project: any) => (
					<ProjectModal project={project} key={project.id} />
				))}
			</div>
		</>
	);
};

export default Projects;
export const revalidate = 60; // revalidate this page every 60 seconds
