"use client";
import { Tabs, Tab } from "@nextui-org/react";

const SelectTab = () => {
	return (
		<Tabs color={"secondary"} aria-label="Tabs colors" radius="full">
			<Tab key="all" title="All" />
			<Tab key="branding" title="Branding" />
			<Tab key="web" title="Web" />
			<Tab key="design" title="Design" />
			<Tab key="marketing" title="Marketing" />
		</Tabs>
	);
};

export default SelectTab;
