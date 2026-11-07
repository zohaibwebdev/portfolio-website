import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔧 TODO: integrate with Resend / Nodemailer / SendGrid here
    // Example with Resend:
    // await resend.emails.send({
    //   from: "portfolio@yourdomain.com",
    //   to: "you@example.com",
    //   subject: `New message from ${name}`,
    //   text: `${message}\n\nFrom: ${email}`,
    // });

    console.log("New contact message:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}