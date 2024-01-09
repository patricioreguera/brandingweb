"use client";
import React from "react";
import api from "./api";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Image,
} from "@nextui-org/react";
/* https://docs.google.com/forms/d/e/1FAIpQLSeKNl44QwktXsBTEH3c7ncIKvuIUiOOPwrQkRyFvVimxbp8oQ/viewform?usp=pp_url&entry.395308679=asdas&entry.44535904=asdasd&entry.2144738560=asdasd */
const page = async () => {
	const demo = await api.demo.list();
	console.log(demo);
	return (
		<div>
			<Table>
				<TableHeader>
					<TableColumn>FECHA</TableColumn>
					<TableColumn>NOMBRE</TableColumn>
					<TableColumn>URL</TableColumn>
					<TableColumn>IMAGEN</TableColumn>
				</TableHeader>
				<TableBody>
					{demo.map(({ fecha, nombre, url, imagen }) => (
						<TableRow key={nombre}>
							<TableCell>{fecha}</TableCell>
							<TableCell>{nombre}</TableCell>
							<TableCell>{url}</TableCell>
							<TableCell>{imagen}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default page;
export const revalidate = 30; // revalidate this page every 60 seconds
