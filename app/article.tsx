"use client";
import { RefreshCcwIcon } from "lucide-react";
import { type FC, useEffect, useRef, useState } from "react";
import { articles } from "@/articles";
import { Card } from "@/components/card/card";
import { CardTitle } from "@/components/card/card-title";
import { Button } from "@/components/ui/button";

const Article: FC = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(0);

  const showRandomArticle = () => {
    if (currentArticleIndex === 0) {
      setCurrentArticleIndex(1);
      return;
    }
    const randomIndex = Math.floor(
      Math.random() * (articles.length - 2 - 1) + 2,
    );
    if (randomIndex >= currentArticleIndex) {
      setCurrentArticleIndex(randomIndex + 1);
    } else {
      setCurrentArticleIndex(randomIndex);
    }
  };

  const currentArticle = articles[currentArticleIndex];

  const Icon = currentArticle.metadata.buttonIcon || RefreshCcwIcon;

  useEffect(() => {
    setCardHeight((cardInnerRef.current?.offsetHeight || 0) + 64);
  }, [currentArticleIndex]);

  return (
    <Card>
      <div
        style={{ height: cardHeight ? `${cardHeight}px` : "auto" }}
        className="transition-all duration-300 relative"
      >
        <div ref={cardInnerRef}>
          <CardTitle>{currentArticle.metadata.title}</CardTitle>
          <currentArticle.Component />
        </div>
        <Button
          size="lg"
          variant="primary"
          onClick={showRandomArticle}
          className="absolute bottom-0 right-0"
        >
          <Icon className="size-4" />
          {currentArticle.metadata?.button || "わかった"}
        </Button>
      </div>
    </Card>
  );
};

export default Article;
