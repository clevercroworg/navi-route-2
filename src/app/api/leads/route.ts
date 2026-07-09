import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message, source, service } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields: Name and Phone are required." },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("LEAD API CONFIG ERROR: Missing SMTP_USER or SMTP_PASS environment variables.");
      return NextResponse.json(
        { error: "Service temporarily unavailable due to missing configurations." },
        { status: 500 }
      );
    }

    try {
      console.log("Attempting to send lead email via SMTP...");
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      const info = await transporter.sendMail({
        from: `"Nauti Route Lead" <${process.env.SMTP_USER}>`,
        to: process.env.TO_EMAIL || "manojvg900@gmail.com",
        subject: `New Lead: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #1D3D9E; border-radius: 12px; max-width: 500px;">
            <h2 style="color: #FF6B00; margin-top: 0;">🆕 New Lead Received</h2>
            <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Interest:</strong> ${service || "General Inquiry"}</p>
            <p><strong>Message/Requirements:</strong><br />${message || "Interested in services"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
            <p style="font-size: 11px; color: #777;"><strong>Source:</strong> ${source || "Nauti Route Contact Form"}</p>
          </div>
        `,
      });
      console.log("Email sent successfully:", info.messageId);
    } catch (mailError) {
      console.error("SMTP ERROR:", mailError);
      return NextResponse.json(
        { error: "Could not send notification. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("LEAD API ERROR:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
