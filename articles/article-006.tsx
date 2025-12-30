import Link from "next/link";
import { type FC, useContext, useState } from "react";
import DinamicShadowImage from "@/components/dinamic-shadow-image";
import { ExternalArticleContext } from "@/contexts/external-article-provider";
import type { Article } from "@/fetch-articles";

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  const [ratio, setRatio] = useState<number>(1);

  return (
    <div
      key={article.url}
      className="mt-4 hover:opacity-90 active:scale-[98%] transition"
    >
      <Link href={article.url} target="_blank" rel="noopener noreferrer">
        {article.ogImageUrl ? (
          <DinamicShadowImage
            src={article.ogImageUrl}
            alt={article.title}
            sizes="auto"
            width={140 * ratio}
            height={140}
            className="h-[140px]"
            onLoad={(img) => {
              setRatio(
                img.currentTarget.naturalWidth /
                  img.currentTarget.naturalHeight,
              );
            }}
          />
        ) : (
          <div className="w-[160px] h-[140px] bg-white rounded-lg" />
        )}
        <div
          className="text-ellipsis whitespace-nowrap overflow-hidden mt-2"
          style={{ width: 140 * ratio }}
        >
          {article.title}
        </div>
        <div className="text-gray-400 text-sm flex items-center">
          {article.postedAt.toLocaleDateString("ja-JP")}
          <div className="w-[1px] h-[14px] bg-gray-500 mx-2" />
          {article.source}
        </div>
      </Link>
    </div>
  );
};

const Article006: FC = () => {
  const articles = useContext(ExternalArticleContext) || [];

  return (
    <div>
      <div className="flex gap-6 flex-wrap">
        {articles.slice(0, 5).map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Article006;

export const metadata = {
  title: "最近書いた記事",
};
