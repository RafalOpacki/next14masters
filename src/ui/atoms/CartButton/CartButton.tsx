import Link from "next/link";
import { cookies } from "next/headers";
import { ShoppingCart } from "lucide-react";
import { CartFindOrCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";

export const CartButton = async () => {
	const cartId = cookies().get("cartId")?.value;

	const { cartFindOrCreate } = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
	});

	const qty = cartFindOrCreate.items.length ?? 0;

	return (
		<Link href="/cart" className="flex">
			<ShoppingCart className="mr-1 text-gray-600" />
			{qty}
		</Link>
	);
};
