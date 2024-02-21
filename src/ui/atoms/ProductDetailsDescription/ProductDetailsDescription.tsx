import { type ProductDetailsFragment } from "@/gql/graphql";
import { priceFormatter } from "@/utils/priceFormatter";

type ProductDetailsDescriptionProps = {
	name: ProductDetailsFragment["name"];
	price: ProductDetailsFragment["price"];
	description: ProductDetailsFragment["description"];
};

export const ProductDetailsDescription = ({
	name,
	price,
	description,
}: ProductDetailsDescriptionProps) => {
	return (
		<div className="grid w-full gap-4">
			<h1 className="text-3xl font-bold text-gray-700 lg:text-4xl dark:text-gray-200">{name}</h1>
			<div className="text-xl font-bold text-gray-900 dark:text-gray-400">
				{priceFormatter(price / 100)}
			</div>
			<div className="text-sm leading-loose text-gray-500 dark:text-gray-300">
				<p>{description}</p>
			</div>
		</div>
	);
};
