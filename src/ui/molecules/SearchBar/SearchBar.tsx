"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

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
			className="
            w-1/4 
            overflow-hidden 
            rounded-lg 
            border-2 
            border-gray-600 
            bg-transparent 
            px-4 
            py-2 
            placeholder-gray-600 
            shadow-gray-500
            outline-none 
            focus:border-gray-800 
            focus:shadow-md 
            dark:border-gray-400
            dark:placeholder-gray-200 
            dark:shadow-gray-200 
            dark:focus:border-gray-200"
			placeholder="Search..."
			value={query}
		/>
	);
};
