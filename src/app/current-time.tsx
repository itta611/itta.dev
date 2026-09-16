"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("sv-SE", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export default function CurrentTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <time dateTime={now?.toISOString()}>
      {now ? formatter.format(now) : "\u00a0"}
    </time>
  );
}
