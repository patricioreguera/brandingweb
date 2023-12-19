import React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from "@nextui-org/react";
import Image from "next/image";
import heropicture from "../../../public/images/heropicture.png";

interface PopOverItems {
	title: string;
	description: string;
}
export const PopOver = ({ title, description }: PopOverItems) => {
	return (
		<Popover placement="top" showArrow={true}>
			<PopoverTrigger>
				<Button color="secondary" variant="ghost">
					View Details
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div>
					<Image
						src={heropicture}
						alt="Producto Destacado"
						className="max-w-[400px]"
					/>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
						{title}
					</h1>
					<div className="text-tiny">{description}</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};
