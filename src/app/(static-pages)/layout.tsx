import { type PropsWithChildren } from "react";

export default function StaticPagesLayout({ children }: PropsWithChildren) {
	return <section className="my-20 max-w-2xl lg:max-w-7xl">{children}</section>;
}
