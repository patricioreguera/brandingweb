"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Service {
	_id: string;
	title: string;
	image: string;
	inputType: string;
	url: string;
	price: number;
	description: {
		children: {
			text: string;
		}[];
	}[];
}

interface MyContext {
	services: Service[];
	setServices: React.Dispatch<React.SetStateAction<Service[]>>;
	clientName: string;
	setClientName: Function;
}

const defaultValue: MyContext = {
	services: [],
	setServices: () => {},
	clientName: "",
	setClientName: () => {},
};

const MyContext = createContext<MyContext>(defaultValue);

export const AppContext = () => useContext(MyContext);

export const ContextProvider = ({ children }: any) => {
	const [services, setServices] = useState<Service[]>([]);
	const [clientName, setClientName] = useState("");
	// Cargar los datos desde el localStorage al inicializarse
	useEffect(() => {
		const savedServices = localStorage.getItem("services");
		if (savedServices) {
			setServices(JSON.parse(savedServices));
		}
	}, []);

	// Guardar los datos en el localStorage cada vez que se actualicen
	useEffect(() => {
		localStorage.setItem("services", JSON.stringify(services));
	}, [services]);

	// Aquí puedes agregar más lógica y funciones
	const Values = {
		services,
		setServices,
		clientName,
		setClientName,
	};

	return <MyContext.Provider value={Values}>{children}</MyContext.Provider>;
};
