import { notFound } from "next/navigation";
import { CategoriesGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";

export default async function CategoriesPage() {
	const { categories } = await executeGraphql({
		query: CategoriesGetDocument,
		variables: { take: 4 },
	});

	if (!categories) {
		notFound();
	}

	return (
		<ul className="flex gap-2">
			{categories.data.map(({ id, name, slug }) => {
				return (
					<li key={id} className="w-1/3">
						<a className="h-20 text-black dark:text-white" href={`/categories/${slug}`}>
							{name}
						</a>
					</li>
				);
			})}
		</ul>
	);
}
