import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import type { FC } from "react";
import Link from "@/components/link";

const Article002: FC = () => {
  const works = [
    {
      title: "Gen5",
      description:
        "自然言語とGUIのハイブリッドなインターフェースによるAI画像編集エディタ",
      imageSrc: "/gen5.png",
      link: "https://gen5.app",
    },
    {
      title: "Chokoku CAD",
      description: "彫刻のように「削る」操作で造形する3Dモデリングソフト",
      imageSrc: "/chokokucad.png",
      link: "https://chokokucad.itta.dev",
    },
  ];

  return (
    <div className="flex max-md:flex-col items-start gap-8">
      {works.map((work) => (
        <div className="basis-0 grow" key={work.title}>
          <Image
            src={work.imageSrc}
            alt={work.title}
            className="rounded-xl aspect-[360/240] mb-3"
            width={360}
            height={240}
          />
          <div className="font-bold mb-1">{work.title}</div>
          <div className="text-sm text-slate-400">{work.description}</div>
          <div className="text-right">
            <Link
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <IconExternalLink />
              開く
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article002;

export const metadata = {
  title: "制作物",
};
