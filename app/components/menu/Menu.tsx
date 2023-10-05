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
			isBordered /* onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)} */
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href="/">
						<h1>
							BRANDING<span className="font-bold text-inherit">WEB</span>
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

/* import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Button,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
	const pathname = usePathname();

	return (
		<Navbar isBordered isBlurred={true}>
			<NavbarBrand>
				<Link href="/">
					<h1>
						BRANDING<span className="font-bold text-inherit">WEB</span>
					</h1>
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive={pathname === "/"}>
					<Link
						href="/"
						className={pathname === "/" ? "text-violet-600" : "text-white"}
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === "/projects"}>
					<Link
						href="/projects"
						aria-current="page"
						className={
							pathname === "/projects" ? "text-violet-600" : "text-white"
						}
					>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === "/contact"}>
					<Link
						className={pathname === "/contact" ? "text-cyan-300" : "text-white"}
						href="/"
					>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link
						className={pathname === "/admin" ? "text-red-600" : "text-white"}
						href="/admin"
					>
						Admin Panel
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="secondary" href="/projects" variant="flat">
						View Projects
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
 */
