"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Check,
  Search,
  Calendar,
  FileText,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  Phone,
  Building2,
  User,
  MapPin,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

/**
 * MB-Solutions Premium Contact Page
 *
 * Premium Kontaktseite im neuen Dark Design:
 * ✨ Dark Theme (#0A0E27) mit Cyan-Akzenten
 * ✨ Glassmorphism effects
 * ✨ Premium spacing & animations
 * ✨ Vollständiges Kontaktformular mit Validierung
 * ✨ Timeline & FAQ Sections
 */

// ========================================
// 📝 CONTENT DATA
// ========================================

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Kontaktformular",
    description: "Ausführliche Projekt-Anfrage",
    highlight: "Empfohlen",
    color: "cyan",
    scrollTo: "contact-form",
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "kontakt@mb-solutions.biz",
    highlight: "Direkt",
    color: "blue",
    href: "mailto:kontakt@mb-solutions.biz",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "+49 123 456 7890",
    highlight: "Persönlich",
    color: "purple",
    href: "tel:+491234567890",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "Anfrage prüfen",
    description: "Wir analysieren Ihre Anforderungen und prüfen die Machbarkeit innerhalb von 24 Stunden.",
    icon: Search,
    color: "cyan",
  },
  {
    number: "02",
    title: "Kostenloses Erstgespräch",
    description: "In einem Video-Call oder Telefonat besprechen wir Details, Ziele und Timeline.",
    icon: Calendar,
    color: "blue",
  },
  {
    number: "03",
    title: "Angebot & Projektstart",
    description: "Sie erhalten ein transparentes Festpreis-Angebot. Bei Beauftragung starten wir sofort.",
    icon: FileText,
    color: "purple",
  },
];

const faqs = [
  {
    question: "Wie schnell erhalten wir eine Antwort?",
    answer: "In der Regel antworten wir innerhalb von 24 Stunden (Werktage). Bei dringenden Anfragen kontaktieren Sie uns direkt per Telefon.",
  },
  {
    question: "Was kostet die Erstberatung?",
    answer: "Die Erstberatung ist komplett kostenlos und unverbindlich. Wir besprechen Ihre Anforderungen und erstellen ein maßgeschneidertes Angebot.",
  },
  {
    question: "Welche Informationen sollten wir bereitstellen?",
    answer: "Je detaillierter, desto besser: Projektbeschreibung, Ziele, Budget-Vorstellungen, Timeline, Referenzen. Das hilft uns, Sie optimal zu beraten.",
  },
  {
    question: "Sind unsere Daten sicher?",
    answer: "Ja, absolut. Alle Daten werden verschlüsselt übertragen (SSL), DSGVO-konform gespeichert und ausschließlich für Ihre Anfrage verwendet.",
  },
];

const projectTypes = [
  "Webdesign & Entwicklung",
  "E-Commerce & Online-Shop",
  "IT-Services & Support",
  "Cloud-Migration",
  "IT-Sicherheit & Compliance",
  "SEO & Online-Marketing",
  "Corporate Website",
  "Web-App Entwicklung",
  "Anderes Projekt",
];

// ========================================
// 🎨 COMPONENTS
// ========================================

function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Verfügbar für neue Projekte · Antwort innerhalb 24h
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="block mb-3">Lassen Sie uns</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              zusammenarbeiten
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Ob Webdesign, IT-Services oder Marketing – wir entwickeln maßgeschneiderte Lösungen
            für Ihr Unternehmen. Kostenloses Erstgespräch, transparente Preise, schnelle Umsetzung.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: Clock, text: "24h Antwortzeit" },
              { icon: Shield, text: "DSGVO-konform" },
              { icon: Zap, text: "Schneller Start" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{item.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethods() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 rounded-2xl transition-all duration-300">
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {method.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>

                  {/* CTA */}
                  {method.scrollTo ? (
                    <button
                      onClick={scrollToForm}
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
                    >
                      Zum Formular
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : method.href ? (
                    <a
                      href={method.href}
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
                    >
                      Kontaktieren
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section id="contact-form" className="relative py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Projekt-Anfrage{" "}
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  starten
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden
                bei Ihnen. Je detaillierter Ihre Angaben, desto besser können wir Sie beraten.
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-4">
              {[
                "Kostenlose Erstberatung (30-60 Min.)",
                "Transparentes Festpreis-Angebot",
                "Schnelle Rückmeldung (< 24h)",
                "100% DSGVO-konform",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Köln & Umgebung</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:kontakt@mb-solutions.biz" className="hover:text-cyan-400 transition-colors">
                  kontakt@mb-solutions.biz
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+491234567890" className="hover:text-cyan-400 transition-colors">
                  +49 123 456 7890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage("Bitte akzeptieren Sie die Datenschutzerklärung.");
      return;
    }

    if (formData.message.length < 20) {
      setStatus("error");
      setErrorMessage("Die Nachricht sollte mindestens 20 Zeichen lang sein.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.company ? `Unternehmen: ${formData.company}\n` : ""}${formData.phone ? `Telefon: ${formData.phone}\n` : ""}${formData.projectType ? `Projekttyp: ${formData.projectType}\n\n` : ""}${formData.message}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          consent: false,
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Ein Fehler ist aufgetreten");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <div className="relative">
      {/* Form Card */}
      <div className="relative p-8 lg:p-10 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
        {status === "success" ? (
          // Success State
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30"
            >
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white">Nachricht gesendet!</h3>
            <p className="text-gray-300 max-w-md mx-auto text-lg">
              Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <ArrowRight className="w-5 h-5" />
              Neue Nachricht senden
            </button>
          </motion.div>
        ) : (
          // Form
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Company */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Ihr Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Unternehmen
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    placeholder="Musterfirma GmbH"
                  />
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  E-Mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Telefon (optional)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Worum geht es?
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
              >
                <option value="" className="bg-[#0A0E27]">Bitte wählen...</option>
                {projectTypes.map((type, i) => (
                  <option key={i} value={type} className="bg-[#0A0E27]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Ihre Nachricht *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                placeholder="Beschreiben Sie Ihr Projekt: Was möchten Sie umsetzen? Welche Ziele verfolgen Sie? Gibt es Fristen oder Budget-Vorstellungen?"
              />
              <p className="text-xs text-gray-500 mt-2">
                Mindestens 20 Zeichen
              </p>
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-white/10 bg-white/[0.03] text-cyan-500 focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
              />
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Ich habe die{" "}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu. *
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
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative flex items-center justify-center gap-2">
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
              </span>
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-center text-gray-500 pt-2">
              🔒 Ihre Daten werden verschlüsselt übertragen und DSGVO-konform verarbeitet.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function NextStepsSection() {
  return (
    <section className="relative py-20 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Was passiert{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              als Nächstes?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Von der ersten Anfrage bis zum erfolgreichen Projektstart
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

          {nextSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative text-center"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 mb-4 relative z-10 backdrop-blur-sm">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative py-20 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Häufige{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fragen
            </span>
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block mb-3">Bereit für Ihr</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              nächstes Projekt?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Starten Sie noch heute mit einer kostenlosen Beratung
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Formular ausfüllen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+491234567890"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/30 rounded-xl font-semibold text-lg text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Direkt anrufen
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-gray-500 mt-8"
          >
            🔒 Kostenlos, unverbindlich & DSGVO-konform
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ========================================
// 🌟 MAIN PAGE
// ========================================

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0E27] text-white overflow-hidden">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Methods */}
      <ContactMethods />

      {/* Contact Form */}
      <ContactFormSection />

      {/* Next Steps */}
      <NextStepsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <ContactCTA />
    </main>
  );
}
