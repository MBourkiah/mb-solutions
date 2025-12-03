import { NextRequest, NextResponse } from "next/server";
import { rateLimit, getIP } from "@/lib/rate-limit";

/**
 * Contact Form API Route
 *
 * POST /api/contact
 *
 * Handles contact form submissions with validation and logging.
 *
 * Features:
 * - Input validation (required fields, email format, message length)
 * - Security checks (max length limits)
 * - Rate limiting (5 requests per minute per IP)
 * - Error handling with descriptive messages
 * - Request logging for debugging
 * - CORS headers for cross-origin requests
 *
 * Future enhancements:
 * - Email sending via Nodemailer, SendGrid, or Resend
 * - Database storage (Prisma, MongoDB)
 * - Spam protection (reCAPTCHA)
 */

// Rate limiter: 5 requests per minute per IP
const limiter = rateLimit({ limit: 5, window: 60000 });

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Validation helper functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Rate limiting check
    const ip = getIP(request);
    const rateLimitResult = limiter.check(ip);

    if (!rateLimitResult.success) {
      const resetIn = Math.ceil((rateLimitResult.reset - Date.now()) / 1000);
      return NextResponse.json(
        {
          success: false,
          error: `Zu viele Anfragen. Bitte versuchen Sie es in ${resetIn} Sekunden erneut.`,
        },
        {
          status: 429,
          headers: {
            'Retry-After': resetIn.toString(),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
          }
        }
      );
    }

    // Parse request body
    const body: ContactFormData = await request.json();

    // Extract and sanitize fields
    const name = sanitizeInput(body.name || "");
    const email = sanitizeInput(body.email || "");
    const message = sanitizeInput(body.message || "");

    // Development: Log submission (remove in production or use proper logger)
    if (process.env.NODE_ENV === "development") {
      console.log("📧 Contact form submission received:", {
        name,
        email: email.replace(/(.{2}).*(@.*)/, "$1***$2"), // Partially hide email
        messageLength: message.length,
        timestamp: new Date().toISOString(),
      });
    }

    // Validation: Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Bitte füllen Sie alle Pflichtfelder aus.",
        },
        { status: 400 }
      );
    }

    // Validation: Name length
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Der Name muss zwischen 2 und 100 Zeichen lang sein.",
        },
        { status: 400 }
      );
    }

    // Validation: Email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        },
        { status: 400 }
      );
    }

    // Validation: Email length
    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          error: "Die E-Mail-Adresse ist zu lang.",
        },
        { status: 400 }
      );
    }

    // Validation: Message length
    if (message.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          error: "Die Nachricht darf maximal 5000 Zeichen lang sein.",
        },
        { status: 400 }
      );
    }

    // ============================================
    // TODO: Add email sending logic here
    // ============================================
    /*
    Example with Resend:

    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'MB-Solutions <noreply@mb-solutions.biz>',
      to: 'info@mb-solutions.biz',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // ============================================
    // TODO: Add database storage here
    // ============================================
    /*
    Example with Prisma:

    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message,
        createdAt: new Date(),
      },
    });
    */

    // Success: Log in development only
    if (process.env.NODE_ENV === "development") {
      const duration = Date.now() - startTime;
      console.log(`✅ Contact form processed successfully in ${duration}ms`);
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Ihre Nachricht wurde erfolgreich versendet.",
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          // Restrict CORS to your domain only (update after domain is live)
          "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "https://mb-solutions.biz",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    // Production-safe error logging
    if (process.env.NODE_ENV === "development") {
      console.error("❌ Contact form error:", error);
    }

    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: "Ein interner Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests (CORS preflight)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "https://mb-solutions.biz",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
