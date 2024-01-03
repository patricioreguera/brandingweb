import React from "react";
import { PortableText } from "@portabletext/react";

const Service = ({ service }: any) => {
	const components = {
		block: {
			// Ex. 1: customizing common block types
			h1: ({ children }: any) => (
				<h1 className="text-2xl text-colorgradient2">{children}</h1>
			),

			// Ex. 2: rendering custom styles
			h4: ({ children }: any) => (
				<h4 className="text-xl text-left ">{children}</h4>
			),
			normal: ({ children }: any) => (
				<p className="text-left font-light">{children}</p>
			),
		},
	};

	return (
		<div className="flex flex-col gap-3 ">
			<PortableText value={service?.description} components={components} />
		</div>
	);
};

export default Service;
