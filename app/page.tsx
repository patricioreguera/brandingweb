import Promotions from "./components/Promotions";
import HeaderHero from "./components/HeaderHero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./services/page";
import { Navegator } from "./components/Navegator";

const Home = () => {
	return (
		<>
			<div className="flex flex-col items-center p-0 m-auto w-full ">
				<HeaderHero />
				<Advantages />
				<Services />
			</div>
		</>
	);
};

export default Home;
