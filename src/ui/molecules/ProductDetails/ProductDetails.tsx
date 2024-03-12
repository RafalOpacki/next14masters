import { type ProductDetailsFragment } from "@/gql/graphql";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage/ProductDetailsImage";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	async function addProductToCartAction() {
		"use server";
		console.log("addProductToCartAction");
	}

	return (
		<article className="w-full">
			<form
				action={addProductToCartAction}
				className="grid items-start justify-between gap-6 md:grid-cols-2 lg:gap-12"
			>
				<ProductDetailsImage alt={product.name} src={product.images[0].url} />
				<div>
					<ProductDetailsDescription
						description={product.description}
						price={product.price}
						name={product.name}
					/>
					<button
						type="submit"
						className="mt-6 w-full rounded-md border bg-slate-700 px-8 py-3 text-white"
					>
						Add to cart
					</button>
				</div>
			</form>
		</article>
	);
};
