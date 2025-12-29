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
    if (currentArticle === articles[0]) {
      setCurrentArticle(articles[1]);
      return;
    }
    const randomIndex = Math.floor(Math.random() * (articles.length - 2) + 2);
    setCurrentArticle(articles[randomIndex]);
  };

  const Icon = currentArticle.metadata.buttonIcon || RefreshCcwIcon;

  return (
    <Card>
      <CardTitle>{currentArticle.metadata.title}</CardTitle>
      <currentArticle.Component />
      <div className="flex justify-end mt-6">
        <Button size="lg" onClick={showRandomArticle}>
          <Icon className="size-4" />
          {currentArticle.metadata?.button || "わかった"}
        </Button>
      </div>
    </Card>
  );
};

export default Article;
