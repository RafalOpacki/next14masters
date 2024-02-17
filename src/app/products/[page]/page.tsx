import { getProducts, getProductsCount } from "@/app/products/[page]/api";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type Params = {
	params: { page: string };
};

export const generateStaticParams = async () => {
	// TODO - ogarnąć tu
	const productsCount = await getProductsCount();
	const paths = Array.from({ length: productsCount }, (path, i) => i + 1);
	const staticPaths = paths.map((page) => ({
		params: { page: page },
	}));
	return staticPaths;
};

// get total
export default async function Products({ params: { page } }: Params) {
	const products = await getProducts({ page: +page });

	return <ProductList products={products} />;
}
