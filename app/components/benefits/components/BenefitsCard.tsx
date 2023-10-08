interface benefit {
	benefit: string;
}

const BenefitsCard = ({ benefit }: benefit) => {
	return (
		<div className="max-w-[300px] bg-pureBlack p-8 rounded-xl flex  justify-center items-center border-btngradient2 border-1.5">
			<div>
				<p>{benefit}</p>
			</div>
		</div>
	);
};

export default BenefitsCard;
