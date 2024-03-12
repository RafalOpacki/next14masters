import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <h1 className="mb-4 text-2xl font-extrabold md:text-3xl">{children}</h1>,
		p: ({ children }) => <p className="font-medium">{children}</p>,
		...components,
	};
}
