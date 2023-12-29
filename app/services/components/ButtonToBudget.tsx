"use client";

import { AppContext } from "@/app/context/ContextProvider";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const ButtonToBudget = () => {
	const { services } = AppContext();

	return (
		<Button
			as={Link}
			color="secondary"
			variant="solid"
			isDisabled={services.length === 0}
			href="/budget"
		>
			View budget
		</Button>
	);
};
