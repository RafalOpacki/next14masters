import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductDetails } from "@/ui/molecules/ProductDetails/ProductDetails";
import { RelatedProducts } from "@/ui/organisms/RelatedProducts/RelatedProducts";
import { Reviews } from "@/ui/organisms/Reviews/Reviews";

type Params = {
	params: { productId: string };
};

export async function generateMetadata({ params: { productId } }: Params) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	return {
		title: product?.name,
		description: product?.description,
	};
}

export default async function ProductPage({ params: { productId } }: Params) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	if (!product) {
		notFound();
	}

	return (
		<section>
			<ProductDetails product={product} />
			<Suspense>
				<RelatedProducts />
			</Suspense>
			<Reviews productId={product.id} />
		</section>
	);
}
