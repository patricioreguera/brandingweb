"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
	language: string;
	translate: Record<string, string>;
	changeLanguage: (lang: string) => void;
}

const defaultContextValue: LanguageContextType = {
	language: "en", // Idioma inicial
	translate: {}, // Objeto vacío inicial para las traducciones
	changeLanguage: () => {}, // Función vacía como inicializador
};

const LanguageContext = createContext(defaultContextValue);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: any) => {
	const [language, setLanguage] = useState("en"); // Idioma por defecto
	const [translate, setTranslate] = useState({});

	useEffect(() => {
		// Cargar las traducciones según el idioma seleccionado
		import(`../../locales/${language}.json`)
			.then((module) => {
				setTranslate(module.default);
			})
			.catch((error) => {
				console.error("Error loading translations", error);
			});
	}, [language]);

	const changeLanguage = (lang: any) => setLanguage(lang);

	return (
		<LanguageContext.Provider value={{ language, translate, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
