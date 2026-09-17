import Image from "next/image";

export default function ReceiptHeader() {
  return (
    <header className="flex justify-center pb-10 pt-12 sm:pb-[60px] sm:pt-[80px]">
      <Image
        src="/images/itta-logo.png"
        alt="Itta.dev"
        width={389}
        height={92}
        preload
        unoptimized
        className="aspect-[389/92] h-auto w-full max-w-[389px]"
      />
    </header>
  );
}
