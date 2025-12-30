import * as v from "valibot";
import type { Article } from "..";

const noteApiSchema = v.object({
  data: v.object({
    contents: v.array(
      v.object({
        name: v.string(),
        publishAt: v.string(),
        noteUrl: v.pipe(v.string(), v.url()),
        eyecatch: v.pipe(v.string(), v.url()),
      }),
    ),
  }),
});

const noteApiEndpoint =
  "https://note.com/api/v2/creators/itta611/contents?kind=note&page=1&per=20";

export const fetchNoteArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch(noteApiEndpoint);
    const query = v.parse(noteApiSchema, await response.json());

    const contents = query.data.contents;

    const articles: Article[] = contents.map((content) => ({
      source: "note.com",
      url: content.noteUrl,
      title: content.name,
      postedAt: new Date(content.publishAt),
      ogImageUrl: content.eyecatch,
    }));

    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};
