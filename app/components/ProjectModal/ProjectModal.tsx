"use client";
import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import { useLanguage } from "@/app/context/LanguageProvider";
/* import heropicture from "../../../public/images/heropicture.png"; */
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
interface ProjectIterface {
	project: {
		id: string;
		title: string;
		name: string;
		image: string;
		content: {
			children: {
				text: string;
			}[];
		}[];
	};
}

export const ProjectModal = ({ project }: ProjectIterface) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Image
				as={NextImage}
				key={project.id}
				width={340}
				height={340}
				alt={project.name}
				src={project.image}
				onClick={onOpen}
			/>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="bottom-center"
				size="md"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="grid grid-cols-4 gap-5 ">
								<Image
									as={NextImage}
									key={project.id}
									isBlurred
									width={100}
									height={100}
									alt={project.name}
									src={project.image}
									onClick={onOpen}
								/>
								<div className="col-span-3">
									<h1 className="font-extralight text-3xl">{project.name}</h1>
									<p className="text-sm font-light">
										{project.content[0].children[0].text}
									</p>
								</div>
							</ModalHeader>
							<ModalBody>
								<p>{project.content[0].children[0].text}</p>
							</ModalBody>
							<ModalFooter>
								<Button color="secondary" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="secondary" variant="solid" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
