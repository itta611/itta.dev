import type { FC } from "react";
import DinamicShadowImage from "@/components/dinamic-shadow-image";

const Article003: FC = () => {
  return (
    <div className="text-center flex flex-col items-center gap-y-4">
      <DinamicShadowImage
        src="/face.png"
        alt="顔の写真"
        className="mx-auto mb-3"
        width={180}
        height={180}
      />
      <div className="text-lg mb-2">ヤッホー。</div>
    </div>
  );
};

export default Article003;

export const metadata = {
  title: "顔",
};
