import { getProjects } from "@/sanity/sanity-utils";
import { ProjectModal } from "../components/ProjectModal/ProjectModal";
import TopHeroBar from "../components/TopHeroBar/TopHeroBar";
import SelectTab from "./components/SelectTab";

const Projects = async () => {
	const projects = await getProjects();

	return (
		<>
			<TopHeroBar title="OUR_PROJECTS" description="OUR_PROJECTS_DESCRIPTION" />

			<div className="gap-4  flex flex-wrap px-8 justify-center">
				{projects?.map((project: any) => (
					<ProjectModal project={project} key={project.id} />
				))}
			</div>
		</>
	);
};

export default Projects;
export const revalidate = 60; // revalidate this page every 60 seconds
