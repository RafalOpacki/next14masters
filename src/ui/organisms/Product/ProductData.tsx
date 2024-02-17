import { type Product } from "@/types/Product";
import { ProductDetails } from "@/ui/molecules/ProductDetails/ProductDetails";

type ProductDataProps = {
	product: Product;
};

export const ProductData = ({ product }: ProductDataProps) => {
	return (
		<section>
			<ProductDetails product={product} />
		</section>
	);
};
