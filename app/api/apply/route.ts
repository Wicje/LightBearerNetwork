import { NextResponse } from "next/server";

const NOTION_VERSION = "2026-03-11";

function richText(value: unknown) {
  const text = typeof value === "string" ? value.slice(0, 2000) : "";
  return [{ type: "text" as const, text: { content: text } }];
}

function select(value: unknown) {
  return typeof value === "string" && value.trim() ? { name: value.trim() } : undefined;
}

async function notifyTelegram(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    console.warn("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set. Skipping Telegram ping.");
    return;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) {
      console.error("Telegram notify failed:", res.status, await res.text());
    }
  } catch (error) {
    console.error("Telegram notify error:", error);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const notionToken = process.env.NOTION_TOKEN;
    const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;

    if (!notionToken || !dataSourceId) {
      console.error("NOTION_TOKEN / NOTION_DATA_SOURCE_ID not set.");
      return NextResponse.json(
        { success: false, error: "Application destination is not configured." },
        { status: 500 }
      );
    }

    const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
    const arms: string[] = Array.isArray(data.interestedArm) ? data.interestedArm : [];

    const properties: Record<string, unknown> = {};
    properties["Name"] = { title: [{ type: "text", text: { content: fullName || "Unnamed applicant" } }] };
    if (data.phone) properties["Phone"] = { phone_number: String(data.phone) };
    if (data.email) properties["Email"] = { email: String(data.email) };
    if (data.location) properties["Location"] = { rich_text: richText(data.location) };
    if (data.socialMedia) properties["Social Media"] = { rich_text: richText(data.socialMedia) };
    const status = select(data.status);
    if (status) properties["Status"] = { select: status };
    if (arms.length) properties["Interested Arms"] = { multi_select: arms.map((name: string) => ({ name })) };
    if (data.businessSkill) properties["Business Skill"] = { rich_text: richText(data.businessSkill) };
    const income = select(data.income);
    if (income) properties["Monthly Income"] = { select: income };
    if (data.building) properties["Currently Building"] = { rich_text: richText(data.building) };
    if (data.goals) properties["Goals"] = { rich_text: richText(data.goals) };
    properties["Declaration"] = { checkbox: Boolean(data.declaration) };
    const source = select(data.pathway);
    if (source) properties["Source"] = { select: source };
    properties["Stage"] = { select: { name: "New" } };

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionToken}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { type: "data_source_id", data_source_id: dataSourceId },
        properties,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Notion create page failed:", response.status, body);
      return NextResponse.json(
        { success: false, error: "Failed to save application to Notion." },
        { status: 500 }
      );
    }

    await notifyTelegram(
      [
        "New Light Bearers Network application",
        `Name: ${fullName || "-"}`,
        `Phone: ${data.phone || "-"}`,
        `Email: ${data.email || "-"}`,
        `Location: ${data.location || "-"}`,
        `Arms: ${arms.join(", ") || "-"}`,
        `Income: ${data.income || "-"}`,
        `Source: ${data.pathway || "-"}`,
      ].join("\n")
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
