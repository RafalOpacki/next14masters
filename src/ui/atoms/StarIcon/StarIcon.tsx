import clsx from "clsx";
import { Star } from "lucide-react";

type StarIconProps = {
	highlighted: boolean;
	size?: number;
};

export const StarIcon = ({ highlighted, size = 18 }: StarIconProps) => {
	return (
		<Star
			size={size}
			className={clsx("flex-shrink-0 fill-current", highlighted && "text-yellow-400")}
		/>
	);
};
