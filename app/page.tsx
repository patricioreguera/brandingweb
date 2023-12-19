/* "use client"; */

/* import Image from "next/image"; */
import Footer from "./components/Footer";
import Promotions from "./components/Promotions";
import ProductHero from "./components/ProductHero";
import HeaderHero from "./components/HeaderHero";
import Advantages from "./components/Advantages/Advantages";
/* import Cta from "./components/Cta";
import Benefits from "./components/benefits/Benefits";
import Testimonials from "./components/testimonials/Testimonials";
import DiscountGame from "./components/DiscountGame"; */

const Home = async () => {
	return (
		<>
			<div className="flex flex-col items-center p-0 m-auto w-full ">
				<HeaderHero />
				<Advantages />
				<Footer />
				{/* <Promotions /> */}
				{/* <ProductHero /> */}
				{/* <Testimonials /> */}
				{/* 	<Cta /> */}
				{/* 	<Benefits /> */}
				{/* <DiscountGame /> */}
			</div>
		</>
	);
};

export default Home;
