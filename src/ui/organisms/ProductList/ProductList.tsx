import { type Product } from "@/types/Product";
import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";

type ProductsListProps = {
	products: Product[];
};

export const ProductList = ({ products }: ProductsListProps) => {
	return (
		<section>
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
