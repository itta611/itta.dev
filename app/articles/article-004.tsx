import type { FC } from "react";
import Link from "@/components/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Article004: FC = () => {
  return (
    <div className="mt-2">
      何でも聴くマンです。特に界隈曲と名のつくものは全部好きです。
      界隈曲で一番好きなのはこれ →{" "}
      <Link
        href="https://youtu.be/ok7UX3utzvI?si=qYt6Tlqh9IaU1Zyx"
        target="_blank"
      >
        .
      </Link>
      <div className="py-6">
        <div className="font-bold text-lg">曲をオススメする</div>
        <p className="text-gray-400 text-sm mt-0.5">
          オススメの曲とかあったら教えて下さい。絶対聴きに行きます。あとミセス以外で。
        </p>
        <div className="flex mt-3">
          <Input placeholder="曲名、YouTubeのURLなどを入力" />
          <Button className="ml-2">送信</Button>
        </div>
      </div>
    </div>
  );
};

export default Article004;

export const metadata = {
  title: "好きな音楽",
};
