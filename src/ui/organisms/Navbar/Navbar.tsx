import { NavbarActiveLink } from "@/ui/molecules/NavbarActiveLink/NavbarActiveLink";

export const Navbar = () => {
	return (
		<nav className="mx-auto max-w-2xl p-4 lg:max-w-7xl">
			<ul className="flex flex-row items-center gap-16">
				<li>
					<NavbarActiveLink href="/">Home</NavbarActiveLink>
				</li>
				<li>
					<NavbarActiveLink exact={false} href="/products">
						All
					</NavbarActiveLink>
				</li>
			</ul>
		</nav>
	);
};
