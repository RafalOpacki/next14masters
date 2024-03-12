import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				slide: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				slide: "slide .3s ease",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
// eslint-disable-next-line import/no-default-export
export default config;
