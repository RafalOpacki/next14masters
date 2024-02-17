import { type PropsWithChildren } from "react";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type NavbarActiveLinkProps = {
	href: Route;
	exact?: boolean;
};

export const NavbarActiveLink = ({
	href,
	children,
	exact,
}: PropsWithChildren<NavbarActiveLinkProps>) => {
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
