import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="flex h-20 w-screen flex-col items-center justify-center border-t border-gray-100 bg-gray-50 p-4 dark:border-gray-400 dark:bg-transparent">
			<nav>
				<ul className="text-xs text-blue-500 dark:text-blue-200">
					<li className="hover:text-blue-700">
						<Link href="/regulations">Regulations</Link>
					</li>
				</ul>
			</nav>
			<p className="mt-3 text-xs text-gray-400 dark:text-gray-200">
				© <time>{new Date().getFullYear()} </time>
				<a
					className="underline hover:text-gray-600"
					href="https://www.linkedin.com/in/rafalopacki/"
				>
					Rafał Opacki
				</a>
			</p>
		</footer>
	);
};
