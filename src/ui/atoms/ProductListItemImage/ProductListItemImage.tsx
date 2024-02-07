import Image from "next/image";
import type { Product } from "@/types/Product";

type ProductListItemImageProps = {
	img: Product["img"];
};

export const ProductListItemImage = ({ img }: ProductListItemImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				width={300}
				height={300}
				alt={img.alt}
				src={img.src}
			/>
		</div>
	);
};
