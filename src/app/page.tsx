import Image from "next/image";
import BioSection from "./bio-section";
import LinksSection from "./links-section";
import ProfileSection from "./profile-section";
import ReceiptFooter from "./receipt-footer";
import ReceiptHeader from "./receipt-header";
import VisitInfo from "./visit-info";

function Divider() {
  return (
    <div className="relative h-[6px] w-full" aria-hidden="true">
      <Image
        src="/images/receipt-divider.svg"
        alt=""
        width={518}
        height={8}
        className="absolute -top-[0.75px] h-[7.5px] w-full"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 pt-6 sm:pt-[60px]">
      <article className="h-fit w-full max-w-[680px] overflow-hidden border border-[#e5e7eb] bg-white px-6 text-[18px] leading-[22px] shadow-[0_0_40px_-5px_rgba(0,0,0,0.1)] sm:px-[80px] sm:text-[28px] sm:leading-[32px]">
        <ReceiptHeader />
        <Divider />
        <VisitInfo />
        <Divider />
        <ProfileSection />
        <Divider />
        <LinksSection />
        <Divider />
        <BioSection />
        <Divider />
        <ReceiptFooter />
      </article>
    </main>
  );
}
