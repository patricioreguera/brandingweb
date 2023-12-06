import { VscBracketDot } from "react-icons/vsc";
interface benefit {
	benefit: string;
}

const BenefitsCard = ({ benefit }: benefit) => {
	return (
		<div className="max-w-[300px] bg-pureBlack p-8 rounded-xl flex  justify-center items-start  border-btngradient2 border-1.5">
			<div>
				<VscBracketDot className="text-btngradient2" size={40} />
				<p className="pt-5">{benefit}</p>
			</div>
		</div>
	);
};

export default BenefitsCard;
