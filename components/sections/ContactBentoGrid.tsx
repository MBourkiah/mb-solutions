"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  User,
  Building2,
  ArrowRight,
  Shield,
  Clock,
  Star,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

/**
 * CONTACT BENTO GRID - Unique Asymmetric Layout
 *
 * Design Philosophy:
 * - Asymmetric 12-column CSS Grid (NOT centered single column like homepage)
 * - Card-based hierarchy with floating glassmorphism
 * - Large form card + supporting info cards
 * - More personal/conversational (less terminal aesthetic)
 *
 * Grid Structure (Desktop):
 * ┌──────────────────┬────────┐
 * │                  │ Card 2 │
 * │   FORM (8 col)   │ (4 col)│
 * │   (2 rows)       ├────────┤
 * │                  │ Card 3 │
 * │                  │ (4 col)│
 * ├──────────────────┴────────┤
 * │   Card 4 (Full Width)     │
 * └───────────────────────────┘
 */

export function ContactBentoGrid() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!formData.privacy) {
      setStatus("error");
      setErrorMessage("Bitte akzeptieren Sie die Datenschutzerklärung");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Fehler beim Senden");

      setStatus("success");
      setFormData({ name: "", email: "", company: "", service: "", message: "", privacy: false });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ein Fehler ist aufgetreten");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const quickMethods = [
    { icon: Phone, label: "Anrufen", value: "+49 123 456 7890", href: "tel:+491234567890", color: "green" },
    { icon: Mail, label: "Email", value: "info@mb-solutions.de", href: "mailto:info@mb-solutions.de", color: "blue" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat starten", href: "https://wa.me/491234567890", color: "cyan" },
  ];

  const trustMetrics = [
    { icon: Clock, label: "Antwortzeit", value: "<24h", color: "cyan" },
    { icon: Shield, label: "DSGVO", value: "100%", color: "green" },
    { icon: Star, label: "Bewertung", value: "5.0", color: "yellow" },
  ];

  const faqQuick = [
    { q: "Wie schnell antwortet ihr?", a: "Innerhalb von 24 Stunden" },
    { q: "Ist die Beratung kostenlos?", a: "Ja, das Erstgespräch ist immer kostenlos" },
    { q: "Welche Services bietet ihr?", a: "Web, IT-Services & Marketing" },
    { q: "Wo seid ihr tätig?", a: "Köln & deutschlandweit remote" },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050812]" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.6) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12">

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto">

          {/* CARD 1: Main Form - Large (8 columns x 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 lg:row-span-2"
          >
            <div className="relative h-full p-8 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/[0.1] to-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">

              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-6 pb-6 border-b border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-green-400">Verfügbar für neue Projekte</span>
              </div>

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
                  Projekt anfragen
                </h2>
                <p className="text-gray-400">
                  Füllen Sie das Formular aus – wir melden uns innerhalb von 24h zurück.
                </p>
              </div>

              {/* Success State */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                  <p className="text-gray-400 max-w-md">
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="Max Mustermann"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="max@firma.de"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="text-sm font-semibold text-gray-300 mb-2 block">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="webdev">Webentwicklung</option>
                      <option value="it">IT-Services</option>
                      <option value="automation">Automation</option>
                      <option value="marketing">Marketing</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-semibold text-gray-300 mb-2 block">
                      Nachricht *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500/50"
                    />
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      Ich habe die{" "}
                      <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme zu. *
                    </span>
                  </label>

                  {/* Error Message */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                    >
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{errorMessage}</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Nachricht senden
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    🔒 Verschlüsselt & DSGVO-konform
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* CARD 2: Quick Contact Methods (4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="h-full p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">
              <h3 className="text-xl font-black text-white mb-4">Direkt Kontakt</h3>
              <p className="text-sm text-gray-400 mb-6">
                Bevorzugen Sie direkten Kontakt? Wählen Sie Ihren Kanal:
              </p>

              <div className="space-y-3">
                {quickMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-${method.color}-500/10 border border-${method.color}-500/20 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${method.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white">{method.label}</div>
                        <div className="text-xs text-gray-500">{method.value}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Trust Metrics (4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="h-full p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-black text-white mb-6">Vertrauen Sie uns</h3>

              <div className="space-y-4">
                {trustMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.label} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${metric.color}-500/10 border border-${metric.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 text-${metric.color}-400`} />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-white">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CARD 4: FAQ Quick (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12"
          >
            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-black text-white">Häufige Fragen</h3>
                </div>
                <Link
                  href="#faq"
                  className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  Alle FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {faqQuick.map((faq, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="text-sm font-semibold text-white mb-2">{faq.q}</div>
                    <div className="text-xs text-gray-500">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
