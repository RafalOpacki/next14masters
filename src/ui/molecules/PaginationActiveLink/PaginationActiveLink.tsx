import { type Route } from "next";
import { type PropsWithChildren } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type PaginationActiveLinkProps = { href: Route; exact?: boolean };

export const PaginationActiveLink = ({
	href,
	exact,
	children,
}: PropsWithChildren<PaginationActiveLinkProps>) => {
	return (
		<ActiveLink
			className="text-lg font-medium"
			activeClassName="border-b-2 border-black dark:border-white"
			href={href}
			exact={exact}
		>
			{children}
		</ActiveLink>
	);
};
