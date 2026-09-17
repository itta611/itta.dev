import Image from "next/image";

export default function ReceiptFooter() {
  return (
    <footer className="flex flex-col items-center">
      <p className="py-5">Thank You</p>
      <Image
        src="/images/receipt-barcode.png"
        alt=""
        width={320}
        height={72}
        unoptimized
        className="aspect-[320/72] h-auto w-full max-w-[320px]"
      />
      <p className="py-5 text-center text-[16px] leading-5 sm:text-[28px] sm:leading-[32px]">
        Copyright (C) 2026 Itta Funahashi
      </p>
    </footer>
  );
}
