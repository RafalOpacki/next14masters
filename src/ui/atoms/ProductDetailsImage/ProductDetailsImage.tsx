import Image from "next/image";
import { type ProductDetailsFragment } from "@/gql/graphql";

type ProductDetailsImageProps = {
	alt: ProductDetailsFragment["name"];
	src: ProductDetailsFragment["images"][0]["url"];
};

export const ProductDetailsImage = ({ alt, src }: ProductDetailsImageProps) => {
	return (
		<Image
			className="aspect-square w-full overflow-hidden rounded-lg border bg-slate-50 object-cover"
			width={300}
			height={300}
			alt={alt}
			src={src}
		/>
	);
};
