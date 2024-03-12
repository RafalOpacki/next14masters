import { type Route } from "next";
import { notFound } from "next/navigation";
import { CategoryGetBySlugDocument, CategoryGetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type CategoriesPageProps = {
	params: {
		page: string;
		category: string;
	};
};

export async function generateMetadata({ params }: CategoriesPageProps) {
	const { category } = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug: params.category },
	});

	return {
		title: category?.name,
	};
}

export default async function CategoryPage({ params }: CategoriesPageProps) {
	const { category } = await executeGraphql({
		query: CategoryGetProductsDocument,
		variables: { slug: params.category },
	});

	if (!category) {
		notFound();
	}

	return (
		<section>
			<h1 className="mb-8 text-2xl">{category.name}</h1>
			<ProductList products={category.products} />
			{/* {TODO!!!} */}
			<Pagination route={`/categories/${params.category}` as Route} totalPages={2} />
		</section>
	);
}
