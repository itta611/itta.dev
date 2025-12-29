import type { FC } from "react";
import Link from "@/components/link";

const Article007: FC = () => {
  return (
    <div>
      <ul>
        <li>ストレートネックなところ</li>
        <li>顔の側面のほくろ</li>
        <li>
          短い両手の親指（
          <Link
            href="https://ja.wikipedia.org/wiki/%E7%9F%AD%E6%8C%87%E7%97%87"
            target="_blank"
          >
            短指症
          </Link>
          ）
        </li>
      </ul>
    </div>
  );
};

export default Article007;

export const metadata = {
  title: "チャームポイント",
};
