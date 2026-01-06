"use client";

import Script from "next/script";
import { useConsent } from "@/hooks/useConsent";

interface PlausibleAnalyticsProps {
  domain: string; // Your domain (e.g., "example.com")
  enabled?: boolean; // Enable/disable analytics
}

/**
 * Privacy-First Analytics with Plausible
 * - No cookies
 * - GDPR compliant by default
 * - Lightweight (<1KB)
 * - Open source
 *
 * Alternative to Google Analytics
 *
 * Setup:
 * 1. Sign up at plausible.io
 * 2. Add your domain
 * 3. Use this component in your layout
 */
export function PlausibleAnalytics({
  domain,
  enabled = true,
}: PlausibleAnalyticsProps) {
  const { isEnabled } = useConsent();

  // Only load if analytics consent is given
  const shouldLoad = enabled && isEnabled("analytics");

  if (!shouldLoad) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

/**
 * Self-Hosted Plausible Analytics
 * Use this if you host Plausible yourself
 */
interface SelfHostedPlausibleProps {
  domain: string;
  scriptUrl: string; // Your self-hosted script URL
  enabled?: boolean;
}

export function SelfHostedPlausible({
  domain,
  scriptUrl,
  enabled = true,
}: SelfHostedPlausibleProps) {
  const { isEnabled } = useConsent();
  const shouldLoad = enabled && isEnabled("analytics");

  if (!shouldLoad) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src={scriptUrl}
      strategy="afterInteractive"
    />
  );
}

/**
 * Track custom events
 * Usage: trackEvent("signup", { plan: "pro" })
 */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number>
) {
  if (typeof window === "undefined") return;

  // Plausible is loaded via external script and attached to window
  // @ts-expect-error - window.plausible is added by Plausible Analytics script
  if (window.plausible) {
    // @ts-expect-error - window.plausible signature not in TypeScript definitions
    window.plausible(eventName, { props });
  }
}

/**
 * Track page views manually (for SPA navigation)
 */
export function trackPageView(url?: string) {
  if (typeof window === "undefined") return;

  // @ts-expect-error - window.plausible is added by Plausible Analytics script
  if (window.plausible) {
    // @ts-expect-error - window.plausible signature not in TypeScript definitions
    window.plausible("pageview", { u: url || window.location.href });
  }
}

/**
 * useAnalytics Hook
 * Provides analytics tracking functions
 */
export function useAnalytics() {
  const { isEnabled } = useConsent();
  const analyticsEnabled = isEnabled("analytics");

  const track = (
    eventName: string,
    props?: Record<string, string | number>
  ) => {
    if (!analyticsEnabled) return;
    trackEvent(eventName, props);
  };

  const pageView = (url?: string) => {
    if (!analyticsEnabled) return;
    trackPageView(url);
  };

  return {
    track,
    pageView,
    enabled: analyticsEnabled,
  };
}
