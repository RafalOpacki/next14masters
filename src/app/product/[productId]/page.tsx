import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductData } from "@/ui/organisms/Product/ProductData";
import { RelatedProducts } from "@/ui/organisms/RelatedProducts/RelatedProducts";

type Params = {
	params: { productId: string };
};

export async function generateMetadata({ params: { productId } }: Params) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: productId });

	if (!product) {
		notFound();
	}

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function ProductPage({ params: { productId } }: Params) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: productId });

	if (!product) {
		return notFound();
	}

	return (
		<>
			<ProductData product={product} />
			<Suspense>
				<RelatedProducts />
			</Suspense>
		</>
	);
}
