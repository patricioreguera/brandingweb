import React from "react";
import Icon from "@mdi/react";
import { ModalComponent } from "../../Modal/ModalComponent";
import { PopOver } from "../../PopOver/PopOver";

interface AdvItem {
	icon: any;
	title: string;
	description: string;
}

const AdvantagesItem = ({ icon, title, description }: AdvItem) => {
	return (
		<div className="flex flex-col  items-center align-middle p-10 gap-5">
			<Icon path={icon} title="User Profile" size={2} color="#a958fa" />
			<h1 className="text-2xl font-bold bg-gradient-to-r from-white  to-bodycolor text-transparent bg-clip-text text-center">
				{title}
			</h1>
			<p className="font-thin lg:text-xl text-default-500 text-sm max-w-xs text-center">
				{description}
			</p>

			<PopOver title={title} description={description} />
		</div>
	);
};

export default AdvantagesItem;
