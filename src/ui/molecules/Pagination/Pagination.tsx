"use client";

import { type Route } from "next";
import { PaginationActiveLink } from "@/ui/molecules/PaginationActiveLink/PaginationActiveLink";

type PaginationProps = {
	route: Route;
	totalPages: number;
};

export const Pagination = ({ route, totalPages }: PaginationProps) => {
	return (
		<article
			aria-label="pagination"
			className="mt-12 flex w-full items-center justify-center gap-8"
		>
			{Array.from({ length: totalPages }, (_, i) => (
				// TODO - as do wywalenia?
				<PaginationActiveLink key={i} href={`${route}/${i + 1}` as Route} exact={true}>
					{i + 1}
				</PaginationActiveLink>
			))}
		</article>
	);
};
