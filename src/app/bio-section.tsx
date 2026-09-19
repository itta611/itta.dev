"use client";

import { useState } from "react";

function BioItem({
  year,
  description,
  failed = false,
}: {
  year: number;
  description: string;
  failed?: boolean;
}) {
  return (
    <>
      <dt className={failed ? "opacity-50" : undefined}>{year}</dt>
      <dd className={failed ? "opacity-50" : undefined}>{description}</dd>
    </>
  );
}

export default function BioSection() {
  const [showFailures, setShowFailures] = useState(false);

  return (
    <section aria-labelledby="bio-heading" className="flex flex-col gap-5 py-8">
      <div className="relative flex items-center justify-center">
        <h2
          id="bio-heading"
          className="bg-black p-1 text-center text-white sm:w-[49px]"
        >
          Bio
        </h2>
        <label className="absolute right-0 flex cursor-pointer items-center gap-[10px] text-[16px] leading-5 sm:w-[94px] sm:text-[24px] sm:leading-[28px]">
          <input
            type="checkbox"
            checked={showFailures}
            onChange={(event) => setShowFailures(event.target.checked)}
            className="peer sr-only"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 18 18"
            fill="none"
            className="size-[14px] shrink-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 sm:size-[18px]"
          >
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
            />
            {showFailures ? (
              <path d="m4 9 3 3 7-7" stroke="currentColor" strokeWidth="2" />
            ) : null}
          </svg>
          Failed
        </label>
      </div>
      <dl className="grid grid-cols-[max-content_minmax(0,1fr)] gap-3 sm:grid-cols-[63px_minmax(0,1fr)] sm:text-[24px]">
        <BioItem year={2008} description="誕生" />
        <BioItem
          year={2020}
          description="U-22 プログラミング・コンテスト 経済産業省商務政策局長賞"
        />
        <BioItem
          year={2021}
          description="U-22 プログラミング・コンテスト 経済産業大臣賞"
        />
        {showFailures ? (
          <BioItem year={2022} description="未踏IT人材発掘・育成事業 二次不採択" failed />
        ) : null}
        {showFailures ? (
          <BioItem year={2022} description="孫正義育英財団 二次選考不合格" failed />
        ) : null}
        {showFailures ? (
          <BioItem year={2025} description="未踏IT人材発掘・育成事業 書類不採択" failed />
        ) : null}
        <BioItem
          year={2025}
          description="未踏ジュニア スーパークリエータ認定"
        />
        {showFailures ? (
          <BioItem year={2026} description="孫正義育英財団 一次選考不合格" failed />
        ) : null}
      </dl>
    </section>
  );
}
