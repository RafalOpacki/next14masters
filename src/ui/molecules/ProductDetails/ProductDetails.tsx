import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { addToCart, changeItemQuantity, createCart, getCartById } from "@/app/cart/actions";
import { type ProductDetailsFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton/AddToCartButton";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription/ProductDetailsDescription";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage/ProductDetailsImage";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

async function getOrCreateCart() {
	"use server";
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await getCartById();
		if (cart) {
			return cart;
		}
	}

	const cart = await createCart();

	cookies().set("cartId", cart.id, {
		httpOnly: true,
		sameSite: "strict",
	});

	if (!cart) {
		throw new Error("Cart not found or created");
	}

	return cart;
}

export const ProductDetails = async ({ product }: ProductDetailsProps) => {
	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();

		if (!cart) {
			throw new Error("Cart not found or created");
		}

		const productId = product.id;
		const existingItem = cart.items.find((item) => item.product.id === productId);

		if (existingItem) {
			const updatedQuantity: number = existingItem.quantity ? existingItem.quantity + 1 : 1;

			await changeItemQuantity(cart.id, productId, updatedQuantity);

			revalidateTag("cart");
			return;
		} else {
			await addToCart(cart.id, product.id);
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
