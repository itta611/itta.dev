import ProfileModel from "./profile-model";

export default function ProfileSection() {
  return (
    <section
      aria-labelledby="profile-name"
      className="flex flex-col items-center gap-5 py-8 text-center"
    >
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
      <ProfileModel />
    </section>
  );
}
