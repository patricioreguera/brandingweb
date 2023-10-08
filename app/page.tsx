/* "use client"; */

/* import Image from "next/image"; */
import { Kbd } from "@nextui-org/kbd";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import PersuasiveContent from "./components/PersuasiveContent";
import Faq from "./components/Faq";
import Garanties from "./components/Garanties";
import Socialtest from "./components/Socialtest";
import ContactInformation from "./components/ContactInformation";
import Promotions from "./components/Promotions";
import ProductHero from "./components/ProductHero";
import Benefits from "./components/benefits/Benefits";
import Testimonials from "./components/testimonials/Testimonials";
import CtaHero from "./components/CtaHero";
import HeaderHero from "./components/HeaderHero";

const Home = async () => {
	return (
		<>
			<div className="flex flex-col items-center p-0 m-auto w-full">
				{/* Encabezado */}
				<HeaderHero />

				{/* Llamado a la Acción */}
				<CtaHero />

				{/* Testimonios Destacados */}
				<Testimonials />

				{/* Beneficios Claramente Comunicados */}
				<Benefits />
				{/* Sección de Producto Impactante */}
				<ProductHero />

				{/* Ofertas y Promociones */}
				<Promotions />

				{/* Información de Contacto */}
				<ContactInformation />

				{/* Prueba Social */}
				<Socialtest />

				{/* Garantías o Políticas de Devolución */}
				<Garanties />

				{/* Sección de Preguntas Frecuentes (FAQ) */}
				<Faq />

				{/* Contenido Persuasivo */}
				<PersuasiveContent />

				{/* Llamado a la Acción (CTA) Final */}
				<Cta />
				{/* <DiscountGame /> */}

				{/* Pie de Página */}
				<Footer />
			</div>
		</>
	);
};

export default Home;
