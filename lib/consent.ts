/**
 * GDPR/DSGVO Consent Management
 * Privacy-first cookie & tracking consent
 */

export type ConsentCategory = "necessary" | "functional" | "analytics" | "marketing";

export interface ConsentPreferences {
  necessary: boolean; // Always true, required for site functionality
  functional: boolean; // Enhanced features (theme, language)
  analytics: boolean; // Privacy-friendly analytics (e.g., Plausible)
  marketing: boolean; // Third-party tracking (Google Analytics, FB Pixel)
}

export interface ConsentData {
  version: string;
  timestamp: number;
  preferences: ConsentPreferences;
}

const CONSENT_KEY = "gdpr-consent";
const CONSENT_VERSION = "1.0";

/**
 * Get current consent preferences from localStorage
 */
export function getConsent(): ConsentData | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const data: ConsentData = JSON.parse(stored);

    // Check if version matches (invalidate old consents)
    if (data.version !== CONSENT_VERSION) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to localStorage
 */
export function saveConsent(preferences: ConsentPreferences): void {
  if (typeof window === "undefined") return;

  const data: ConsentData = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    preferences: {
      ...preferences,
      necessary: true, // Always enabled
    },
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    // Trigger custom event for consent change
    window.dispatchEvent(new CustomEvent("consentUpdate", { detail: data }));
  } catch (error) {
    console.error("Failed to save consent:", error);
  }
}

/**
 * Check if user has given consent
 */
export function hasConsent(): boolean {
  return getConsent() !== null;
}

/**
 * Check if specific category is enabled
 */
export function isCategoryEnabled(category: ConsentCategory): boolean {
  const consent = getConsent();
  if (!consent) return false;
  return consent.preferences[category];
}

/**
 * Accept all cookies
 */
export function acceptAll(): void {
  saveConsent({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: true,
  });
}

/**
 * Reject all non-essential cookies
 */
export function rejectAll(): void {
  saveConsent({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });
}

/**
 * Clear all consent data
 */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent("consentUpdate", { detail: null }));
}

/**
 * Get consent age in days
 */
export function getConsentAge(): number | null {
  const consent = getConsent();
  if (!consent) return null;

  const ageInMs = Date.now() - consent.timestamp;
  return Math.floor(ageInMs / (1000 * 60 * 60 * 24));
}

/**
 * Check if consent needs renewal (older than 12 months)
 */
export function needsRenewal(): boolean {
  const age = getConsentAge();
  if (age === null) return true;
  return age > 365;
}

/**
 * Execute callback only if category is enabled
 */
export function withConsent(
  category: ConsentCategory,
  callback: () => void
): void {
  if (isCategoryEnabled(category)) {
    callback();
  }
}

/**
 * Load external script only with consent
 */
export function loadScript(
  src: string,
  category: ConsentCategory,
  attributes?: Record<string, string>
): void {
  withConsent(category, () => {
    if (typeof window === "undefined") return;

    // Check if script already exists
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    // Add custom attributes
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }

    document.head.appendChild(script);
  });
}

/**
 * Example: Load Google Analytics only with consent
 */
export function initializeGoogleAnalytics(measurementId: string): void {
  loadScript(
    `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
    "analytics"
  );

  withConsent("analytics", () => {
    if (typeof window === "undefined") return;

    // Google Analytics global dataLayer (not in TypeScript definitions)
    // @ts-expect-error - dataLayer is added by Google Analytics script
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: unknown[]) {
      // @ts-expect-error - dataLayer is Google Analytics global
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", measurementId, {
      anonymize_ip: true, // GDPR-compliant
      cookie_flags: "SameSite=None;Secure",
    });
  });
}
