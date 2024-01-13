import Promotions from "./components/Promotions";
import HeaderHero from "./components/HeaderHero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./services/page";

const Home = () => {
	return (
		<>
			<div className="flex flex-col items-center p-0 m-auto w-full ">
				<HeaderHero />
				<Advantages />
				<Services />
				{/* <Promotions /> */}
			</div>
		</>
	);
};

export default Home;
