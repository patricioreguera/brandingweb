import { createClient, groq } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_SANITY,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "productions",
		apiVersion: "2023-05-18",
	});

	return client.fetch(
		groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content,
			inputType
        }`
	);
}
export async function getServices() {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_SANITY,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "productions",
		apiVersion: "2023-05-18",
	});

	return client.fetch(
		groq`*[_type == "services"]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,
            "image":image.asset->url,
			shortdescription,
            description,
			price,
			
        }`
	);
}
