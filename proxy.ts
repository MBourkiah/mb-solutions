import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Global Proxy für Security Headers
 *
 * Schützt vor:
 * - XSS (Cross-Site Scripting)
 * - Clickjacking
 * - MIME-Type Sniffing
 * - Content Injection
 *
 * Wird für ALLE Requests ausgeführt.
 */

export function proxy(request: NextRequest) {
  // Clone response
  const response = NextResponse.next()

  // Security Headers
  const headers = {
    // Verhindert XSS Attacks
    'X-Content-Type-Options': 'nosniff',

    // Verhindert Clickjacking
    'X-Frame-Options': 'DENY',

    // XSS Protection (für ältere Browser)
    'X-XSS-Protection': '1; mode=block',

    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Permissions Policy (Feature-Policy)
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',

    // Strict Transport Security (HTTPS only)
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',

    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live", // Next.js braucht unsafe-eval
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://vercel.live",
      "frame-ancestors 'none'",
    ].join('; '),
  }

  // Alle Headers setzen
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

// Matcher: Für welche Routes der Proxy läuft
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.webp$).*)',
  ],
}
