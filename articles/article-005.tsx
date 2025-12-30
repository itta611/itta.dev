import type { FC } from "react";

const Article005: FC = () => {
  return (
    <div className="space-y-2">
      <ul className="-indent-7 pl-7 space-y-2">
        <li>
          耳を動かす
          <br />
          中２のときに突然できるようになった。耳よりも後頭部にシワを寄せることを意識するのがコツです。
        </li>
        <li>
          手笛
          <br />
          指を組んで「お祈り」の形を作って、２本の親指の隙間に息を吹き込むと音が鳴ります。空洞の大きさを変えると音程が変えられるらしいですが、私は親指が短いため１オクターブ分の音域が出せず、曲を演奏できません。残念です。
        </li>
        <li>
          ドヤ顔
          <br />
          ドヤ顔ができます。
        </li>
      </ul>
    </div>
  );
};

export default Article005;

export const metadata = {
  title: "特技",
};
