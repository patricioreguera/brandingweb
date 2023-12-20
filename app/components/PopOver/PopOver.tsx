import React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from "@nextui-org/react";

interface PopOverItems {
	title?: string;
	desciption_large: string;
}
export const PopOver = ({ desciption_large }: PopOverItems) => {
	return (
		<Popover placement="top" showArrow={true}>
			<PopoverTrigger>
				<Button color="secondary" variant="ghost">
					View Details
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-5 bg-n_violet">
				<div>
					<div className="text-base tracking-wide">{desciption_large}</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};
