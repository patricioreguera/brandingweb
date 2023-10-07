const Card = () => {
	return (
		<div
			className={`hover: relative flex h-96 w-80 cursor-pointer flex-col items-center  
        justify-between rounded-xl border border-[#ffffff1a] bg-gradient-to-r from-[#ffffff0d] to-[#ffffff07]`}
		>
			<div className="flex h-fit w-full flex-col items-start justify-center p-4 ">
				<div className="text-xs font-light text-primary">NEW</div>
				<div className="text-2xl">Acme Camara</div>
			</div>
		</div>
	);
};

export default Card;
