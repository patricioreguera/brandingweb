import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Menu } from "./components/menu/Menu";
const inter = Inter({ subsets: ["latin"] });
import { ContextProvider } from "./context/ContextProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import Footer from "./components/Footer";

export const metadata = {
	title: "Brandingweb",
	description: "by patoreguera",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className="dark">
			<body className={inter.className}>
				<LanguageProvider>
					<ContextProvider>
						<Providers>
							<Menu />
							{children}
							<Footer />
						</Providers>
					</ContextProvider>
				</LanguageProvider>
			</body>
		</html>
	);
}
