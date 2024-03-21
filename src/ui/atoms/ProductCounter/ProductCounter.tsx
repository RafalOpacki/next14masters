"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

type ProductCounterProps = {
	// TODO - use here fragments
	quantity: number;
	cartId: string;
	productId: string;
};

export const ProductCounter = ({ quantity, cartId, productId }: ProductCounterProps) => {
	const [quantityOptimistic, setQuantityOptimistic] = useOptimistic(
		quantity,
		(_, newState: number) => newState,
	);

	return (
		<form className="mt-3 flex gap-2">
			<button
				data-testid="decrement"
				type="submit"
				className="b h-6 w-6 border hover:bg-gray-100"
				formAction={async () => {
					setQuantityOptimistic(quantityOptimistic - 1);
					await changeItemQuantity(cartId, productId, quantityOptimistic - 1);
				}}
			>
				-
			</button>
			<span data-testid="quantity">{quantityOptimistic}</span>
			<button
				data-testid="increment"
				className="h-6 w-6 border hover:bg-gray-100"
				formAction={async () => {
					setQuantityOptimistic(quantityOptimistic + 1);
					await changeItemQuantity(cartId, productId, quantityOptimistic + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
