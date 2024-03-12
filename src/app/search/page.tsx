import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

// TODO - obgługa przy braku query lub 1 znaku

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const { products } = await executeGraphql({
		query: ProductsGetDocument,
		variables: {
			search: searchParams.query,
		},
	});

	return (
		<section className="w-full">
			<div className="mb-10 flex h-20 w-full items-center border border-gray-200 bg-gray-100 p-8 ">
				<p className="text-xl">
					Found {products.data.length} items for phrase {`"${searchParams.query}"`}
				</p>
			</div>
			{products.meta.count && <ProductList products={products.data} />}
		</section>
	);
}
