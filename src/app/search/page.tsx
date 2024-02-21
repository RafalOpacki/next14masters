import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const { products } = await executeGraphql(ProductsGetDocument, {
		search: searchParams.query,
	});

	return (
		<section>
			{products.meta.count === 0 ? (
				<p className="text-xl">Found 0 items for phrase {`"${searchParams.query}"`}</p>
			) : (
				<ProductList products={products.data} />
			)}
		</section>
	);
}
