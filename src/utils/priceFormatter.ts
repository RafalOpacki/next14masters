import { type Product } from "@/types/Product";

export const priceFormatter = (cost: Product["price"]) => {
	return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(cost);
};
