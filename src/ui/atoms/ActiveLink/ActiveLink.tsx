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

	const isActive = exact ? pathname === href : pathname.startsWith(href);
	const classnames = `${className} ${isActive ? activeClassName : ""}`;

	return (
		<Link className={classnames} aria-current={isActive ? "page" : undefined} href={href}>
			{children}
		</Link>
	);
};
