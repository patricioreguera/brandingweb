import React from "react";
/* import heropicture from "../../../public/images/heropicture.png"; */
import NextImage from "next/image";
interface ProjectIterface {
	project: {
		id: string;
		title: string;
		name: string;
		image: any;
		inputType: string;
		url: string;
		content: {
			children: {
				text: string;
			}[];
		}[];
	};
}
export const ProjectModal = ({ project }: ProjectIterface) => {
	return (
		<div className="max-w-[300px]">
			<NextImage
				key={project.id}
				width={300}
				height={300}
				alt={project.name}
				src={`${project.image}?fit=crop&w=1000&h=1000`}
				draggable={false}
				className="rounded-xl"
			/>
			<div className="flex gap-2 items-center justify-between p-2">
				<h6 className="font-normal text-sm">{project.name}</h6>
				<p
					className={`text-sm font-light border py-1 ${
						project.inputType === "web"
							? "border-n_violet" //Web
							: project.inputType === "design"
							? "border-colornav2" //design
							: project.inputType === "branding"
							? "border-pink" // branding
							: "border-btngradient2" //marketing
					}  w-fit px-3 rounded-full my-2`}
				>
					{project.inputType}
				</p>
			</div>
		</div>
	);
};
