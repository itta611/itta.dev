import { FC, Fragment } from "react";
import { CakeIcon, CodeIcon, HammerIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

const AboutCard: FC = () => {
  const AboutItems = [
    {
      icon: CakeIcon,
      text: "2008/6/11 (16さい)",
    },
    {
      icon: MapPinIcon,
      text: "Aichi, Japan",
    },
    {
      icon: CodeIcon,
      text: "Web Frontend, UI Design",
    },
    {
      icon: HammerIcon,
      text: "TypeScript / React / Next.js / Blender",
    },
  ];
  return (
    <>
      <div className="font-bold relative text-3xl mb-6 inline-block before:absolute before:-left-2 before:-right-2 before:bottom-0 before:h-4 before:rounded-xs before:bg-gray-700 before:transform">
        <span className="relative z-10">About</span>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-bold mb-6">
            船橋一汰 / Itta Funahashi{" "}
            <span className="text-slate-400">(@itta611)</span>
          </span>
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-4 text-sm">
            {AboutItems.map((item, index) => (
              <Fragment key={index}>
                <item.icon size={18} className="text-teal-200" />
                <span className="font-semibold">{item.text}</span>
              </Fragment>
            ))}
          </div>
        </div>
        <Image
          src="/icon.png"
          alt="Icon"
          height={512}
          width={512}
          className="w-58 h-58 -m-6.5 -mt-8"
        />
      </div>
    </>
  );
};

export default AboutCard;
