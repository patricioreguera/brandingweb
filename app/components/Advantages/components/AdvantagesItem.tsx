import React from "react";
import Icon from "@mdi/react";
import { PopOver } from "../../PopOver/PopOver";

interface AdvItem {
	icon: any;
	title: string;
	description_short: string;
	desciption_large: string;
}

const AdvantagesItem = ({
	icon,
	title,
	description_short,
	desciption_large,
}: AdvItem) => {
	return (
		<div className="flex flex-col  items-center align-middle p-10 gap-5">
			<Icon path={icon} title="User Profile" size={2} color="#a958fa" />
			<h1 className="text-2xl font-bold bg-gradient-to-r from-white  to-bodycolor text-transparent bg-clip-text text-center">
				{title}
			</h1>
			<p className="font-thin lg:text-lg text-default-500 text-sm max-w-xs text-center tracking-wide">
				{description_short}
			</p>
			<PopOver title={title} desciption_large={desciption_large} />
		</div>
	);
};

export default AdvantagesItem;
