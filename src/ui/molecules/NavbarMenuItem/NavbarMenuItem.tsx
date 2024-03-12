import { type Route } from "next";
import { NavbarActiveLink } from "@/ui/molecules/NavbarActiveLink/NavbarActiveLink";

type NavbarMenuItemProps = {
	title: string;
	href: Route;
	exact?: boolean;
};

export const NavbarMenuItem = ({ title, href, exact = true }: NavbarMenuItemProps) => {
	return (
		<li className="h-full">
			<NavbarActiveLink exact={exact} href={href}>
				{title}
			</NavbarActiveLink>
		</li>
	);
};
