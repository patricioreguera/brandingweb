"use client";
import { useState } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input,
} from "@nextui-org/react";
import { AppContext } from "@/app/context/ContextProvider";
import { useLanguage } from "@/app/context/LanguageProvider";

export const ModalComponent = ({ isOpen, onOpenChange }: any) => {
	const { clientName, setClientName } = AppContext();
	const { translate } = useLanguage();

	const [inputValue, setInputValue] = useState(clientName);

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="auto"
				backdrop="blur"
				size="md"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 ">
								{translate?.SAVE_TITLE}
							</ModalHeader>
							<ModalBody>
								<p className="text-sm">{translate?.SAVE_MESAGE}</p>
								<Input
									type="name"
									label="Name"
									onChange={(e) => setInputValue(e.target.value)}
									/* isInvalid={inputValue.length === 0} */
									variant="underlined"
								/>
							</ModalBody>
							<ModalFooter>
								<Button
									color="secondary"
									variant="solid"
									onClick={() => {
										setClientName(inputValue);
									}}
									onPress={onClose}
								>
									{translate?.SAVE}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
