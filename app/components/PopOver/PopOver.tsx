import React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from "@nextui-org/react";
import { useLanguage } from "@/app/context/LanguageProvider";

interface PopOverItems {
	title?: string;
	desciption_large: string;
}
export const PopOver = ({ desciption_large }: PopOverItems) => {
	const { translate } = useLanguage();

	return (
		<Popover
			placement="top"
			shadow="lg"
			/* backdrop="opaque" */ color="secondary"
		>
			<PopoverTrigger>
				<Button color="secondary" variant="ghost">
					{translate.VIEW_DETAILS || "View Details"}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-5 max-w-lg">
				<div className="text-base tracking-wide">{desciption_large}</div>
			</PopoverContent>
		</Popover>
	);
};
