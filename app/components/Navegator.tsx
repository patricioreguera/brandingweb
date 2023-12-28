export const Navegator = () => {
	return (
		<div className="flex flex-col items-center justify-center ">
			<div className=" rounded-xl border border-bordergray bg-pureBlack drop-shadow-[0_15px_35px_#6D28D940] transition-all duration-1000 hover:drop-shadow-[0_15px_35px_#6D28D970]">
				<div className="flex h-8 w-full items-center justify-start rounded-t-xl bg-headerNavbar">
					<div className="ml-3 h-3 w-3 rounded-xl bg-colornav1"></div>
					<div className="ml-2 h-3 w-3 rounded-xl bg-colornav2"></div>
					<div className="ml-2 h-3 w-3 rounded-xl bg-colornav3"></div>
				</div>
				{/* <div className="h-fit p-20 ">{children}</div> */}
			</div>
		</div>
	);
};
