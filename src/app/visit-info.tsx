import CurrentTime from "./current-time";

export default function VisitInfo() {
  return (
    <div className="flex justify-between gap-2 py-5 text-[16px] leading-5 whitespace-nowrap min-[400px]:text-[18px] min-[400px]:leading-[22px] sm:px-5 sm:text-[28px] sm:leading-[32px]">
      <p>ID #: 82</p>
      <CurrentTime />
    </div>
  );
}
