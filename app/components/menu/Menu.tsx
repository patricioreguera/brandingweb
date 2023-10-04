"use client";
import React from "react";
import {
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
				<h1>BRANDING</h1>
				<p className="font-bold text-inherit">WEB</p>
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
					<Button as={Link} color="secondary" href="/admin" variant="flat">
						Admin Panel
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
