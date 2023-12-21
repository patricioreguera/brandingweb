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
interface ModalItems {
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

export const ModalComponent = ({ project }: ModalItems) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Image
				as={NextImage}
				key={project.id}
				isZoomed
				width={340}
				height={340}
				alt="NextUI Fruit Image with Zoom"
				src={project.image}
				onClick={onOpen}
			/>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="auto"
				backdrop="blur"
				/* backdrop="opaque" */
				size="md"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 ">
								<h1 className="font-extralight text-3xl">{project.name}</h1>
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
