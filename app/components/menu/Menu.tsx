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

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
			title: "Contact",
			url: "/contact",
		},
	];

	return (
		<Navbar
			isBlurred /* onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)} */
			className=""
			/* isBordered  */
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
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
				<NavbarItem>
					<Link color="foreground" href="#">
						Products
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="secondary" href="/projects" variant="ghost">
						View Projects
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full"
							href={item.url}
						>
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
