import { CategoryGetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { notFound } from "next/navigation";

type CategoriesPageProps = {
	params: {
		page: string;
		category: string;
	};
};

export default async function CategoriesPage({ params }: CategoriesPageProps) {
	const { category } = await executeGraphql(CategoryGetProductsDocument, { slug: params.category });

	if (!category) {
		notFound();
	}

	return (
		<>
			<h1>{category.name}</h1>
			{category?.products.map(({ id, name }) => {
				return <h2 key={id}>{name}</h2>;
			})}
		</>
	);
}
