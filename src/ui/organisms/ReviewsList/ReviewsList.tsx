import { type ReviewFragment } from "@/gql/graphql";
import { ReviewsListItem } from "@/ui/molecules/ReviewsListItem/ReviewsListItem";

type ReviewsListProps = {
	reviews: ReviewFragment[];
};

export const ReviewsList = async ({ reviews }: ReviewsListProps) => {
	return (
		<section>
			{reviews.map((review) => {
				return <ReviewsListItem key={review.id} review={review} />;
			})}
		</section>
	);
};
