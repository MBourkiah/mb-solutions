"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from "@/hooks/useConsent";
import { X, Settings, Cookie, Shield } from "lucide-react";
import { type ConsentPreferences } from "@/lib/consent";

/**
 * Premium Cookie Consent Banner
 *
 * Deep Navy Theme mit Cyan/Blue Highlights
 * ✨ Glassmorphism Design
 * ✨ Smooth Animations
 * ✨ DSGVO-konform
 */

export function CookieConsentPremium() {
  const { showBanner, acceptAll, rejectAll, updateConsent } = useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    updateConsent(preferences);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto pointer-events-auto">
            {/* Main Banner */}
            <div className="relative bg-[#0F1629]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Top Glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Cookie-Einstellungen
                      </h3>
                      <p className="text-sm text-gray-400">
                        Ihre Privatsphäre ist uns wichtig
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={rejectAll}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                    aria-label="Banner schließen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6 space-y-3">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und
                    unsere Website zu optimieren. Technisch notwendige Cookies
                    sind immer aktiv.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <Shield className="w-4 h-4" />
                    <span>
                      100% DSGVO-konform · Keine Daten an Dritte ohne Ihre
                      Zustimmung
                    </span>
                  </div>
                </div>

                {/* Detailed Settings */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="space-y-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        {/* Necessary Cookies */}
                        <CookieToggle
                          title="Notwendige Cookies"
                          description="Erforderlich für grundlegende Website-Funktionen. Können nicht deaktiviert werden."
                          enabled={true}
                          disabled={true}
                        />

                        {/* Functional Cookies */}
                        <CookieToggle
                          title="Funktionale Cookies"
                          description="Ermöglichen erweiterte Funktionen wie Theme-Wahl und Spracheinstellungen."
                          enabled={preferences.functional}
                          onToggle={() => togglePreference("functional")}
                        />

                        {/* Analytics Cookies */}
                        <CookieToggle
                          title="Analyse-Cookies"
                          description="Helfen uns zu verstehen, wie Besucher die Website nutzen (anonymisiert)."
                          enabled={preferences.analytics}
                          onToggle={() => togglePreference("analytics")}
                        />

                        {/* Marketing Cookies */}
                        <CookieToggle
                          title="Marketing-Cookies"
                          description="Werden für personalisierte Werbung und Tracking verwendet."
                          enabled={preferences.marketing}
                          onToggle={() => togglePreference("marketing")}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
                  >
                    Alle akzeptieren
                  </button>

                  {showDetails ? (
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/15 transition-all duration-300"
                    >
                      Auswahl speichern
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowDetails(true)}
                      className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Einstellungen
                    </button>
                  )}

                  <button
                    onClick={rejectAll}
                    className="flex-1 px-6 py-3 border-2 border-white/10 text-gray-300 rounded-xl font-medium hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                  >
                    Nur notwendige
                  </button>
                </div>

                {/* Legal Links */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 text-center">
                    Weitere Informationen finden Sie in unserer{" "}
                    <a
                      href="/datenschutz"
                      className="underline hover:text-cyan-400 transition-colors"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    und{" "}
                    <a
                      href="/cookie-richtlinie"
                      className="underline hover:text-cyan-400 transition-colors"
                    >
                      Cookie-Richtlinie
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================
// COOKIE TOGGLE COMPONENT
// ============================================
interface CookieToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  disabled?: boolean;
  onToggle?: () => void;
}

function CookieToggle({
  title,
  description,
  enabled,
  disabled = false,
  onToggle,
}: CookieToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h4 className="font-semibold text-sm mb-1 text-white">{title}</h4>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      <button
        onClick={onToggle}
        disabled={disabled}
        className={`w-11 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${
          enabled
            ? "bg-gradient-to-r from-cyan-500 to-blue-500"
            : "bg-white/10"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        aria-label={`${title} umschalten`}
      >
        <motion.div
          animate={{ x: enabled ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-4 h-4 bg-white rounded-full shadow-lg"
        />
      </button>
    </div>
  );
}
