import { notFound } from "next/navigation";
import { CollectionsGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";

export default async function CollectionsPage() {
	const { collections } = await executeGraphql(CollectionsGetDocument, {});

	if (!collections) {
		notFound();
	}

	return (
		<ul className="flex gap-2">
			{collections.data.map(({ id, name, slug }) => {
				return (
					<li key={id} className="w-1/3">
						<a className="h-20 text-black dark:text-white" href={`/collections/${slug}`}>
							{name}
						</a>
					</li>
				);
			})}
		</ul>
	);
}
