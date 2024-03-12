import { Navbar } from "@/ui/organisms/Navbar/Navbar";

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 mx-auto h-16 w-screen border-b border-gray-100 backdrop-blur">
			<Navbar />
		</header>
	);
};
