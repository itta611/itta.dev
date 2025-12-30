import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ExternalArticleProvider } from "@/contexts/external-article-provider";
import Article from "./article";

export default function Home() {
  return (
    <ExternalArticleProvider>
      <div className="max-w-[800px] px-9 mx-auto items-center">
        <div className="py-9 flex">
          <Logo />
        </div>
        <Article />
        <div className="absolute bottom-6 [&_button]:size-10 space-x-2">
          <Link href="https://twitter.com/IttaFunahashi" target="_blank">
            <Button>
              <IconBrandX className="size-5" />
            </Button>
          </Link>
          <Link href="https://github.com/itta611" target="_blank">
            <Button>
              <IconBrandGithub className="size-5" />
            </Button>
          </Link>
          <Button>
            <IconBrandDiscord className="size-5" />
          </Button>
        </div>
      </div>
    </ExternalArticleProvider>
  );
}
