import { type Route } from "next";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CategoriesGetMenuItemsDocument, CollectionsGetMenuItemsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/executeGraphql";
import { NavbarMenuItem } from "@/ui/molecules/NavbarMenuItem/NavbarMenuItem";
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
	const { categories } = await executeGraphql({ query: CategoriesGetMenuItemsDocument });
	const { collections } = await executeGraphql({ query: CollectionsGetMenuItemsDocument });

	return (
		<div className="mx-auto flex h-full max-w-2xl items-center justify-between lg:max-w-7xl">
			<nav className="h-full">
				<ul className="flex h-full items-center gap-8">
					{navItems.map(({ href, title, exact }) => {
						return <NavbarMenuItem key={title} href={href} title={title} exact={exact} />;
					})}
					{collections.data.map(({ name, slug }) => {
						return (
							<NavbarMenuItem
								key={name}
								href={`/collections/${slug}` as Route}
								title={name}
								exact={false}
							/>
						);
					})}
					{categories.data.map(({ name, slug }) => {
						return (
							<NavbarMenuItem
								key={name}
								href={`/categories/${slug}` as Route}
								title={name}
								exact={false}
							/>
						);
					})}
				</ul>
			</nav>
			<div className="flex items-center gap-8">
				<SearchBar />
				{/* <CartButton /> */}
				<div>
					{/* TODO - osobny komponent na to */}
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
				</div>
			</div>
		</div>
	);
};
