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

interface ModalItems {
	title: string;
	description: string;
}

export const ModalComponent = ({ title, description }: ModalItems) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { translate } = useLanguage();

	return (
		<>
			<Button onPress={onOpen} color="secondary" variant="ghost">
				{translate.VIEW_DETAILS}
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="auto"
				backdrop="blur"
				/* backdrop="opaque" */
				size="md"
				/* 	classNames={{
					body: "py-6",
					backdrop:
						"bg-gradient-to-br from-pureBlack via-pureBlack/80 to-n_violet2/20 backdrop-opacity-40",
					base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
					header: "border-b-[1px] border-[#292f46]",
					footer: "border-t-[1px] border-[#292f46]",
					closeButton: "hover:bg-white/5 active:bg-white/10",
				}} */
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 ">
								<h1 className="font-extralight text-3xl">{title}</h1>
							</ModalHeader>
							<ModalBody>
								<p>{description}</p>
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
