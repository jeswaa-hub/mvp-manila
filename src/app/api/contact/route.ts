import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const { fullName, phoneNumber, email, message, recaptchaToken } = await request.json();

    if (!fullName || !phoneNumber || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const phoneDigits = phoneNumber.replace(/\D/g, "");
    if (phoneDigits.length > 11 || phoneDigits.length === 0) {
      return NextResponse.json(
        { error: "Phone number must be 11 digits or fewer." },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaToken && recaptchaSecret) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success || verifyData.score < 0.5) {
        return NextResponse.json(
          { error: "Failed reCAPTCHA verification. Please try again." },
          { status: 403 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "reCAPTCHA verification is not configured." },
        { status: 500 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY || "";
    if (!apiKey || apiKey.startsWith("your_")) {
      return NextResponse.json(
        { error: "Email service is not configured. Please set BREVO_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const brevo = new BrevoClient({ apiKey, timeoutInSeconds: 10 });

    const safeFullName = escapeHtml(fullName);
    const safePhoneNumber = escapeHtml(phoneNumber);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const htmlContent = `
      <html>
        <body style="margin: 0; padding: 0; background: #edf2f7; font-family: Arial, Helvetica, sans-serif; color: #10233f;">
          <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent;">
            New contact inquiry received from ${safeFullName} via the MVPManila website.
          </div>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background: #edf2f7; padding: 28px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; margin: 0 auto; border-collapse: separate; border-spacing: 0;">
                  <tr>
                    <td style="padding: 0 0 16px; text-align: center;">
                      <img src="https://mvp-manila.vercel.app/images/logo1.jpg" alt="MVPManila Security Agency" style="width: 60px; height: auto; display: inline-block; margin-bottom: 10px;" />
                      <br />
                      <span style="display: inline-block; border-radius: 999px; background: #d8b423; color: #07172d; padding: 7px 14px; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                        MVPManila Security Agency
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #d7deea; border-radius: 22px; overflow: hidden;">
                  <tr>
                    <td style="background: linear-gradient(135deg, #07172d 0%, #0b274a 100%); padding: 32px 36px 28px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 0;">
                            <p style="margin: 0 0 10px; color: #d8b423; font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;">
                              Website Contact Inquiry
                            </p>
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; line-height: 1.2; font-weight: 700;">
                              New contact form submission
                            </h1>
                            <p style="margin: 14px 0 0; color: #c7d3e6; font-size: 15px; line-height: 1.7;">
                              A new message has been submitted through the MVPManila website. Review the sender details below and respond directly if follow-up is needed.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px 28px 18px; background: #ffffff;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="padding: 0 0 18px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td style="padding: 18px 20px; border: 1px solid #dce4ef; border-radius: 16px; background: #f8fafc;">
                                  <p style="margin: 0 0 6px; color: #607089; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                                    Full Name
                                  </p>
                                  <p style="margin: 0; color: #10233f; font-size: 18px; line-height: 1.5; font-weight: 700;">
                                    ${safeFullName}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 18px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td width="50%" valign="top" style="padding: 0 8px 0 0;">
                                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                      <td style="padding: 18px 20px; border: 1px solid #dce4ef; border-radius: 16px; background: #f8fafc;">
                                        <p style="margin: 0 0 6px; color: #607089; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                                          Email Address
                                        </p>
                                        <p style="margin: 0; font-size: 15px; line-height: 1.7;">
                                          <a href="mailto:${safeEmail}" style="color: #0b53ce; text-decoration: none; font-weight: 700;">
                                            ${safeEmail}
                                          </a>
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td width="50%" valign="top" style="padding: 0 0 0 8px;">
                                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                      <td style="padding: 18px 20px; border: 1px solid #dce4ef; border-radius: 16px; background: #f8fafc;">
                                        <p style="margin: 0 0 6px; color: #607089; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                                          Phone Number
                                        </p>
                                        <p style="margin: 0; font-size: 15px; line-height: 1.7;">
                                          <a href="tel:${safePhoneNumber}" style="color: #10233f; text-decoration: none; font-weight: 700;">
                                            ${safePhoneNumber}
                                          </a>
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 10px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td style="padding: 22px 22px 20px; border: 1px solid #dce4ef; border-radius: 16px; background: #f8fafc;">
                                  <p style="margin: 0 0 12px; color: #607089; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;">
                                    Message
                                  </p>
                                  <p style="margin: 0; color: #34445b; font-size: 15px; line-height: 1.85;">
                                    ${safeMessage}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 28px 28px; background: #ffffff;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="border-top: 1px solid #e4eaf2; padding-top: 18px;">
                            <p style="margin: 0; color: #6a7b92; font-size: 13px; line-height: 1.7; text-align: center;">
                              Sent via the MVPManila website contact form
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const result = await brevo.transactionalEmails.sendTransacEmail({
      subject: `New Contact Form Submission from ${fullName}`,
      htmlContent,
      sender: {
        name: process.env.BREVO_SENDER_NAME || "MVPManila Security Agency",
        email: process.env.BREVO_SENDER_EMAIL || "noreply@mvpmanila.com",
      },
      to: [
        {
          email: process.env.CONTACT_RECIPIENT_EMAIL || "jeswaa1810@gmail.com",
          name: "MVPManila Admin",
        },
      ],
      replyTo: {
        name: fullName,
        email: email,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      data: result,
    });
  } catch (error: unknown) {
    console.error("Error sending email via Brevo:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        details: message,
      },
      { status: 500 }
    );
  }
}
