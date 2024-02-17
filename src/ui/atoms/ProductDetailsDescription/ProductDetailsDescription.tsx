import { type Product } from "@/types/Product";
import { priceFormatter } from "@/utils/priceFormatter";

type ProductDetailsDescriptionProps = {
	title: Product["title"];
	price: Product["price"];
	description: Product["description"];
};

export const ProductDetailsDescription = ({
	title,
	price,
	description,
}: ProductDetailsDescriptionProps) => {
	return (
		<div className="grid gap-4">
			<h1 className="text-3xl font-bold text-gray-700 lg:text-4xl dark:text-gray-200">{title}</h1>
			<div className="text-xl font-bold text-gray-900 dark:text-gray-400">
				{priceFormatter(price / 100)}
			</div>
			<div className="text-sm leading-loose text-gray-500 dark:text-gray-300">
				<p>{description}</p>
			</div>
		</div>
	);
};
