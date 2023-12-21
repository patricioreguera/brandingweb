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
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "../LanguageButton/LanguageSwitcher";

export const Menu = () => {
	const pathname = usePathname();

	const menuItems = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "Projects",
			url: "/projects",
		},
		{
			title: "Services",
			url: "/services",
		},
		{
			title: "Contact",
			url: "/contact",
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
				<NavbarMenuToggle aria-label={"Open menu"} className="sm:hidden" />
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive={pathname === "/projects"}>
					<Link
						className={
							pathname === "/projects"
								? "text-n_violet"
								: "text-dark hover:text-n_violet"
						}
						href="/projects"
					>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === "/services"}>
					<Link
						className={
							pathname === "/services"
								? "text-n_violet"
								: "text-dark hover:text-n_violet"
						}
						href="/services"
					>
						Services
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === "/contact"}>
					<Link
						className={
							pathname === "/contact"
								? "text-n_violet"
								: "text-dark hover:text-n_violet"
						}
						href="/contact"
					>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
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
