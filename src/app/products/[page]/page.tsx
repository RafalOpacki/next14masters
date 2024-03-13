import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type ProductsProps = {
	params: { page: string };
};

const productsPerPage = 4;

export default async function ProductsPage({ params }: ProductsProps) {
	const { products } = await executeGraphql({
		query: ProductsGetDocument,
		variables: {
			take: productsPerPage,
			skip: productsPerPage * (+params.page - 1),
		},
	});

	const totalPages = Math.ceil(products.meta.total / productsPerPage);

	return (
		<section>
			<ProductList products={products.data} />
			<Pagination route="/products" totalPages={totalPages} />
		</section>
	);
}
