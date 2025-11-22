import type { FC, ReactNode } from "react";

interface CardTitleProps {
	children: ReactNode;
}

const CardTitle: FC<CardTitleProps> = ({ children }) => {
	return (
		<div className="font-bold relative text-3xl mb-6 inline-block before:absolute before:-left-2 before:-right-2 before:bottom-0 before:h-4 before:rounded-xs before:bg-gray-700 before:transform">
			<span className="relative z-10">{children}</span>
		</div>
	);
};

export { CardTitle };
