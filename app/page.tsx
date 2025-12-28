import {
	IconBrandDiscord,
	IconBrandGithub,
	IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Card } from "@/components/card/card";
import { CardTitle } from "@/components/card/card-title";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import AboutCard from "./cards/about";
import WorksCard from "./cards/works";

export default function Home() {
	const cards = {
		About: <AboutCard />,
		Works: <WorksCard />,
	};

	return (
		<div className="max-w-[800px] px-9 mx-auto items-center">
			<div className="py-9 flex">
				<Logo />
			</div>
			<Card>
				<CardTitle>制作物</CardTitle>
				{cards.Works}
				{/* <AboutCard /> */}
			</Card>
			<div className="absolute bottom-6 [&_button]:size-10 space-x-2">
				<Link href="https://twitter.com/IttaFunahashi" target="_blank">
					<Button>
						<IconBrandX className="size-5" />
					</Button>
				</Link>
				<Link href="https://github.com/itta611" target="_blank">
					<Button>
						<IconBrandGithub className="size-5" />
					</Button>
				</Link>
				<Button>
					<IconBrandDiscord className="size-5" />
				</Button>
			</div>
		</div>
	);
}
