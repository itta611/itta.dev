import * as v from "valibot";
import type { Article } from "..";

const zennArticlesSchema = v.object({
  articles: v.array(
    v.object({
      title: v.string(),
      slug: v.string(),
      path: v.string(),
      published_at: v.string(),
    }),
  ),
});

const zennArticleSchema = v.object({
  article: v.object({ og_image_url: v.string() }),
});

const zennApiEndpoint = "https://zenn.dev/api/articles?username=itta&count=100";

export const fetchZennArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch(zennApiEndpoint);
    const jsonResponse = await response.json();

    const { articles: zennArticles } = v.parse(
      zennArticlesSchema,
      jsonResponse,
    );

    const ogImageUrls = await Promise.all(
      zennArticles.map(async (article) => {
        const res = await fetch(
          `https://zenn.dev/api/articles/${article.slug}`,
        );
        const json = await res.json();
        const articleResponse = v.parse(zennArticleSchema, json);
        const ogImageUrl = articleResponse.article.og_image_url;
        return ogImageUrl;
      }),
    );

    const articles: Article[] = zennArticles.map((a, i) => ({
      source: "zenn.dev",
      title: a.title,
      url: `https://zenn.dev${a.path}`,
      postedAt: new Date(a.published_at),
      ogImageUrl: ogImageUrls[i],
    }));

    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};
