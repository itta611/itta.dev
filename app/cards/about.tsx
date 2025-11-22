import { AwardIcon, CakeIcon, HammerIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { type FC, Fragment } from "react";
import { Card } from "@/components/card/card";
import { CardTitle } from "@/components/card/card-title";

const AboutCard: FC = () => {
	const birthday = new Date(2008, 5, 11);
	const age = Math.floor(
		(Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
	);

	const AboutItems = [
		{
			icon: CakeIcon,
			text: `2008/6/11 (${age} さい)`,
		},
		{
			icon: MapPinIcon,
			text: "Aichi, Japan",
		},
		{
			icon: HammerIcon,
			text: "TypeScript / React / Next.js / Blender",
		},
		{
			icon: AwardIcon,
			text: "2025 未踏ジュニア\n2021 U-22 プログラミング・コンテスト 経済産業大臣賞\n2020 U-22 プログラミング・コンテスト 経済産業省商務政策局長賞",
		},
	];
	return (
		<Card>
			<CardTitle>About</CardTitle>
			<div className="flex justify-between items-start">
				<div className="flex flex-col">
					<span className="font-bold mb-6 text-xl">
						船橋一汰 / Itta Funahashi{" "}
						<span className="text-slate-400 text-lg">(@itta611)</span>
					</span>
					<div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-4 text-sm">
						{AboutItems.map((item) => (
							<Fragment key={item.text}>
								<item.icon size={18} className="text-teal-200" />
								<span className="font-semibold whitespace-pre-line">
									{item.text}
								</span>
							</Fragment>
						))}
					</div>
				</div>
				<Image
					src="/icon.png"
					alt="Icon"
					height={512}
					width={512}
					className="w-56 h-56 -m-6.5 -mt-8"
				/>
			</div>
		</Card>
	);
};

export default AboutCard;
