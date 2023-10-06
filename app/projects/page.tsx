"use client";
import { getProjects } from "@/sanity/sanity-utils";

import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
const Projects = async () => {
	const projects = await getProjects();

	return (
		<>
			<h1>Projects</h1>
			<div className="gap-3 flex flex-wrap px-8 justify-center">
				{projects?.map((project: any) => (
					<Card
						isFooterBlurred
						key={project._id}
						className="col-span-12 sm:col-span-6 h-[300px] max-w-[500px] "
					>
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-white/60 uppercase font-bold">
								Your day your way
							</p>
							<h4 className="text-white/90 font-medium text-xl">
								{project.name}
							</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Relaxing app background"
							className="z-0 w-full h-full object-cover"
							src={project.image}
						/>
						<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
							<div className="flex flex-grow gap-2 items-center">
								<div className="flex flex-col">
									<p className="text-tiny text-white">Project Description:</p>
									<p className="text-tiny text-white/60">
										{project.content[0].children[0].text}
									</p>
								</div>
							</div>
							<Button radius="full" size="sm" color="secondary">
								View Project
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</>
	);
};

export default Projects;
export const revalidate = 60; // revalidate this page every 60 seconds
