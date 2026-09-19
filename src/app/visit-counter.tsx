import { Redis } from "@upstash/redis";
import { connection } from "next/server";

export default async function VisitCounter() {
  await connection();

  const redis = Redis.fromEnv({ retry: false });
  const count = await redis.incr(
    `itta.dev:visits:${process.env.VERCEL_ENV ?? "development"}`,
  );

  return <p>ID #: {count}</p>;
}
