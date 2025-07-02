import Logo from "@/components/Logo";
import AboutCard from "./cards/about";
import { Button } from "@/components/ui/button";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { DicesIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[800px] px-9 mx-auto items-center">
      <div className="py-9 flex">
        <Logo />
      </div>
      <div className="py-8 px-12 bg-gray-800 border rounded-2xl">
        <AboutCard />
        <div className="flex justify-end mt-8">
          <Button size="lg">
            <DicesIcon className="size-4" />
            再表示
          </Button>
        </div>
      </div>
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
  );
}
