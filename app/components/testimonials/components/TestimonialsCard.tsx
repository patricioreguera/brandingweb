"use client";
import React from "react";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

// Define la interfaz para un testimonio individual
interface IndividualTestimonial {
	id: string;
	name: string;
	company: string;
	testimony: string;
}

// Define la interfaz para el objeto testimonial
interface TestimonialProps {
	testimonial: IndividualTestimonial;
}

const TestimonialsCard: React.FC<TestimonialProps> = ({ testimonial }) => {
	return (
		<Card className="max-w-[400px]">
			<CardHeader className="flex gap-3">
				<Image
					alt="nextui logo"
					height={40}
					radius="sm"
					src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
					width={40}
				/>
				<div className="flex flex-col">
					<p className="text-md">{testimonial.name}</p>
					<p className="text-small text-default-500">{testimonial.company}</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody>
				<p>{testimonial.testimony}</p>
			</CardBody>
		</Card>
	);
};

export default TestimonialsCard;
