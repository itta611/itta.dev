import Image from "next/image";
import { Fragment } from "react";
import CurrentTime from "./current-time";

const links = [
  { name: "X", label: "@IttaFunahashi", href: "https://x.com/IttaFunahashi" },
  { name: "GitHub", label: "@itta611", href: "https://github.com/itta611" },
  {
    name: "Instagram",
    label: "@nullhashi",
    href: "https://www.instagram.com/nullhashi/",
  },
  { name: "Email", label: "me@itta.dev", href: "mailto:me@itta.dev" },
];

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

        <Divider />

        <div className="flex justify-between gap-2 py-5 text-[16px] leading-5 whitespace-nowrap min-[400px]:text-[18px] min-[400px]:leading-[22px] sm:px-5 sm:text-[28px] sm:leading-[32px]">
          <p>ID #: 82</p>
          <CurrentTime />
        </div>

        <Divider />

        <section
          aria-labelledby="profile-name"
          className="flex flex-col items-center gap-5 py-8 text-center"
        >
          <Image
            src="/images/itta-portrait.png"
            alt="アイコン"
            width={234}
            height={214}
            preload
            unoptimized
            className="h-[214px] w-[234px] object-cover"
          />
          <div className="flex flex-col items-center gap-3">
            <h1
              id="profile-name"
              className="text-[22px] leading-[27px] sm:text-[32px] sm:leading-[37px]"
            >
              Itta Funahashi / 船橋 一汰
            </h1>
            <p className="text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]">
              Student, Frontend Engineer, UI Designer
            </p>
          </div>
        </section>

        <Divider />

        <section
          aria-labelledby="links-heading"
          className="flex flex-col items-center gap-5 py-8"
        >
          <h2
            id="links-heading"
            className="bg-black p-1 text-center text-white sm:w-[74px]"
          >
            Links
          </h2>
          <dl className="grid w-full grid-cols-[minmax(0,1fr)_max-content] gap-x-2 gap-y-3 sm:grid-cols-[minmax(0,1fr)_199px]">
            {links.map((link) => (
              <Fragment key={link.name}>
                <dt
                  className={
                    link.name === "X"
                      ? "text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]"
                      : undefined
                  }
                >
                  {link.name}
                </dt>
                <dd>
                  <a
                    className="underline decoration-from-font [text-underline-position:from-font]"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </dd>
              </Fragment>
            ))}
          </dl>
        </section>

        <Divider />

        <section
          aria-labelledby="bio-heading"
          className="flex flex-col gap-5 py-8"
        >
          <div className="relative flex items-center justify-center">
            <h2
              id="bio-heading"
              className="bg-black p-1 text-center text-white sm:w-[49px]"
            >
              Bio
            </h2>
            <span className="absolute right-0 flex items-center gap-[10px] text-[16px] leading-5 sm:w-[94px] sm:text-[24px] sm:leading-[28px]">
              <span
                aria-hidden="true"
                className="size-[14px] border-2 border-black sm:size-[18px]"
              />
              Failed
            </span>
          </div>
          <dl className="grid grid-cols-[max-content_minmax(0,1fr)] gap-3 sm:grid-cols-[63px_minmax(0,1fr)] sm:grid-rows-[32px_60px_32px_32px]">
            <dt>2008</dt>
            <dd className="flex items-center font-[family-name:var(--font-biz-ud-gothic)] text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]">
              誕生
            </dd>
            <dt>2020</dt>
            <dd className="text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]">
              <span className="text-[18px] leading-[22px] sm:text-[28px] sm:leading-[32px]">
                U-22{" "}
              </span>
              プログラミング・コンテスト 経済産業省商務政策局長賞
            </dd>
            <dt>2021</dt>
            <dd className="text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]">
              <span className="text-[18px] leading-[22px] sm:text-[28px] sm:leading-[32px]">
                U-22{" "}
              </span>
              プログラミング・コンテスト 経済産業大臣賞
            </dd>
            <dt>2025</dt>
            <dd className="flex items-center font-['Arial_Narrow',Arial,sans-serif] text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]">
              未踏ジュニア スーパークリエータ認定
            </dd>
          </dl>
        </section>

        <Divider />

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
      </article>
    </main>
  );
}
