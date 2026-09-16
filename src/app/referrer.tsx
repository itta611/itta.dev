"use client";

import { useEffect, useState } from "react";

export default function Referrer() {
  const [referrer, setReferrer] = useState<string | null>(null);

  useEffect(() => {
    setReferrer(
      document.referrer ? new URL(document.referrer).hostname : "None",
    );
  }, []);

  return (
    <p className="text-right break-all">Referrer: {referrer ?? "\u00a0"}</p>
  );
}
