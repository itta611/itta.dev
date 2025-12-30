"use server";

import { fetchNoteArticles } from "./providers/note";
import { fetchSizumeArticles } from "./providers/sizume";
import { fetchZennArticles } from "./providers/zenn";

export type Article = {
  source: "zenn.dev" | "note.com" | "sizu.me";
  url: string;
  title: string;
  postedAt: Date;
  ogImageUrl: string | undefined;
};

export const getArticles = async () => {
  const articles = await Promise.all([
    fetchZennArticles(),
    fetchNoteArticles(),
    fetchSizumeArticles(),
  ]).then((articles) => articles.flat());

  articles.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());

  return articles;
};
