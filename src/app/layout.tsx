import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { type ReactNode } from "react";
import { Footer } from "@/ui/organisms/Footer/Footer";
import { Header } from "@/ui/organisms/Header/Header";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
	title: "Shop",
	description: "Shop with something",
};

export default function RootLayout({
	children,
	// TODO cart modal
	// cartModal,
}: Readonly<{
	children: ReactNode;
	// cartModal: ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={clsx(roboto.className, "flex min-h-screen flex-col")}>
					<Header />
					<main className="my-10 flex flex-grow flex-col">
						<div className="mx-auto w-full max-w-2xl lg:max-w-7xl">{children}</div>
					</main>
					<Footer />
					{/* {cartModal} */}
				</body>
			</html>
		</ClerkProvider>
	);
}
