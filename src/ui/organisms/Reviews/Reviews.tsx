"use client";

import { Suspense, useOptimistic } from "react";
import {
	type ProductDetailsFragment,
	type ReviewDataFragment,
	type ReviewFragment,
} from "@/gql/graphql";
import { StarRating } from "@/ui/molecules/StarRating/StarRating";
import { ReviewForm } from "@/ui/organisms/ReviewForm/ReviewForm";
import { ReviewsList } from "@/ui/organisms/ReviewsList/ReviewsList";

type ReviewsProps = {
	productId: ProductDetailsFragment["id"];
	rating: ReviewDataFragment["rating"];
	reviews: ReviewFragment[];
};

export const Reviews = ({ productId, reviews, rating }: ReviewsProps) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(currentReviews, newReview: ReviewFragment) => {
			return [newReview, ...currentReviews];
		},
	);

	const handleAddNewReview = (review: ReviewFragment) => {
		setOptimisticReviews(review);
	};

	return (
		<section className="mt-20">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer reviews</h2>
			<div className="mt-3 flex items-center gap-2">
				<StarRating rating={rating} />
				<p className="text-md ml-2 text-gray-900">Based on {optimisticReviews.length} reviews</p>
			</div>
			<div className="mt-10 grid gap-20 lg:grid-cols-2">
				<Suspense>
					<ReviewForm productId={productId} handleAddNewReview={handleAddNewReview} />
				</Suspense>
				<Suspense>
					<ReviewsList reviews={optimisticReviews} />
				</Suspense>
			</div>
		</section>
	);
};
