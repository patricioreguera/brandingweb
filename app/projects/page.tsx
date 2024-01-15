import { getProjects } from "@/sanity/sanity-utils";
import { ProjectModal } from "../components/ProjectModal/ProjectModal";
import TopHeroBar from "../components/TopHeroBar/TopHeroBar";

const Projects = async () => {
	const projects = await getProjects();

	return (
		<>
			<TopHeroBar title="OUR_PROJECTS" description="OUR_PROJECTS_DESCRIPTION" />

			<div className="flex gap-4  flex-wrap px-8  m-auto justify-center max-w-5xl">
				{projects?.map((project: any) => (
					<ProjectModal project={project} key={project.id} />
				))}
			</div>
		</>
	);
};

export default Projects;
export const revalidate = 60; // revalidate this page every 60 seconds
