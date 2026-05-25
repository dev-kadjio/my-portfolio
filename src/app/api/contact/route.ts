import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalize(payload: Partial<ContactPayload>): ContactPayload {
  return {
    name: (payload.name ?? "").trim(),
    email: (payload.email ?? "").trim(),
    subject: (payload.subject ?? "").trim(),
    message: (payload.message ?? "").trim(),
  };
}

function validate(payload: ContactPayload) {
  const errors: Record<string, string> = {};

  if (payload.name.length < 2) errors.name = "INVALID_NAME";
  if (!isEmail(payload.email)) errors.email = "INVALID_EMAIL";
  if (payload.subject.length < 3) errors.subject = "INVALID_SUBJECT";
  if (payload.message.length < 10) errors.message = "INVALID_MESSAGE";

  return errors;
}

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export async function POST(req: Request) {
  try {
    const locale = (await cookies()).get("NEXT_LOCALE")?.value === "en" ? "en" : "fr";
    const json = (await req.json()) as Partial<ContactPayload>;
    const payload = normalize(json);
    const errors = validate(payload);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const gmailUser = requireEnv("GMAIL_USER");
    const gmailAppPassword = requireEnv("GMAIL_APP_PASSWORD");
    const contactTo = process.env.CONTACT_TO ?? gmailUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const subject =
      locale === "fr"
        ? `[Portfolio] Nouveau message — ${payload.subject}`
        : `[Portfolio] New message — ${payload.subject}`;

    const text =
      locale === "fr"
        ? [
            "Bonjour,",
            "",
            "Vous avez reçu un nouveau message via le formulaire de contact de votre portfolio.",
            "",
            `Nom: ${payload.name}`,
            `Email: ${payload.email}`,
            "",
            "Message:",
            payload.message,
            "",
            "—",
            "Répondez directement à cet email pour contacter la personne (Reply-To configuré).",
          ].join("\n")
        : [
            "Hello,",
            "",
            "You have received a new message via your portfolio contact form.",
            "",
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            "",
            "Message:",
            payload.message,
            "",
            "—",
            "Reply directly to this email to contact the sender (Reply-To is configured).",
          ].join("\n");

    await transporter.sendMail({
      from: gmailUser,
      to: contactTo,
      replyTo: payload.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

