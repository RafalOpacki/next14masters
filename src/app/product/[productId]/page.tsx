import { notFound } from "next/navigation";
import { getProductById } from "@/app/product/[productId]/api";
import { ProductData } from "@/ui/organisms/Product/ProductData";

type Params = {
	params: { productId: string };
};

export async function generateMetadata({ params: { productId } }: Params) {
	const product = await getProductById(productId);

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({ params: { productId } }: Params) {
	const product = await getProductById(productId);

	if (!product) {
		return notFound();
	}

	return <ProductData product={product} />;
}
