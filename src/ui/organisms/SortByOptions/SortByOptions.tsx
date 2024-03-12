"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type ChangeEventHandler } from "react";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

const options = [
	{
		dataTestId: "sort-by-price",
		value: "PRICE.ASC",
		text: "Sort by price (low to high)",
	},
	{
		dataTestId: "sort-by-price",
		value: "PRICE.DESC",
		text: "Sort by price (high to low)",
	},
	{
		dataTestId: "sort-by-rating",
		value: "RATING.ASC",
		text: "Sort by rating (low to high)",
	},
	{
		dataTestId: "sort-by-rating",
		value: "RATING.DESC",
		text: "Sort by rating (high to low)",
	},
];

export const SortByOptions = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const initialOrderBy = searchParams.get("orderBy");
	const initialOrder = searchParams.get("order");

	const [orderBy, setOrderBy] = useState<ProductSortBy | null>(
		initialOrderBy as ProductSortBy | null,
	);
	const [order, setOrder] = useState<SortDirection | null>(initialOrder as SortDirection | null);

	const handleSortChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const value = event.target.value;
		const [orderBy, order] = value.split(".");
		setOrderBy(orderBy as ProductSortBy);
		setOrder(order as SortDirection);
		router.push(`?order=${order}&orderBy=${orderBy}`);
	};

	const value = `${orderBy}.${order}`;

	return (
		<div>
			<select
				value={value}
				onChange={handleSortChange}
				className="block cursor-pointer rounded-md border-gray-500 p-2 shadow-sm focus:border-blue-300"
			>
				<option value="" disabled>
					Sort By:
				</option>
				{options.map(({ dataTestId, text, value }) => {
					return (
						<option key={value} data-testid={dataTestId} value={value}>
							{text}
						</option>
					);
				})}
			</select>
		</div>
	);
};
