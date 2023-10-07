/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: [
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Oxygen",
				"Ubuntu",
				"Cantarell",
				"Fira Sans",
				"Droid Sans",
				"Helvetica Neue",
				"sans-serif",
			],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"hero-pattern": "url('../public/background.svg')",
			},
		},
		colors: {
			//Limpiar y quitar colores luego de definir estilos de la pagina
			current: "currentColor",
			transparent: "transparent",
			white: "#FFFFFF",
			black: "#090E34",
			dark: "#17181f",

			primary: "#6D28D9",
			primaryDark: "#351668",
			pureBlack: "#000000",
			darkgray: "#17181f",
			indigo: "#c766f1",
			purple: "#a855f7",
			pink: "#ec4899",
			yellow: "#FBB040",
			bodycolor: "#959CB1",
			colorgradient1: "#4ca5ff",
			colorgradient2: "#b673f8",
			testcolor: "#9F1F7B",
			bordergray: "#ffffff26",
			headerNavbar: "#16181A",

			colornav1: "#F31260",
			colornav2: "#F5A524",
			colornav3: "#17C964",

			btngradient: "#d642ff",
			btngradient2: "#6257ff",
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
