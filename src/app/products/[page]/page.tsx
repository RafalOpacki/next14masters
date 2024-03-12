import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type ProductsProps = {
	params: { page: string };
};

export const generateStaticParams = async () => {
	const { products } = await executeGraphql({ query: ProductsGetDocument, variables: { take: 5 } });

	const ids = products.data.map(({ id }) => id);

	const staticPaths = ids.map((id) => ({
		params: { page: id },
	}));
	return staticPaths;
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
