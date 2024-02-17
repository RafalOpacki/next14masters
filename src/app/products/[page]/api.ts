import { maxProductsPerPage } from "@/app/products/[page]/const";
import { type Product } from "@/types/Product";

type GetProductsParams = {
	take?: number;
	page?: number;
};

export const getProducts = async ({
	take = maxProductsPerPage,
	page = 1,
}: GetProductsParams): Promise<Product[]> => {
	return (
		await fetch(
			`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${take * (page - 1)}`,
		)
	).json() as Promise<Product[]>;
};

export const getProductsCount = async (): Promise<number> => {
	return (await fetch("https://naszsklep-api.vercel.app/api/products"))
		.json()
		.then((products: Product[]) => products.length);
};
