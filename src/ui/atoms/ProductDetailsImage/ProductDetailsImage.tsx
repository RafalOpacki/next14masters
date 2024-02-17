import Image from "next/image";
import { type Product } from "@/types/Product";

type ProductDetailsImageProps = {
	alt: Product["title"];
	src: Product["image"];
};

export const ProductDetailsImage = ({ alt, src }: ProductDetailsImageProps) => {
	return (
		<Image
			className="aspect-square w-full overflow-hidden rounded-lg border object-cover"
			width={300}
			height={300}
			alt={alt}
			src={src}
		/>
	);
};
