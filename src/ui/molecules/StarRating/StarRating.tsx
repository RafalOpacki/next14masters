import { type ReviewDataFragment } from "@/gql/graphql";
import { StarIcon } from "@/ui/atoms/StarIcon/StarIcon";

type StarRatingProps = {
	rating: ReviewDataFragment["rating"];
	size?: number;
};

export const StarRating = ({ rating, size }: StarRatingProps) => {
	return (
		<>
			{rating && (
				<div className="flex gap-1">
					{Array.from({ length: 5 }).map((_, index) => {
						const ratingValue = Math.ceil(rating);
						return (
							<StarIcon
								key={index}
								size={size}
								highlighted={!!(ratingValue && index < ratingValue)}
							/>
						);
					})}
				</div>
			)}
		</>
	);
};
