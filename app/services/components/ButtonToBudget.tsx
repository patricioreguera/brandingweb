"use client";

import { AppContext } from "@/app/context/ContextProvider";
import { useLanguage } from "@/app/context/LanguageProvider";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const ButtonToBudget = () => {
	const { services } = AppContext();
	const { translate } = useLanguage();

	return (
		<Button
			as={Link}
			color="secondary"
			variant="solid"
			isDisabled={services.length === 0}
			href="/budget"
		>
			{translate.VIEW_BUDGET}
		</Button>
	);
};
