import Logo from "@/components/Logo";
import AboutCard from "./cards/about";
import { Button } from "@/components/ui/button";
import { DicesIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto items-center">
      <div className="mx-9 py-9 flex">
        <Logo />
      </div>
      <div className="mx-9 py-8 px-12 bg-gray-800 border rounded-2xl">
        <AboutCard />
        <div className="flex justify-end mt-8">
          <Button size="lg">
            <DicesIcon className="size-4" />
            再表示
          </Button>
        </div>
      </div>
    </div>
  );
}
