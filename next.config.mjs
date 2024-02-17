/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	// TODO - remove later
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
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
		];
	},
};

export default nextConfig;
