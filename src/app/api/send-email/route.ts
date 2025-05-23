import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to add CORS headers
function corsResponse(data: any, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return corsResponse({});
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { to, subject, html, smtpConfig } = data;

    // Validate required fields
    if (!to || !subject || !html || !smtpConfig) {
      return corsResponse({ error: "Missing required fields" }, 400);
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.auth.user,
        pass: smtpConfig.auth.pass,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Denysenko Clinic" <${smtpConfig.auth.user}>`,
      to,
      subject,
      html,
    });

    return corsResponse({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return corsResponse({ error: "Failed to send email" }, 500);
  }
}
