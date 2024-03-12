"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

const baseClassName =
	"h-8 w-fill overflow-hidden rounded-lg border bg-gray-50 px-4 py-2 outline-none focus:shadow-md";
const lightModeClassName =
	"border-gray-300 placeholder-gray-300 shadow-gray-500 focus:border-gray-500";
const darkModeClassName =
	"dark:border-gray-400 dark:placeholder-gray-200 dark:shadow-gray-200 dark:focus:border-gray-200";

export const SearchBar = () => {
	const router = useRouter();
	const [query, setQuery] = useState("");
	const debouncedValue = useDebounce(query);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	useEffect(() => {
		// TODO - wywalic ten drugi warunek - póki co tak to dziala, muszą być 2 znaki
		if (debouncedValue && debouncedValue.length >= 2) {
			router.push(`/search?query=${debouncedValue}`);
		}
	}, [router, debouncedValue]);

	return (
		<input
			type="search"
			onChange={handleChange}
			className={clsx(baseClassName, lightModeClassName, darkModeClassName)}
			placeholder="Search..."
			value={query}
		/>
	);
};
