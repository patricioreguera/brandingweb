"use client";
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import confetti from "canvas-confetti";

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";

interface State {
	opciones: string[];
	opcionGanadora: number;
	oportunidades: number;
	mensaje: string;
	juegoTerminado: boolean;
}

const DiscountGame: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [state, setState] = useState<State>({
		opciones: ["Opción A", "Opción B", "Opción C"],
		opcionGanadora: 0,
		oportunidades: 1,
		mensaje:
			"Te sientes afortunado? Elige una opción para ganar un descuento. Tienes 2 oportunidades",
		juegoTerminado: false,
	});

	useEffect(() => {
		const nuevaPosicionGanadora = Math.floor(Math.random() * 3);
		setState({ ...state, opcionGanadora: nuevaPosicionGanadora });
	}, []);

	const handleConfeti = () => {
		// Configura las opciones de los confetis
		const config = {
			angle: 90,
			spread: 45,
			particleCount: 100,
			/* origin: { y: 0.7 }, */
		};

		// Lanza los confetis
		confetti(config);
	};
	const handleClick = (opcion: string, index: number) => {
		const { opcionGanadora, oportunidades, juegoTerminado } = state;

		if (juegoTerminado) {
			return; // Si el juego ya terminó, no hacer nada al hacer clic
		}

		if (index === opcionGanadora && oportunidades > 0) {
			setState({
				...state,
				mensaje: "¡Ganaste un descuento! tu codigo de descuento es: PHR2023",
				oportunidades: 0,
				juegoTerminado: true,
			});
			// Mostrar el modal cuando se gane
			handleConfeti();
			onOpen();
		} else if (oportunidades > 0) {
			setState({
				...state,
				mensaje: "¡Inténtalo de nuevo!",
				oportunidades: oportunidades - 1,
			});
		} else {
			setState({
				...state,
				mensaje: "Lo siento! Se te agotaron las oportunidades.",
				juegoTerminado: true,
			});
		}
	};

	const { opciones, mensaje } = state;

	return (
		<div className="flex flex-col justify-center items-center p-20 gap-5 bg-hero-pattern w-full">
			<p>{mensaje}</p>
			<div className="flex gap-5">
				{opciones.map((item, index) => (
					<Card
						shadow="sm"
						key={index}
						isPressable
						isBlurred
						className="bg-slate-950 bg-opacity-50"
						onPress={() => handleClick(item, index)}
					>
						<CardBody className="overflow-visible p-10 justify-center  items-center">
							<h1>{item}</h1>
						</CardBody>
					</Card>
				))}
			</div>
			<Modal isOpen={isOpen} onOpenChange={onClose} isDismissable={false}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								¡Felicidades!
							</ModalHeader>
							<ModalBody>
								<p>¡Ganaste un descuento en tu compra!</p>
								<p>Contacta conmigo y brindame el siguiente codigo: PHR2023</p>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onPress={onClose}>
									Cerrar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default DiscountGame;
