import { useSaveService } from "@/app/hooks/useSaveService";
import React from "react";
import { Button } from "@nextui-org/react";
import { useLanguage } from "@/app/context/LanguageProvider";

const ButtonAddBudget = ({ service }: any) => {
	const { translate } = useLanguage();
	const { saveInContext, removeFromContext, handleConfetti, isDuplicate } =
		useSaveService({ service });

	return (
		<div>
			{!isDuplicate(service) ? (
				<Button
					className="w-full "
					variant="solid"
					color="secondary"
					onClick={() => saveInContext(service)}
					aria-label="add budget"
					onPress={handleConfetti}
				>
					{translate.ADD_BUDGET}
				</Button>
			) : (
				<Button
					className="w-full"
					color="default"
					variant="bordered"
					onClick={() => removeFromContext(service._id)}
					aria-label="Like"
				>
					{translate.DELETE_BUDGET}
				</Button>
			)}
		</div>
	);
};

export default ButtonAddBudget;
