import { getProducts } from "@/app/products/[page]/api";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function HomePage() {
	// TODO - remove
	const products = await getProducts({ page: 1, take: 20 });

	return <ProductList products={products} />;
}
