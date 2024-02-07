import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";
import { products } from "@/ui/organisms/ProductList/mock";

export const ProductList = () => {
	return (
		<section>
			<ul data-testid="products-list" className="flex flex-row flex-wrap gap-2">
				{products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</section>
	);
};
