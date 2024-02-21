import { type ProductDetailsFragment } from "@/gql/graphql";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage/ProductDetailsImage";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<article className="w-full">
			<div className="grid items-start justify-between gap-6 md:grid-cols-2 lg:gap-12">
				<ProductDetailsImage alt={product.name} src={product.images[0].url} />
				<ProductDetailsDescription
					description={product.description}
					price={product.price}
					name={product.name}
				/>
			</div>
		</article>
	);
};
