// app/providers.tsx
"use client";

//eslint-disable-next-line import/no-extraneous-dependencies
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<main className="dark">{children}</main>
		</NextUIProvider>
	);
}
