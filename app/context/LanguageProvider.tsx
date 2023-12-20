"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
	language: string;
	t: Record<string, string>;
	changeLanguage: (lang: string) => void;
}

const defaultContextValue: LanguageContextType = {
	language: "en", // Idioma inicial
	t: {}, // Objeto vacío inicial para las traducciones
	changeLanguage: () => {}, // Función vacía como inicializador
};

const LanguageContext = createContext(defaultContextValue);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: any) => {
	const [language, setLanguage] = useState("en"); // Idioma por defecto
	const [t, setT] = useState({});

	useEffect(() => {
		// Cargar las traducciones según el idioma seleccionado
		import(`../../locales/${language}.json`)
			.then((module) => {
				setT(module.default);
			})
			.catch((error) => {
				console.error("Error loading translations", error);
			});
	}, [language]);

	const changeLanguage = (lang: any) => setLanguage(lang);

	return (
		<LanguageContext.Provider value={{ language, t, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
