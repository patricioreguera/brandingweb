import React from "react";
import data from "./data.json";

const page = () => {
	return (
		<div className="flex flex-wrap gap-10">
			<h1>Datos web</h1>
			{data.map((canal) => (
				<div
					key={canal.suscribers}
					className="bg-darkgray w-[200px] rounded-2xl flex flex-col justify-center items-center gap-2 py-5"
				>
					<img
						src={canal.imageUrl}
						alt={canal.title}
						className="rounded-full"
					/>
					<h6 className="text-center">{canal.title}</h6>
					<a
						className="text-yellow"
						href={`https://www.youtube.com/${canal.suscribers}`}
						target="_blank"
					>
						{canal.suscribers}
					</a>
					<p>{canal.counter}</p>
				</div>
			))}
		</div>
	);
};

export default page;
