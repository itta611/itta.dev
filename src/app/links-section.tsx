function LinkItem({
  name,
  label,
  href,
}: {
  name: string;
  label: string;
  href: string;
}) {
  return (
    <>
      <dt
        className={
          name === "X"
            ? "text-[16px] leading-5 sm:text-[24px] sm:leading-[28px]"
            : undefined
        }
      >
        {name}
      </dt>
      <dd>
        <a
          className="underline decoration-from-font [text-underline-position:from-font]"
          href={href}
        >
          {label}
        </a>
      </dd>
    </>
  );
}

export default function LinksSection() {
  return (
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
        <LinkItem
          name="X"
          label="@IttaFunahashi"
          href="https://x.com/IttaFunahashi"
        />
        <LinkItem
          name="GitHub"
          label="@itta611"
          href="https://github.com/itta611"
        />
        <LinkItem
          name="Instagram"
          label="@nullhashi"
          href="https://www.instagram.com/nullhashi/"
        />
        <LinkItem name="Email" label="me@itta.dev" href="mailto:me@itta.dev" />
      </dl>
    </section>
  );
}
