"use client";
import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Badge,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "../LanguageButton/LanguageSwitcher";
import { AppContext } from "@/app/context/ContextProvider";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

export const Menu = () => {
	const pathname = usePathname();
	const { services } = AppContext();

	const menuItems = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "Services",
			url: "/services",
		},
		{
			title: "Projects",
			url: "/projects",
		},
	];

	return (
		<Navbar
			isBlurred /* onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)} */
			isBordered
		>
			<NavbarContent>
				<NavbarBrand>
					<Link href="/">
						<h1 className="flex align-middle justify-center items-center">
							<span className="font-black text-lg text-inherit bg-gradient-to-r from-n_violet  to-n_violet2 text-transparent bg-clip-text">
								BW.
							</span>
							BRANDING
							<span className="font-bold text-inherit">WEB</span>
						</h1>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems
					.filter((menuitem) => menuitem.url !== "/")
					.map((menuitem) => (
						<NavbarItem
							isActive={pathname === menuitem.url}
							key={menuitem.title}
							
						>
							<Link
								className={
									pathname === menuitem.url
										? "text-n_violet"
										: "text-dark hover:text-n_violet"
								}
								href={menuitem.url}
							>
								{menuitem.title}
							</Link>
						</NavbarItem>
					))}
			</NavbarContent>

			{services.length > 0 ? (
				<Badge
					content={services.length > 0 ? services.length : ""}
					shape="circle"
					color="secondary"
					placement="top-right"
				>
					<NavbarItem>
						<Link
							href="/budget"
							className={
								pathname === "/budget"
									? "text-n_violet"
									: "text-dark hover:text-n_violet"
							}
						>
							<Icon path={mdiCartOutline} size={1} />
						</Link>
					</NavbarItem>
				</Badge>
			) : (
				<Icon path={mdiCartOutline} size={1} />
			)}

			<NavbarMenuToggle aria-label={"Open menu"} className="sm:hidden" />
			<NavbarContent justify="end" className="hidden sm:flex gap-4">
				<NavbarItem className="flex ">
					<LanguageSwitcher />
				</NavbarItem>
			</NavbarContent>

			{/* MENU MOBIL */}
			<NavbarMenu className="flex items-center justify-around p-5 ">
				<NavbarMenuItem className="flex flex-col gap-10 text-center">
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								className="w-full hover:text-n_violet font-medium "
								href={item?.url}
							>
								{item.title}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenuItem>

				<NavbarMenuItem>
					<LanguageSwitcher />
					<p className="text-xs text-bodycolor text-center">By @patoreguera</p>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
};
