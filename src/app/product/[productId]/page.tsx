import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductGetByIdDocument, ReviewsGetByProductIdDocument } from "@/gql/graphql";
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

	const { product: productWithReviews } = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: { id: productId },
		// TODO - add revalidation
	});

	if (!productWithReviews) {
		notFound();
	}

	return (
		<section>
			<ProductDetails product={product} />
			<Suspense>
				<RelatedProducts />
			</Suspense>
			<Suspense>
				<Reviews
					productId={product.id}
					reviews={productWithReviews.reviews}
					rating={productWithReviews.rating}
				/>
			</Suspense>
		</section>
	);
}
