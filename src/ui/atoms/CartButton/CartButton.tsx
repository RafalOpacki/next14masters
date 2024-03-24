// import { ShoppingCart } from "lucide-react";
import Link from "next/link";
// import { findCartOrCreate } from "@/app/cart/actions";

// TODO
export const CartButton = async () => {
	// const cartFindOrCreate = await findCartOrCreate();

	// const qty = cartFindOrCreate.items.length ?? 0;

	return (
		<Link href="/cart" className="flex">
			{/* <ShoppingCart className="mr-1 text-gray-600" />
			{qty} */}
		</Link>
	);
};
