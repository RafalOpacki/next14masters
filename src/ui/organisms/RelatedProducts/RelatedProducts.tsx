import { notFound } from "next/navigation";
import { ProductGetRelatedDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export const RelatedProducts = async () => {
	const { products } = await executeGraphql(ProductGetRelatedDocument, {});

	if (!products) {
		notFound();
	}

	return (
		<aside data-testid="related-products">
			<h2 className="my-8 text-2xl">Related products</h2>
			<ProductList products={products.data} />
		</aside>
	);
};
