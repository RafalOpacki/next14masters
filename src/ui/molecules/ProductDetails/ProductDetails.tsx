import { type Product } from "@/types/Product";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage/ProductDetailsImage";

type ProductDetailsProps = {
	product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<article>
			<div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
				<ProductDetailsImage alt={product.title} src={product.image} />
				<ProductDetailsDescription
					description={product.description}
					price={product.price}
					title={product.title}
				/>
			</div>
		</article>
	);
};
