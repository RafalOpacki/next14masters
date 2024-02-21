import { notFound } from "next/navigation";
import { CollectionGetBySlugDocument, CollectionGetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type CollectionPageProps = {
	params: {
		collection: string;
	};
};

export async function generateMetadata({ params }: CollectionPageProps) {
	const { collection } = await executeGraphql(CollectionGetBySlugDocument, {
		slug: params.collection,
	});

	return {
		title: collection?.name ?? "",
	};
}

export default async function CollectionPage({ params }: CollectionPageProps) {
	const { collection } = await executeGraphql(CollectionGetProductsDocument, {
		slug: params.collection,
	});

	if (!collection) {
		notFound();
	}

	return (
		<>
			<h1 className="mb-8 text-2xl">{collection.name}</h1>
			<ProductList products={collection.products} />
		</>
	);
}
