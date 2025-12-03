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
} from "lucide-react";

/**
 * MB-Solutions Contact Page
 *
 * Premium Kontaktseite mit:
 * - Hero mit Verfügbarkeits-Badge
 * - 3 Kontaktmöglichkeiten (Formular, Email, WhatsApp)
 * - Ausführliches Kontaktformular
 * - "Was passiert danach" Timeline
 * - Mini-FAQ
 * - Finale CTA
 */

// ========================================
// 📝 CONTENT DATA
// ========================================

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Kontaktformular",
    description: "Schildern Sie mir Ihr Projekt ausführlich",
    badge: "Empfohlen",
    badgeColor: "bg-green-500/10 text-green-500 border-green-500/30",
    cta: "Zum Formular",
    scrollTo: "contact-form",
  },
  {
    icon: Mail,
    title: "Direktkontakt",
    description: "info@mb-solutions.biz · +49 (0) 123 456789",
    badge: "Formell",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    hint: "Für detaillierte Anfragen",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Per WhatsApp schreiben",
    badge: "Schnell",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    hint: "Für kurze Anfragen & schnelle Rückfragen",
    link: "https://wa.me/491234567890",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "Anfrage prüfen",
    description:
      "Ich lese Ihre Nachricht und prüfe, ob Ihr Projekt zu meinem Leistungsspektrum passt. Bei Rückfragen melde ich mich direkt.",
    icon: Search,
  },
  {
    number: "02",
    title: "Erstgespräch vereinbaren",
    description:
      "In einem kostenlosen Erstgespräch (Video-Call oder Telefon) besprechen wir Ihre Anforderungen und klären offene Fragen.",
    icon: Calendar,
  },
  {
    number: "03",
    title: "Angebot & Start",
    description:
      "Sie erhalten ein transparentes Angebot mit Projektplan und Festpreis. Bei Beauftragung starten wir direkt mit der Umsetzung.",
    icon: FileText,
  },
];

const faqs = [
  {
    question: "Wie schnell erhalte ich eine Antwort?",
    answer:
      "In der Regel antworte ich innerhalb von 24 Stunden (Werktage). Bei dringenden Anfragen können Sie mich auch direkt per WhatsApp kontaktieren.",
  },
  {
    question: "Was kostet eine Erstberatung?",
    answer:
      "Die Erstberatung ist kostenlos und unverbindlich. In einem Gespräch klären wir Ihre Anforderungen und ich erstelle Ihnen anschließend ein transparentes Angebot.",
  },
  {
    question: "Welche Informationen sollte ich mitschicken?",
    answer:
      "Je mehr Details, desto besser: Beschreiben Sie Ihr Projekt, Ihre Ziele, Fristen und Budget-Vorstellungen. Auch Referenz-Websites oder Skizzen helfen.",
  },
  {
    question: "Sind meine Daten sicher?",
    answer:
      "Ja. Ihre Daten werden verschlüsselt übertragen, DSGVO-konform gespeichert und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.",
  },
];

const projectTypes = [
  "Webentwicklung (Website/Web-App)",
  "API & Backend Development",
  "Prozess-Automatisierung",
  "IT-Beratung & Strategie",
  "Maintenance & Support",
  "UI/UX Design",
  "Anderes",
];

// ========================================
// 🎨 COMPONENTS
// ========================================

function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-start justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-semibold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Verfügbar für neue Projekte · Antwort innerhalb von 24 Stunden
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
        >
          <span className="block text-balance mb-4">
            Lassen Sie uns über
          </span>
          <span
            className="block text-balance"
            style={{
              background:
                "linear-gradient(135deg, #06A3C9 0%, #1A7FD8 50%, #06A3C9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ihr Projekt sprechen
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          Ob neue Website, Web-App, Automatisierung oder IT-Beratung – in einem
          kostenlosen Erstgespräch finden wir heraus, wie ich Sie am besten
          unterstützen kann.
        </motion.p>
      </div>
    </section>
  );
}

function ContactOptions() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${option.badgeColor}`}
                    >
                      {option.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>

                  {option.hint && (
                    <p className="text-sm text-muted-foreground/70 italic mb-4">
                      {option.hint}
                    </p>
                  )}

                  {/* CTA */}
                  {option.scrollTo && (
                    <button
                      onClick={scrollToForm}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      {option.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  {option.link && (
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Öffnen
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
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
    <section id="contact-form" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Info (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Schicken Sie mir eine{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Nachricht
              </span>
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Füllen Sie das Formular aus und ich melde mich innerhalb von 24
              Stunden bei Ihnen zurück. Je mehr Informationen Sie mir geben,
              desto besser kann ich Sie beraten.
            </p>

            {/* Checkpoints */}
            <ul className="space-y-3">
              {[
                "Kostenlose Erstberatung",
                "Unverbindliches Angebot",
                "Schnelle Rückmeldung (< 24h)",
                "DSGVO-konform",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
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
      setErrorMessage(
        "Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut."
      );
    }
  };

  return (
    <div className="relative group">
      {/* Ambient glow */}
      <motion.div
        className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{
          background: "radial-gradient(circle at center, rgba(6, 163, 201, 0.25), transparent 70%)",
        }}
      />

      {/* Form Card */}
      <div className="relative p-8 sm:p-10 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl">
        {status === "success" ? (
          // Success State
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/20"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-bold">Nachricht gesendet!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24
              Stunden bei Ihnen.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-primary hover:text-accent transition-colors font-semibold"
            >
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
                <label className="block text-sm font-semibold mb-2">
                  Ihr Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_20px_rgba(6,163,201,0.15)] transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Unternehmen
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_20px_rgba(6,163,201,0.15)] transition-all"
                    placeholder="Musterfirma GmbH"
                  />
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  E-Mail-Adresse *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_20px_rgba(6,163,201,0.15)] transition-all"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Telefon (optional)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_20px_rgba(6,163,201,0.15)] transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Worum geht es?
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_20px_rgba(6,163,201,0.15)] transition-all"
              >
                <option value="">Bitte wählen...</option>
                {projectTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Ihre Nachricht *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_20px_rgba(6,163,201,0.15)] transition-all resize-none"
                placeholder="Erzählen Sie mir von Ihrem Projekt: Was möchten Sie umsetzen? Welche Ziele verfolgen Sie? Gibt es Fristen oder Budget-Vorstellungen?"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Mindestens 20 Zeichen
              </p>
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
                className="mt-1 w-4 h-4 rounded border-border/50 bg-background/50 text-primary focus:ring-2 focus:ring-primary/50 cursor-pointer"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Ich habe die{" "}
                <Link
                  href="/privacy"
                  className="text-primary hover:text-accent underline"
                >
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
                className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500"
              >
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-white rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 transition-all duration-500 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
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
            <p className="text-xs text-center text-muted-foreground pt-2">
              🔒 Ihre Daten werden verschlüsselt übertragen und DSGVO-konform
              verarbeitet. Ich verwende Ihre Informationen ausschließlich zur
              Beantwortung Ihrer Anfrage.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function NextStepsSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Was passiert{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              als Nächstes?
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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
                  {/* Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 mb-4 relative z-10 bg-background">
                    <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Häufige{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Fragen
            </span>
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-3 text-primary">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
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
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block mb-2">Bereit, Ihr</span>
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, #06A3C9 0%, #1A7FD8 50%, #06A3C9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projekt zu starten?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Kontaktieren Sie mich noch heute
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-white rounded-xl font-semibold text-lg overflow-hidden shadow-[0_4px_24px_rgba(6,182,212,0.25)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.35)] transition-all duration-500 hover:brightness-110 w-full sm:w-auto"
            >
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Formular ausfüllen
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>

            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-background/50 hover:bg-background/80 backdrop-blur-sm border border-border hover:border-accent/50 text-foreground rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Per WhatsApp schreiben
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm text-muted-foreground mt-8"
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
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Options */}
      <div className="relative">
        <ContactOptions />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      {/* Contact Form Section */}
      <div className="relative">
        <ContactFormSection />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      {/* Next Steps */}
      <div className="relative">
        <NextStepsSection />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      {/* FAQ */}
      <div className="relative">
        <FAQSection />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      {/* CTA Section */}
      <div className="relative">
        <ContactCTA />
      </div>
    </main>
  );
}
