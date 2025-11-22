import { RefreshCcwIcon } from "lucide-react";
import type { FC, ReactNode } from "react";
import { Button } from "../ui/button";

interface CardProps {
	children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
	return (
		<div className="py-8 px-12 bg-gray-800 border rounded-2xl">
			{children}
			<div className="flex justify-end mt-8">
				<Button size="lg">
					<RefreshCcwIcon className="size-4" />
					再表示
				</Button>
			</div>
		</div>
	);
};

export { Card };
