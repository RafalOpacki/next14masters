import { type ProductsListItemFragment } from "@/gql/graphql";
import { priceFormatter } from "@/utils/priceFormatter";

type ProductListItemDescriptionProps = {
	name: ProductsListItemFragment["name"];
	category: ProductsListItemFragment["categories"][0]["name"];
	price: ProductsListItemFragment["price"];
};

export const ProductListItemDescription = ({
	name,
	category,
	price,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span>
					{category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900 dark:text-gray-400">
				<span className="sr-only">Cena:</span>
				{priceFormatter(price / 100)}
			</p>
		</div>
	);
};
