/**
 * Simple In-Memory Rate Limiter
 *
 * Verhindert Spam durch IP-basiertes Rate Limiting.
 * Für Production: Upgrade zu Redis (Upstash) empfohlen.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-Memory Store (nur für kleine Sites ok)
const limitMap = new Map<string, RateLimitEntry>();

// Cleanup alle 10 Minuten
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of limitMap.entries()) {
    if (now > value.resetTime) {
      limitMap.delete(key);
    }
  }
}, 10 * 60 * 1000);

export interface RateLimitConfig {
  limit: number;      // Max requests
  window: number;     // Time window in milliseconds
}

export function rateLimit(config: RateLimitConfig = { limit: 5, window: 60000 }) {
  return {
    check: (identifier: string): { success: boolean; remaining: number; reset: number } => {
      const now = Date.now();
      const entry = limitMap.get(identifier);

      if (!entry || now > entry.resetTime) {
        // Neues Zeitfenster
        limitMap.set(identifier, {
          count: 1,
          resetTime: now + config.window
        });
        return {
          success: true,
          remaining: config.limit - 1,
          reset: now + config.window
        };
      }

      if (entry.count >= config.limit) {
        // Limit erreicht
        return {
          success: false,
          remaining: 0,
          reset: entry.resetTime
        };
      }

      // Increment counter
      entry.count++;
      limitMap.set(identifier, entry);

      return {
        success: true,
        remaining: config.limit - entry.count,
        reset: entry.resetTime
      };
    }
  };
}

// Helper: IP-Adresse aus Request extrahieren
export function getIP(request: Request): string {
  // Vercel forwarded-for header
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  // Fallback
  return request.headers.get('x-real-ip') || 'unknown';
}
