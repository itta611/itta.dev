"use client";
import { RefreshCcwIcon } from "lucide-react";
import { type FC, useState } from "react";
import { Card } from "@/components/card/card";
import { CardTitle } from "@/components/card/card-title";
import { Button } from "@/components/ui/button";
import { articles } from "./articles";

const Article: FC = () => {
  const [currentArticle, setCurrentArticle] = useState(articles[0]);

  const showRandomArticle = () => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    setCurrentArticle(articles[randomIndex]);
  };

  return (
    <Card>
      <CardTitle>{currentArticle.metadata.title}</CardTitle>
      <currentArticle.Component />
      <div className="flex justify-end mt-6">
        <Button size="lg" onClick={showRandomArticle}>
          <RefreshCcwIcon className="size-4" />
          わかった
        </Button>
      </div>
    </Card>
  );
};

export default Article;
