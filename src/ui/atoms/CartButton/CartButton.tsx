import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const CartButton = () => {
	return (
		<Link href="/cart">
			<ShoppingCart className="text-gray-600" />
		</Link>
	);
};
