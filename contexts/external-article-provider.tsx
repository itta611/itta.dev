"use client";

import {
  createContext,
  type FC,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { type Article, getArticles } from "@/fetch-articles";

export const ExternalArticleContext = createContext<Article[] | undefined>(
  undefined,
);

export type ExternalArticleProviderProps = {
  children: ReactNode;
};

export const ExternalArticleProvider: FC<ExternalArticleProviderProps> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setArticles(await getArticles());
    })();
  }, []);

  return (
    <ExternalArticleContext.Provider value={articles}>
      {children}
    </ExternalArticleContext.Provider>
  );
};
