"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartFindOrCreateDocument,
	CartGetByIdDocument,
	CartRemoveItemDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";

export const getCartById = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return;
	}

	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		cache: "no-store",
	});

	return cart.cart;
};

export const getCartFromCookies = () => {
	const cartId = cookies().get("cartId")?.value;
	return cartId;
};

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			id: cartId,
			quantity,
			productId,
		},
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};

// TODO - dać to na froncie pod przyciskiem
export const removeItem = async (cartId: string, productId: string) => {
	await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			id: cartId,
			productId: productId,
		},
		cache: "no-store",
	});
};

export const createCart = async () => {
	const cartIdFromCookie = getCartFromCookies();

	const cart = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			id: cartIdFromCookie,
		},
		cache: "no-store",
	});

	return cart.cartFindOrCreate;
};

export const addToCart = async (id: string, productId: string) => {
	const cart = await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			id: id,
			input: {
				item: {
					productId: productId,
				},
			},
		},
		cache: "no-store",
	});

	return cart;
};

// TODO
// export const handlePaymentAction = async () => {
// 	"use server";

// 	const cartFindOrCreate = await findCartOrCreate();

// 	if (!cartFindOrCreate) {
// 		return;
// 	}

// 	if (!process.env.STRIPE_SECRET_KEY) {
// 		throw new Error("Missing STRIPE_SECRET_KEY");
// 	}

// 	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
// 		apiVersion: "2023-10-16",
// 		typescript: true,
// 	});

// 	const checkoutSession = await stripe.checkout.sessions.create({
// 		payment_method_types: ["card", "p24"],
// 		metadata: {
// 			cartId: cartFindOrCreate.id,
// 		},
// 		line_items: cartFindOrCreate.items.map(({ product, quantity }) => {
// 			return {
// 				price_data: {
// 					currency: "eur",
// 					product_data: {
// 						name: product.name,
// 						description: product.description,
// 						images: product.images.map(({ url }) => url),
// 					},
// 					unit_amount: product.price * quantity,
// 				},
// 				quantity,
// 			};
// 		}),
// 		mode: "payment",
// 		success_url: `localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
// 		cancel_url: `localhost:3000/cart/cancel`,
// 	});

// 	if (!checkoutSession.url) {
// 		throw new Error("Could not create checkout session");
// 	}

// 	cookies().set("cartId", "");
// 	redirect(checkoutSession.url);
// };
