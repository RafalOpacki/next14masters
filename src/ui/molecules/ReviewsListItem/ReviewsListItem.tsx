import { type ReviewFragment } from "@/gql/graphql";
import { StarRating } from "@/ui/molecules/StarRating/StarRating";

type ReviewsListItemProps = {
	review: ReviewFragment;
};

export const ReviewsListItem = ({ review }: ReviewsListItemProps) => {
	return (
		<div>
			<header>
				<p className="text-sm font-bold text-gray-900">{review.author}</p>
				<div className="mt-1 flex items-center gap-2">
					<p className="small-caps text-sm">{`${review.rating}/5`}</p>
					<StarRating rating={review.rating} />
				</div>
				<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">{review.title}</p>
			</header>
			<blockquote className="mt-2 text-sm italic text-gray-600">{review.description}</blockquote>
			<hr className="my-4 divide-x-2" />
		</div>
	);
};
