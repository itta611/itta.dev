import Image from "next/image";

export default function ProfileSection() {
  return (
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
  );
}
