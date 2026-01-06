import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Stethoscope, Shield, Server, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "IT-Services für Arztpraxen Köln | Praxissoftware & DSGVO",
  description: "IT-Services für Arztpraxen in Köln: Praxissoftware (CGM, Medistar), Patientendaten-Schutz, Praxis-Netzwerk. DSGVO-konform, KV-zertifiziert.",
  alternates: { canonical: "https://mb-solutions.biz/it-services-koeln/it-services-arztpraxen-koeln" },
};

export default function ITServicesArztpraxenKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/it-services-koeln">IT-Services Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">IT-Services für Arztpraxen</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          IT-Services für Arztpraxen in Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">Praxissoftware, Patientendaten, KV-Anbindung</span> – Arztpraxen brauchen spezialisierte IT.
          Wir kennen CGM, Medistar, x.concept und sorgen für sichere, DSGVO-konforme Praxis-IT.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Praxissoftware-Support</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>DSGVO-konform</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
          Praxis-IT-Beratung anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Speziell für Arztpraxen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Stethoscope className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Praxissoftware-Support</h3>
            <p className="text-gray-300">CGM Albis, Medistar, x.concept, Tomedo. Setup, Wartung, Updates, Schulungen.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Patientendaten-Schutz</h3>
            <p className="text-gray-300">DSGVO-konforme Verschlüsselung, Zugriffskontrolle, sichere Backups. Ärztliche Schweigepflicht.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Server className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">KV-Anbindung & eGK</h3>
            <p className="text-gray-300">Kassenärztliche Vereinigung, eGK-Lesegeräte, KV-SafeNet, ePA-Integration.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Leistungen</h2>
        <div className="max-w-3xl space-y-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Praxissoftware-Setup & Konfiguration (CGM, Medistar, x.concept)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Praxis-Netzwerk mit sicherer Patientendaten-Trennung</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Backup & Disaster Recovery für Patientenakten</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">eGK-Lesegeräte & KV-SafeNet-Anbindung</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">IT-Sicherheit: Firewall, Antivirus, Verschlüsselung</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Warum spezialisierte IT für Arztpraxen?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Praxissoftware-Know-how</div>
            <p className="text-gray-300">Standard-IT-Dienstleister kennen CGM/Medistar nicht. Wir optimieren Performance & Updates.</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">DSGVO & Schweigepflicht</div>
            <p className="text-gray-300">Patientendaten sind besonders sensibel. Wir sorgen für maximale Sicherheit.</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">KV-Anbindung</div>
            <p className="text-gray-300">Kassenabrechnung, eGK, KV-SafeNet – wir kennen die Anforderungen.</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Praxis-Prozesse</div>
            <p className="text-gray-300">Wir verstehen Ihre Workflows: Terminvergabe, Rezepte, Überweisungen, Labor-Anbindung.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet IT für Arztpraxen?</h3>
            <p className="text-gray-300">Praxis-Netzwerk Setup: ab 2.500€. Managed IT-Service: ab 390€/Monat (inkl. Support, Updates, Monitoring). Pro Arbeitsplatz: +90€/Monat.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Welche Praxissoftware unterstützt ihr?</h3>
            <p className="text-gray-300">CGM Albis, Medistar, x.concept, Tomedo, PVS Elefant. Auch Migration zwischen Systemen möglich.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie sichern wir Patientendaten?</h3>
            <p className="text-gray-300">Verschlüsselung (AES-256), tägliche Backups (3-2-1-Regel), Firewall, 2FA für alle Mitarbeiter, DSGVO-konforme Archivierung.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für sichere Praxis-IT?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose IT-Analyse speziell für Arztpraxen in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
            Analyse anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/webdesign-koeln/webdesign-aerzte-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Webdesign für Ärzte</h3>
            <p className="text-sm text-gray-400">Praxis-Websites</p>
          </Link>
          <Link href="/it-services-koeln/it-sicherheit-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Sicherheit</h3>
            <p className="text-sm text-gray-400">Patientendaten-Schutz</p>
          </Link>
          <Link href="/it-services-koeln/it-support-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Support</h3>
            <p className="text-sm text-gray-400">Praxis-Helpdesk</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
