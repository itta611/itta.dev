import type { Metadata } from "next";
import { BIZ_UDGothic } from "next/font/google";
import "./globals.css";

const bizUDGothic = BIZ_UDGothic({
  variable: "--font-biz-ud-gothic",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Itta.dev | Itta Funahashi",
  description:
    "Itta Funahashi / 船橋 一汰 — Student, Frontend Engineer, UI Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${bizUDGothic.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
