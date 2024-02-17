import { type ReactNode } from "react";
import { getProductsCount } from "@/app/products/[page]/api";
import { maxProductsPerPage } from "@/app/products/[page]/const";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";

type LayoutProps = {
	children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
	const productsCount = await getProductsCount();
	const totalPages = Math.ceil(productsCount / maxProductsPerPage);

	return (
		<section>
			{children}
			{/* TODO - products do enuma albo obiektu */}
			<Pagination route="/products" totalPages={totalPages} />
		</section>
	);
}
