"use client";

import { Overlay } from "@/ui/atoms/Overlay/Overlay";

export default function CartModal() {
	return (
		<aside className="fixed inset-0 z-50 backdrop-blur-sm">
			<Overlay />
			<div className="z-60 absolute right-0 top-0 flex h-full w-full max-w-md animate-slide flex-col bg-gray-50 p-6">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-xl font-extrabold">Cart</h2>
					<button
						onClick={() => {
							window.location.reload();
						}}
					>
						Go to cart
					</button>
				</div>
				<p className="mt-8">No items in the cart</p>
			</div>
		</aside>
	);
}
