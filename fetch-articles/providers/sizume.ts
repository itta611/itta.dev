import * as v from "valibot";
import type { Article } from "..";

const sizumeApiSchema = v.array(
  v.object({
    result: v.object({
      data: v.object({
        posts: v.array(
          v.object({
            id: v.number(),
            title: v.string(),
            firstPublishedAt: v.object({
              time: v.pipe(
                v.number(),
                v.transform((time) => new Date(time)),
              ),
            }),
            slug: v.string(),
          }),
        ),
      }),
    }),
  }),
);

const sizumeApiEndpointUrl =
  "https://sizu.me/api/trpc/postList.index?batch=1&input=%7B%220%22%3A%7B%22userId%22%3A40026%2C%22pageNumber%22%3A1%7D%7D";

export const fetchSizumeArticles = async (): Promise<Article[]> => {
  const res = await fetch(sizumeApiEndpointUrl);
  const json = await res.json();
  const result = v.parse(sizumeApiSchema, json);
  const articles: Article[] = result[0].result.data.posts.map((post) => ({
    source: "sizu.me",
    title: post.title,
    url: `https://sizu.me/itta/posts/${post.slug}`,
    postedAt: post.firstPublishedAt.time,
    ogImageUrl:
      "https://static.sizu.me/api/og-image/4e4cba9fa9fb?avatarUrl=https%3A%2F%2Fr2.sizu.me%2Fusers%2F40026%2Favatar.png%3Fv%3D1744447572466&theme=user&username=itta",
  }));
  return articles;
};
