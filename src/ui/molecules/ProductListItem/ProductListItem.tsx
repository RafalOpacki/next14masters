import Link from "next/link";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage/ProductListItemImage";

type ProductListItemProps = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListItemImage src={product.images[0].url} alt={product.name} />
					<ProductListItemDescription
						name={product.name}
						category={product.categories[0].name}
						price={product.price}
					/>
				</article>
			</Link>
		</li>
	);
};
