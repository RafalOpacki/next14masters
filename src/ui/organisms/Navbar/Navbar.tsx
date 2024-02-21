import { type Route } from "next";
import { CategoriesGetMenuItemsDocument, CollectionsGetMenuItemsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { NavbarActiveLink } from "@/ui/molecules/NavbarActiveLink/NavbarActiveLink";
import { SearchBar } from "@/ui/molecules/SearchBar/SearchBar";

const navItems: { href: Route; title: string; exact: boolean }[] = [
	{
		href: "/",
		title: "Home",
		exact: true,
	},
	{
		href: "/products",
		title: "All",
		exact: false,
	},
	{
		href: "/categories",
		title: "Categories",
		exact: false,
	},
	{
		href: "/collections",
		title: "Collections",
		exact: false,
	},
];

export const Navbar = async () => {
	const { categories } = await executeGraphql(CategoriesGetMenuItemsDocument, {});
	const { collections } = await executeGraphql(CollectionsGetMenuItemsDocument, {});

	return (
		<nav className="mx-auto flex max-w-2xl justify-between p-4 lg:max-w-7xl">
			<ul className="flex items-center gap-16">
				{navItems.map(({ href, title, exact }) => {
					return (
						<li key={title}>
							<NavbarActiveLink exact={exact} href={href}>
								{title}
							</NavbarActiveLink>
						</li>
					);
				})}
				{collections.data.map(({ name, slug }) => {
					return (
						<li key={name}>
							<NavbarActiveLink exact={false} href={`/collections/${slug}` as Route}>
								{name}
							</NavbarActiveLink>
						</li>
					);
				})}
				{categories.data.map(({ name, slug }) => {
					return (
						<li key={name}>
							<NavbarActiveLink exact={false} href={`/categories/${slug}` as Route}>
								{name}
							</NavbarActiveLink>
						</li>
					);
				})}
			</ul>
			<SearchBar />
		</nav>
	);
};
