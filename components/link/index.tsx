import { AnchorHTMLAttributes, FC } from "react";

const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
	href,
	children,
	...props
}) => {
	return (
		<a
			href={href}
			{...props}
			className="inline-flex items-center gap-x-2 text-gray-200 border-b border-gray-400 border-dashed hover:opacity-70 transition [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
		>
			{children}
		</a>
	);
};

export default Link;
