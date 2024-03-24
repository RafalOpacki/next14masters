"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			disabled={pending}
			type="submit"
			className={clsx(
				"mt-6 flex w-full items-center justify-center rounded-md border bg-slate-700 px-8 py-3 text-white",
				{
					"bg-slate-400": pending,
					"cursor-wait": pending,
				},
			)}
		>
			{pending ? (
				<div
					className="flex animate-spin items-center justify-center rounded-full border-8 border-gray-500 border-t-transparent"
					aria-busy="true"
				/>
			) : (
				<> Add to cart</>
			)}
		</button>
	);
};
