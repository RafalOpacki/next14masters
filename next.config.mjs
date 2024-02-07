/** @type {import('next').NextConfig} */

const nextConfig = {
	// TODO - remove later
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "demo.vercel.store",
				port: "",
				pathname: "**/**",
			},
		],
	},
};

export default nextConfig;
