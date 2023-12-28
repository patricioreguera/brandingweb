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

export const ModalComponent = ({ isOpen, onOpenChange }: any) => {
	const { clientName, setClientName } = AppContext();

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
								Envianos tu consulta via Whatsapp
							</ModalHeader>
							<ModalBody>
								<p className="text-sm">
									Ingresa tu nombre para personalizar el mensaje:
								</p>
								<Input
									type="name"
									label="Name"
									onChange={(e) => setInputValue(e.target.value)}
									isInvalid={inputValue.length === 0}
									variant="bordered"
								/>
								<p className="text-sm">
									Se enviara adjunto el presupuesto detallado
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color="default" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button
									color="success"
									variant="bordered"
									onClick={() => {
										setClientName(inputValue);
									}}
									onPress={onClose}
								>
									Guardar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
