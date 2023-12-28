// components/Footer.js
import React from "react";

const Footer = () => {
	return (
		<footer className=" bg-gray-900 mt-16 text-center ">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2024
					<a href="https://patoreguera.com/" className="hover:underline">
						@patoreguera
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
