import Link from "next/link";
import type { Product } from "@/types/Product";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListItemImage src={product.image} alt={product.title} />
					<ProductListItemDescription
						title={product.title}
						category={product.category}
						price={product.price}
					/>
				</article>
			</Link>
		</li>
	);
};
