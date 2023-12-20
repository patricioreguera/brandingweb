// en MiContexto.js
"use client";
import React, { createContext, useContext, useState } from "react";

interface MyContext {
	idioma: string;
	setIdioma: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: MyContext = {
	idioma: "es",
	setIdioma: () => {},
};

const MyContext = createContext(defaultValue);

export const AppContext = () => useContext(MyContext);

export const ContextProvider = ({ children }: any) => {
	const [idioma, setIdioma] = useState("ES");

	// Aquí puedes agregar más lógica y funciones
	const Values = {
		idioma,
		setIdioma,
	};
	return <MyContext.Provider value={Values}>{children}</MyContext.Provider>;
};
