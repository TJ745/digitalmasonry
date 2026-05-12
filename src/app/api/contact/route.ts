import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function sanitizeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #27272a;color:#71717a;font-size:12px;width:110px;vertical-align:top">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #27272a;font-size:14px;color:#e4e4e7">${value}</td>
    </tr>`;
}

function buildHtml(fields: {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
}): string {
  const { name, email, company, budget, service, message } = fields;

  const rows = [
    row("Name", sanitizeHtml(name)),
    row("Email", `<a href="mailto:${sanitizeHtml(email)}" style="color:#6366f1">${sanitizeHtml(email)}</a>`),
    company ? row("Company", sanitizeHtml(company)) : "",
    budget ? row("Budget", sanitizeHtml(budget)) : "",
    service ? row("Service", sanitizeHtml(service)) : "",
  ].join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:40px auto;padding:32px;background:#09090b;border:1px solid #27272a;border-radius:12px">
    <p style="margin:0 0 4px 0;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6366f1">DigitalMasonry</p>
    <h1 style="margin:0 0 28px 0;font-size:22px;font-weight:700;color:#fafafa">New Project Inquiry</h1>

    <table style="width:100%;border-collapse:collapse">${rows}</table>

    <div style="margin-top:24px">
      <p style="margin:0 0 8px 0;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.06em">Message</p>
      <div style="background:#18181b;border-radius:8px;padding:16px;font-size:14px;line-height:1.7;color:#d4d4d8;white-space:pre-wrap">${sanitizeHtml(message)}</div>
    </div>

    <p style="margin:32px 0 0 0;font-size:11px;color:#52525b;border-top:1px solid #27272a;padding-top:16px">
      Sent via the DigitalMasonry contact form
    </p>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo   = process.env.EMAIL_TO;

  if (!emailUser || !emailPass || !emailTo) {
    console.error("[contact] Missing required env vars: EMAIL_USER, EMAIL_PASS, EMAIL_TO");
    return NextResponse.json(
      { error: "Server configuration error. Please contact us directly by email." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, budget, service, message } = body as Record<string, unknown>;

  // Server-side validation — never trust the client
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 422 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }
  if (typeof message !== "string" || message.trim().length < 20) {
    return NextResponse.json({ error: "Message must be at least 20 characters." }, { status: 422 });
  }

  // Length caps to prevent abuse
  if (name.trim().length > 100)    return NextResponse.json({ error: "Name is too long." }, { status: 422 });
  if (email.trim().length > 254)   return NextResponse.json({ error: "Email is too long." }, { status: 422 });
  if (message.trim().length > 2000) return NextResponse.json({ error: "Message is too long." }, { status: 422 });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // STARTTLS on port 587
    auth: { user: emailUser, pass: emailPass },
  });

  const cleanName    = name.trim();
  const cleanEmail   = email.trim();
  const cleanCompany = typeof company === "string" ? company.trim() : undefined;
  const cleanBudget  = typeof budget  === "string" ? budget.trim()  : undefined;
  const cleanService = typeof service === "string" ? service.trim() : undefined;
  const cleanMessage = message.trim();

  try {
    await transporter.sendMail({
      from:    `"DigitalMasonry Website" <${emailUser}>`,
      to:      emailTo,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: `New inquiry from ${cleanName} — DigitalMasonry`,
      html: buildHtml({
        name:    cleanName,
        email:   cleanEmail,
        company: cleanCompany || undefined,
        budget:  cleanBudget  || undefined,
        service: cleanService || undefined,
        message: cleanMessage,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
