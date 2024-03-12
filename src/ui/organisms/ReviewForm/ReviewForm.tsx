"use client";

import { useState } from "react";
import clsx from "clsx";
import { ReviewCreateDocument, type ProductDetailsFragment } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { StarIcon } from "@/ui/atoms/StarIcon/StarIcon";

const baseLabelClassName = "mb-4 text-sm font-medium";
const baseFieldClassName =
	"block w-full rounded-lg border-2 p-2 outline-none focus:border-gray-200 focus:shadow-md font-medium mb-4";

type ReviewFormProps = {
	productId: ProductDetailsFragment["id"];
};

export const ReviewForm = ({ productId }: ReviewFormProps) => {
	const [rating, setRating] = useState<number | null>(null);

	const submitFormAction = async (formData: FormData) => {
		await executeGraphql({
			query: ReviewCreateDocument,
			variables: {
				author: formData.get("name")?.toString() ?? "",
				email: formData.get("email")?.toString() ?? "",
				productId: productId,
				description: formData.get("content")?.toString() ?? "",
				rating: rating ?? 0,
				title: formData.get("headline")?.toString() ?? "",
			},
		});
	};

	return (
		<div className="flex w-full flex-col">
			<h2 className="mb-4 text-lg font-medium text-gray-900">Share your thoughts</h2>
			<form data-testid="add-review-form" action={submitFormAction}>
				<label className={baseLabelClassName}>
					Headline
					<input
						className={clsx(baseFieldClassName, "h-10")}
						type="text"
						name="headline"
						required
					/>
				</label>
				<label className={baseLabelClassName}>
					Content
					<textarea
						className={clsx(baseFieldClassName, "max-h-20 min-h-20")}
						name="content"
						required
					></textarea>
				</label>
				<label className={clsx(baseLabelClassName, "flex gap-1")}>
					Rating
					{Array.from({ length: 5 }).map((_, index) => (
						<label key={index}>
							<input
								type="radio"
								name="rating"
								hidden
								value={index + 1}
								onChange={() => setRating(index + 1)}
							/>
							<StarIcon highlighted={!!(rating && index < rating)} />
						</label>
					))}
				</label>
				<label className={baseLabelClassName}>
					Name
					<input className={clsx(baseFieldClassName, "h-10")} type="text" name="name" required />
				</label>
				<label className={baseLabelClassName}>
					Email
					<input className={clsx(baseFieldClassName, "h-10")} type="email" name="email" required />
				</label>
				<button
					className="mt-6 w-full rounded-md border bg-slate-700 px-8 py-3 text-white"
					type="submit"
				>
					Submit review
				</button>
			</form>
		</div>
	);
};
