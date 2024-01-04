import { useSaveService } from "@/app/hooks/useSaveService";
import React from "react";
import { ServiceInterface } from "../page";
import { Button } from "@nextui-org/react";

const ButtonAddBudget = ({ service }: any) => {
	const { saveInContext, removeFromContext, handleConfetti, isDuplicate } =
		useSaveService({ service });

	return (
		<div>
			{!isDuplicate(service) ? (
				<Button
					className="w-full"
					color="secondary"
					variant="solid"
					onClick={() => saveInContext(service)}
					aria-label="add budget"
					onPress={handleConfetti}
				>
					Add Budget
				</Button>
			) : (
				<Button
					className="w-full"
					color="default"
					variant="bordered"
					onClick={() => removeFromContext(service._id)}
					aria-label="Like"
					onPress={handleConfetti}
				>
					Delete Budget
				</Button>
			)}
		</div>
	);
};

export default ButtonAddBudget;
