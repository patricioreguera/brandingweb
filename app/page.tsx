import Promotions from "./components/Promotions";
import HeaderHero from "./components/HeaderHero";
import Advantages from "./components/Advantages/Advantages";

const Home = () => {
	return (
		<>
			<div className="flex flex-col items-center p-0 m-auto w-full ">
				<HeaderHero />
				<Advantages />
				{/* 		<Promotions /> */}
			</div>
		</>
	);
};

export default Home;
