import { type Product } from "@/types/Product";

export const getProductById = async (productId: string): Promise<Product> => {
	return (
		await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`)
	).json() as Promise<Product>;
};
