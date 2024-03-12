import { ProductsGetDocument, type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { SortByOptions } from "@/ui/organisms/SortByOptions/SortByOptions";

type ProductsProps = {
	params: { page: string };
	searchParams: { order: SortDirection; orderBy: ProductSortBy };
};

const productsPerPage = 4;

export default async function ProductsPage({ params, searchParams }: ProductsProps) {
	const { products } = await executeGraphql({
		query: ProductsGetDocument,
		variables: {
			take: productsPerPage,
			skip: productsPerPage * (+params.page - 1),
			...(searchParams && {
				order: searchParams.order,
				orderBy: searchParams.orderBy,
			}),
		},
	});
	const totalPages = Math.ceil(products.meta.total / productsPerPage);

	// TODO - make it better
	const queryParams =
		searchParams.order && searchParams.orderBy
			? `order=${searchParams.order}&orderBy=${searchParams.orderBy}`
			: "";
	return (
		<section>
			<div className="mb-10 flex h-20 w-full items-center justify-between border border-gray-200 bg-gray-100 p-8">
				<p className="text-xl">All products</p>
				<SortByOptions />
			</div>
			<ProductList products={products.data} />
			<Pagination route="/products" totalPages={totalPages} queryParams={queryParams} />
		</section>
	);
}
