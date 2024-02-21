import { type ProductDetailsFragment } from "@/gql/graphql";
import { ProductDetails } from "@/ui/molecules/ProductDetails/ProductDetails";

type ProductDataProps = {
	product: ProductDetailsFragment;
};

export const ProductData = ({ product }: ProductDataProps) => {
	return (
		<section>
			<ProductDetails product={product} />
		</section>
	);
};
