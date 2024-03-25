import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { addToCart, changeItemQuantity, findCartOrCreate } from "@/app/cart/actions";
import { type ProductDetailsFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton/AddToCartButton";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage/ProductDetailsImage";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	async function addProductToCartAction() {
		"use server";
		const cartFindOrCreate = await findCartOrCreate();

		if (!cartFindOrCreate) {
			throw new Error("Failed to create cart");
		}

		cookies().set("cartId", cartFindOrCreate.id, {
			httpOnly: true,
			sameSite: "strict",
		});

		const itemFromCart = cartFindOrCreate.items.filter((item) => item.product.id === product.id);

		if (itemFromCart && itemFromCart.length > 0) {
			await changeItemQuantity(
				cartFindOrCreate.id,
				product.id,
				Number(itemFromCart[0]?.quantity) + 1,
			);
		} else {
			await addToCart(cartFindOrCreate.id, product.id);
		}

		revalidateTag("cart");
	}

	return (
		<article className="w-full">
			<form
				action={addProductToCartAction}
				className="grid items-start justify-between gap-6 md:grid-cols-2 lg:gap-12"
			>
				<ProductDetailsImage alt={product.name} src={product.images[0].url} />
				<div>
					<ProductDetailsDescription
						description={product.description}
						price={product.price}
						name={product.name}
					/>
					<AddToCartButton />
				</div>
			</form>
		</article>
	);
};
