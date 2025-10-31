import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter using "Send on Behalf" permissions
    // Authenticate with: craig.solis@frostbyte-inc.com (your personal account)
    // Send from: services@frostbyte-inc.com (using your permissions)
    // Send to: craig.solis@frostbyte-inc.com (your inbox)
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_AUTH_EMAIL, // craig.solis@frostbyte-inc.com
        pass: process.env.SMTP_AUTH_PASSWORD, // Your app password
      },
      authMethod: "LOGIN", // Office 365 requirement
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // Email content - send from services@frostbyte-inc.com to craig.solis@frostbyte-inc.com
    const mailOptions = {
      from: `"FrostByte Services" <${process.env.SMTP_FROM_EMAIL}>`, // From: services@frostbyte-inc.com
      to: process.env.SMTP_TO_EMAIL, // To: craig.solis@frostbyte-inc.com
      replyTo: email, // Reply goes to form submitter
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #16ffd8; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #16ffd8; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 20px; font-size: 12px; color: #666;">
            <p>This email was sent from the contact form on frostbyte-inc.com/dev/contact</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
            <p><strong>Reply to:</strong> ${email}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}

        ---
        This email was sent from the contact form on frostbyte-inc.com/dev/contact
        Sent at: ${new Date().toLocaleString()}
        Reply to: ${email}
      `,
      // Additional headers for "Send on Behalf"
      headers: {
        "X-MS-Exchange-Organization-MessageDirectionality": "Originating",
        "X-Originating-IP": "[127.0.0.1]",
      },
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      {
        message: "Email sent successfully",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
