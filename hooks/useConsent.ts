"use client";

import { useEffect, useState } from "react";
import {
  type ConsentData,
  type ConsentPreferences,
  type ConsentCategory,
  getConsent,
  saveConsent,
  hasConsent,
  isCategoryEnabled,
  acceptAll,
  rejectAll,
  clearConsent,
} from "@/lib/consent";

export function useConsent() {
  // Initialize state with lazy initializer to avoid setting state in effect
  const [consent, setConsent] = useState<ConsentData | null>(() => {
    if (typeof window !== "undefined") {
      return getConsent();
    }
    return null;
  });

  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window !== "undefined") {
      return !hasConsent();
    }
    return false;
  });

  // Listen for consent updates (no initial state setting needed)
  useEffect(() => {
    const handleConsentUpdate = (e: CustomEvent) => {
      setConsent(e.detail);
      setShowBanner(!e.detail);
    };

    window.addEventListener(
      "consentUpdate",
      handleConsentUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        "consentUpdate",
        handleConsentUpdate as EventListener
      );
    };
  }, []);

  // Update consent preferences
  const updateConsent = (preferences: ConsentPreferences) => {
    saveConsent(preferences);
    setConsent(getConsent());
    setShowBanner(false);
  };

  // Accept all cookies
  const handleAcceptAll = () => {
    acceptAll();
    setConsent(getConsent());
    setShowBanner(false);
  };

  // Reject all non-essential cookies
  const handleRejectAll = () => {
    rejectAll();
    setConsent(getConsent());
    setShowBanner(false);
  };

  // Clear consent (for settings page)
  const handleClearConsent = () => {
    clearConsent();
    setConsent(null);
    setShowBanner(true);
  };

  // Check if category is enabled
  const isEnabled = (category: ConsentCategory): boolean => {
    return isCategoryEnabled(category);
  };

  return {
    consent,
    showBanner,
    updateConsent,
    acceptAll: handleAcceptAll,
    rejectAll: handleRejectAll,
    clearConsent: handleClearConsent,
    isEnabled,
    hasConsent: !!consent,
  };
}
