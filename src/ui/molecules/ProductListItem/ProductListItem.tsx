import type { Product as ProductType } from "@/types/Product";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";

type ProductListItemProps = {
	product: ProductType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductListItemImage img={product.img} />
				<ProductListItemDescription
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			</article>
		</li>
	);
};
