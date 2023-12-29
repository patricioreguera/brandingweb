"use client";

import { AppContext } from "@/app/context/ContextProvider";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const ButtonToBudget = () => {
	const { services } = AppContext();

	return (
		<Button
			color="secondary"
			variant="solid"
			isDisabled={services.length === 0}
		>
			<Link href="/budget">View budget</Link>
		</Button>
	);
};
