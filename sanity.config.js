import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	title: "Admin Login",
	apiVersion: "2023-06-6",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
