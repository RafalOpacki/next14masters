import Image from "next/image";
import { ImageResponse } from "next/og";
import { ProductDetailsWithCategoriesGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";

export const runtime = "edge";
export const alt = "Product";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

type OgImageProps = {
	params: {
		productId: string;
	};
};

export default async function OgImage({ params }: OgImageProps) {
	const { product } = await executeGraphql({
		query: ProductDetailsWithCategoriesGetByIdDocument,
		variables: {
			id: params.productId,
		},
	});

	if (!product) {
		return;
	}

	return new ImageResponse(
		(
			<div tw="w-full h-full flex justify-center items-center">
				<Image alt={product.name} src={product.images[0]?.url} height={300} width={300} />
				<div tw="flex flex-col">
					<h1 tw="font-extrabold text-6xl">{product.name}</h1>
					<p>{product.categories[0]?.name}</p>
					<p>{product.description}</p>
				</div>
			</div>
		),
	);
}
