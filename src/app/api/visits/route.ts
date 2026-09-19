import { Redis } from "@upstash/redis";

export async function POST() {
  const redis = Redis.fromEnv({ retry: false });
  const count = await redis.incr(
    `itta.dev:visits:${process.env.VERCEL_ENV ?? "development"}`,
  );

  return Response.json({ count });
}
