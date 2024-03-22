import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CartFindOrCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { ProductCounter } from "@/ui/atoms/ProductCounter/ProductCounter";
import { priceFormatter } from "@/utils/priceFormatter";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
	const { cartFindOrCreate } = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});

	if (!cartId || cartFindOrCreate.items.length === 0) {
		redirect("/");
	}

	const totalPrice = cartFindOrCreate.items.reduce((prevValue, currValue) => {
		return (prevValue = prevValue + currValue.product.price * currValue.quantity);
	}, 0);

	return (
		<>
			{/* TODO - rozbić na automic design */}
			<ul className="divide-y divide-gray-100 border-b border-t border-gray-100">
				{cartFindOrCreate.items.map(({ product, quantity }) => {
					return (
						<li key={product.id} className="flex justify-between py-4">
							<div className="flex">
								<Image
									className="mr-3 h-24 w-24 rounded-lg border border-gray-300 bg-slate-50 object-cover object-center p-1"
									width={130}
									height={130}
									src={product.images[0].url}
									alt={product.name}
								/>
								<div>
									<p className="font-medium text-slate-700">{product.name}</p>
									<p className="mt-1 text-sm text-slate-500">{product.categories[0].name}</p>
									<ProductCounter quantity={quantity} cartId={cartId} productId={product.id} />
								</div>
							</div>
							<p className="small-caps p-4 text-right font-semibold text-slate-900">
								{priceFormatter((product.price * quantity) / 100)}
							</p>
						</li>
					);
				})}
			</ul>
			<div className="rounded-lg bg-gray-50 p-4">
				<h2 className="sr-only">Order summary</h2>
				<div className="-my-4 divide-y divide-gray-200 text-sm">
					<div className="flex items-center justify-between py-4">
						<div>
							<div className="text-slate-900">Order total</div>
							<p className="mt-1 text-sm text-slate-500">
								Shipping and taxes will be calculated at the next step
							</p>
						</div>
						<div className="small-caps font-medium text-slate-900">
							{priceFormatter(totalPrice / 100)}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-10 flex justify-end">
				<button
					type="submit"
					className="rounded border border-transparent bg-blue-500 px-6 py-4 font-medium text-slate-50 hover:bg-blue-600 disabled:bg-gray-300"
				>
					Checkout
				</button>
			</div>
		</>
	);
}
