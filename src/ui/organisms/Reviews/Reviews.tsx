import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ReviewsGetByProductIdDocument, type ProductDetailsFragment } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { StarRating } from "@/ui/molecules/StarRating/StarRating";
import { ReviewForm } from "@/ui/organisms/ReviewForm/ReviewForm";
import { ReviewsList } from "@/ui/organisms/ReviewsList/ReviewsList";

type ReviewsProps = {
	productId: ProductDetailsFragment["id"];
};

export const Reviews = async ({ productId }: ReviewsProps) => {
	const { product } = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: { id: productId },
	});

	if (!product) {
		notFound();
	}

	return (
		<section className="mt-20">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer reviews</h2>
			<div className="mt-3 flex items-center gap-2">
				<StarRating rating={product.rating} />
				<p className="text-md ml-2 text-gray-900">Based on {product.reviews.length} reviews</p>
			</div>
			<div className="mt-10 grid gap-20 lg:grid-cols-2">
				<ReviewForm productId={productId} />
				<Suspense>
					<ReviewsList reviews={product.reviews} />
				</Suspense>
			</div>
		</section>
	);
};
