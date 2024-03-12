/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	pageExtensions: ["ts", "tsx", "mdx"],
	// TODO - remove later
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
				port: "",
				pathname: "**/**",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: true,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
