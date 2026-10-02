import { NextResponse } from "next/server";
import { Resend } from "resend";
import { classTypeLabels, enquirySchema } from "@/lib/enquiry";
import { site } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Check the form and try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot: bots fill hidden fields; succeed silently with no email.
  if (data.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error:
          "Enquiry email is not configured yet. Please message on WhatsApp instead.",
      },
      { status: 503 },
    );
  }

  const to = process.env.ENQUIRY_TO_EMAIL ?? site.email;
  const from =
    process.env.ENQUIRY_FROM_EMAIL ?? "Lakshya Yoga <onboarding@resend.dev>";

  const classLabel = classTypeLabels[data.class_type];
  const subject = `Trial enquiry — ${data.name} (${classLabel})`;
  const text = [
    "New free-trial enquiry from the website",
    "",
    `Name: ${data.name}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Interested in: ${classLabel}`,
    `Goal: ${data.goal}`,
    `Preferred time: ${data.preferred_time}`,
    `Message: ${data.message || "(none)"}`,
    "",
    `Reply on WhatsApp: https://wa.me/${data.phone.replace(/\D/g, "").replace(/^0/, "91")}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      text,
      replyTo: undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send the enquiry. Please try WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry send failed:", err);
    return NextResponse.json(
      { error: "Could not send the enquiry. Please try WhatsApp." },
      { status: 502 },
    );
  }
}
