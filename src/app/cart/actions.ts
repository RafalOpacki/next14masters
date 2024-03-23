"use server";

import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartFindOrCreateDocument,
	CartRemoveItemDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

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
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};

export const findCartOrCreate = async () => {
	"use server";
	const cartIdFromCookie = getCartFromCookies();

	const cart = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			id: cartIdFromCookie,
		},
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});

	if (!cartIdFromCookie) {
		cookies().set("cartId", cart.cartFindOrCreate.id);
	}

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
		next: {
			tags: ["cart"],
		},
	});

	revalidateTag("cart");

	return cart;
};

export const handlePaymentAction = async () => {
	"use server";

	const cartFindOrCreate = await findCartOrCreate();

	if (!cartFindOrCreate) {
		return;
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "p24"],
		metadata: {
			cartId: cartFindOrCreate.id,
		},
		line_items: cartFindOrCreate.items.map(({ product, quantity }) => {
			return {
				price_data: {
					currency: "eur",
					product_data: {
						name: product.name,
						description: product.description,
						images: product.images.map(({ url }) => url),
					},
					unit_amount: product.price * quantity,
				},
				quantity,
			};
		}),
		mode: "payment",
		success_url: `localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `localhost:3000/cart/cancel`,
	});

	if (!checkoutSession.url) {
		throw new Error("Could not create checkout session");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
};
