"use client";
import { useLanguage } from "@/app/context/LanguageProvider";
import React from "react";
interface TopHeroBarProps {
	title: string;
	description: string;
}
const TopHeroBar = ({ title, description }: TopHeroBarProps) => {
	const { translate } = useLanguage();

	return (
		<div className="bg-promo-pattern bg-no-repeat bg-cover bg-center w-full">
			<div className="gap-3 p-20 flex flex-col justify-center items-center bg-gradient-to-t from-pureBlack  to-pureBlack/0">
				<h1 className="leading-none text-[3rem] lg:text-7xl font-semibold bg-gradient-to-r from-white  to-n_violet2 text-transparent bg-clip-text">
					{translate?.[title] || title}
				</h1>
				<p>{translate?.[description] || description} </p>
			</div>
		</div>
	);
};

export default TopHeroBar;
