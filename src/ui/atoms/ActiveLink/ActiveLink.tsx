"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";

type ActiveLinkProps = {
	href: Route;
	className: string;
	activeClassName: string;
	exact?: boolean;
};

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	children,
	exact = true,
}: PropsWithChildren<ActiveLinkProps>) => {
	const pathname = usePathname();

	// split("?") used to remove query params from exact path
	const isActive = exact ? pathname === href.split("?")[0] : pathname.startsWith(href);

	return (
		<Link
			className={isActive ? activeClassName : className}
			aria-current={isActive ? "page" : undefined}
			href={href}
		>
			{children}
		</Link>
	);
};
