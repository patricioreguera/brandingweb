import React, { useState } from "react";
import { useLanguage } from "@/app/context/LanguageProvider";
import { Switch } from "@nextui-org/react";

export const LanguageSwitcher = () => {
	const [isSelected, setIsSelected] = useState(true);
	const { changeLanguage } = useLanguage();

	const handelLenguage = () => {
		setIsSelected(!isSelected);
		isSelected ? changeLanguage("es") : changeLanguage("en");
	};

	return (
		<>
			<span className="pr-3">ES</span>
			<Switch
				isSelected={isSelected}
				onValueChange={handelLenguage}
				size="sm"
				color="secondary"
			></Switch>
			<span>EN</span>
		</>
	);
};
