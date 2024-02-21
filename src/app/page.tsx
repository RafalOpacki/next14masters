import { ProductsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function HomePage() {
	const { products } = await executeGraphql(ProductsGetDocument, { take: 4 });

	return <ProductList products={products.data} />;
}
