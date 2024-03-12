import { type ProductsListItemFragment } from "@/gql/graphql";
import { StarRating } from "@/ui/molecules/StarRating/StarRating";
import { priceFormatter } from "@/utils/priceFormatter";

type ProductListItemDescriptionProps = {
	name: ProductsListItemFragment["name"];
	category: ProductsListItemFragment["categories"][0]["name"];
	price: ProductsListItemFragment["price"];
	rating: ProductsListItemFragment["rating"];
};

export const ProductListItemDescription = ({
	name,
	category,
	price,
	rating,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex flex-col justify-between">
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</h3>
				<p className="text-sm font-medium text-gray-900 dark:text-gray-400">
					<span className="sr-only">Cena:</span>
					{priceFormatter(price / 100)}
				</p>
			</div>
			<div className="flex items-center justify-between">
				<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span>
					{category}
				</p>
				{rating && (
					<div className="flex items-center">
						<p className="small-caps mr-2 text-xs">{Math.round(rating * 10) / 10}/5</p>
						<StarRating size={12} rating={rating} />
					</div>
				)}
			</div>
		</div>
	);
};
