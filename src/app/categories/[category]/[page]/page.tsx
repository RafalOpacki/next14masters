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
	const { category } = await executeGraphql(CategoryGetBySlugDocument, { slug: params.category });

	return {
		title: category?.name ?? "",
	};
}

export default async function CategoriesPage({ params }: CategoriesPageProps) {
	const { category } = await executeGraphql(CategoryGetProductsDocument, { slug: params.category });

	if (!category) {
		notFound();
	}

	return (
		<>
			<h1 className="mb-8 text-2xl">{category.name}</h1>
			<ProductList products={category.products} />
			{/* {TODO!!!} */}
			<Pagination route={`/categories/${params.category}` as Route} totalPages={2} />
		</>
	);
}
