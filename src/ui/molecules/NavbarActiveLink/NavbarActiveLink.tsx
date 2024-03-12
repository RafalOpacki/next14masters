import clsx from "clsx";
import { type Route } from "next";
import { type PropsWithChildren } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

type NavbarActiveLinkProps = {
	href: Route;
	exact?: boolean;
};

const baseClassName =
	"flex h-full items-center border-b-2 text-sm font-medium text-gray-500 hover:border-gray-500 hover:text-gray-600";

export const NavbarActiveLink = ({
	href,
	children,
	exact,
}: PropsWithChildren<NavbarActiveLinkProps>) => {
	return (
		<ActiveLink
			className={clsx(baseClassName, "border-b-transparent")}
			activeClassName={clsx(baseClassName, "border-blue-600")}
			href={href}
			exact={exact}
		>
			{children}
		</ActiveLink>
	);
};
