import type { Product } from "@/types/Product";
import { priceFormatter } from "@/utils/priceFormatter";

type ProductListItemDescriptionProps = {
	title: Product["title"];
	category: Product["category"];
	price: Product["price"];
};

export const ProductListItemDescription = ({
	category,
	title,
	price,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
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
