import { AppContext } from "../context/ContextProvider";
import confetti from "canvas-confetti";
import { ServiceInterface } from "../interfaces/ServiceInterface";

export const useSaveService = ({ service }: ServiceInterface) => {
	const { services, setServices } = AppContext();

	const isDuplicate = (service: any) =>
		services.some((existingService) => existingService?._id === service?._id);

	const saveInContext = (item: any) => {
		let duplicatedResult = isDuplicate(item);

		if (!duplicatedResult) {
			const updatedServices = [...services, item];
			setServices(updatedServices);
		}
	};

	const removeFromContext = (serviceId: string) => {
		const updatedServices = services.filter(
			(service) => service._id !== serviceId
		);
		setServices(updatedServices);
	};

	const handleConfetti = () => {
		confetti({
			particleCount: 150,
			spread: 100,
			startVelocity: 50,
		});
	};

	return { saveInContext, removeFromContext, handleConfetti, isDuplicate };
};
