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
/* import heropicture from "../../../public/images/heropicture.png"; */
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import Link from "next/link";
import { ServiceInterface } from "@/app/interfaces/ServiceInterface";

export const ServiceModal = ({ service }: ServiceInterface) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Image
				as={NextImage}
				key={service._id}
				width={300}
				height={300}
				alt={service.title}
				src={service.image}
				onClick={onOpen}
				className="hover:cursor-pointer"
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
									key={service._id}
									isBlurred
									width={100}
									height={100}
									alt={service.title}
									src={service.image}
									onClick={onOpen}
								/>
								<div className="col-span-3 ">
									<h1 className="font-extralight text-3xl">{service.title}</h1>
									<p className="text-sm font-light  bg-bordergray w-fit px-3 rounded-full my-2">
										{service.inputType}
									</p>
									<p className="font-light text-sm">
										{service.description[0].children[0].text}
									</p>
									<p>{service.price}</p>
								</div>
							</ModalHeader>
							<ModalBody></ModalBody>
							<ModalFooter>
								<Button
									isIconOnly
									color="danger"
									onPress={onClose}
									aria-label="Like"
								>
									+
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
