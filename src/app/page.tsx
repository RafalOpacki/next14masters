import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function HomePage() {
	const { products } = await executeGraphql({ query: ProductsGetDocument, variables: { take: 4 } });

	return (
		<section>
			<ProductList products={products.data} />
		</section>
	);
}
