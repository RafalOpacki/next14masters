import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";
import { products } from "@/ui/organisms/ProductList/mock";

export const ProductList = () => {
	return (
		<section className="mx-auto max-w-2xl px-8 py-8 sm:px-6 lg:max-w-7xl">
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			>
				{products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</section>
	);
};
