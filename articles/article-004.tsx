"use client";

import { type FC, type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Article004: FC = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();

    if (!trimmed) {
      setErrorMessage("内容を入力してください。");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/discord-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: trimmed }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error ?? "送信に失敗しました。");
        setStatus("error");
        return;
      }

      setMessage("");
      setStatus("success");
    } catch {
      setErrorMessage("送信に失敗しました。");
      setStatus("error");
    }
  };

  return (
    <div className="mt-2">
      何でも聴きたいマンです。特に界隈曲が好き。
      <div className="py-6">
        <div className="font-bold text-lg">曲をオススメする</div>
        <p className="text-gray-400 text-sm mt-0.5">
          ミセス以外でオススメの曲とかあったら教えて下さい。絶対聴きに行きます。
        </p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="flex">
            <Input
              placeholder="曲名、YouTubeのURLなど"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                  setErrorMessage("");
                }
              }}
              disabled={status === "sending"}
            />
            <Button className="ml-2" disabled={status === "sending"}>
              {status === "sending" ? "送信中..." : "送信"}
            </Button>
          </div>
          {status === "success" && (
            <p className="text-sm text-green-400 mt-2">送信しました。</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Article004;

export const metadata = {
  title: "好きな音楽",
};
