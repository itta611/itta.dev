"use client";

import { useEffect, useRef, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState<number | string>("…");
  const request = useRef<Promise<number> | null>(null);

  useEffect(() => {
    request.current ??= fetch("/api/visits", { method: "POST" }).then(
      async (response) => {
        if (!response.ok) throw new Error("Failed to record visit");
        const data: { count: number } = await response.json();
        return data.count;
      },
    );
    request.current.then(setCount).catch(() => setCount("—"));
  }, []);

  return <p>ID #: {count}</p>;
}
