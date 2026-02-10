import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = Netlify.env.get("TELEGRAM_TOKEN");
  const chatId = Netlify.env.get("TELEGRAM_CHAT_ID");

  if (!token || !chatId) {
    return new Response(
      JSON.stringify({ error: "Telegram configuration is missing" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { name, level, goal, contact } = await req.json();

  const text = [
    "New class request:",
    `Name: ${name}`,
    `Level: ${level}`,
    `Goal: ${goal}`,
    `Contact: ${contact}`,
  ].join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  );

  if (!telegramResponse.ok) {
    const errorData = await telegramResponse.json().catch(() => ({}));
    return new Response(
      JSON.stringify({ error: "Failed to send Telegram message", details: errorData }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
