import { NextResponse } from "next/server";

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

export async function POST(request: Request) {
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Discord webhookが設定されていません。" },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "不正なリクエストです。" }, { status: 400 });
  }

  const content =
    typeof payload === "object" && payload !== null && "content" in payload
      ? String((payload as { content?: string }).content ?? "").trim()
      : "";

  if (!content) {
    return NextResponse.json({ error: "内容が空です。" }, { status: 400 });
  }

  if (content.length > 2000) {
    return NextResponse.json({ error: "内容が長すぎます。" }, { status: 400 });
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: "Discordへの送信に失敗しました。", details: errorText },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
