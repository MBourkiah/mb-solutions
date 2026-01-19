import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Shield, Database, Lock, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "IT-Services für Steuerberater Köln | DATEV & GoBD-konform",
  description: "IT-Services für Steuerberater & Kanzleien in Köln: DATEV-Integration, GoBD-konforme Archivierung, Kanzlei-Netzwerk. Spezialisiert auf StB.",
  alternates: { canonical: "https://mb-solutions.biz/it-services-koeln/it-services-steuerberater-koeln" },
};

export default function ITServicesSteuerberaterKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/it-services-koeln">IT-Services Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">IT-Services für Steuerberater</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          IT-Services für Steuerberater & Kanzleien in Köln
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">DATEV, GoBD, Mandantenschutz</span> – Steuerkanzleien brauchen spezialisierte IT.
          Wir kennen Ihre Anforderungen: DATEV-Integration, GoBD-konforme Archivierung, verschlüsselte Mandantendaten.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>DATEV-zertifiziert</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>GoBD-konform</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 rounded-lg font-semibold">
          IT-Beratung anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Speziell für Steuerkanzleien</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Database className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">DATEV-Integration</h3>
            <p className="text-gray-300">DATEV Unternehmen online, DATEV DMS, Arbeitsplatz pro. Optimales Setup, schnelle Performance.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">GoBD-konforme Archivierung</h3>
            <p className="text-gray-300">E-Mail-Archivierung, Dokumenten-Management, revisionssichere Speicherung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Lock className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Mandantendaten-Schutz</h3>
            <p className="text-gray-300">Verschlüsselung, Zugriffskontrolle, Firewall. Schutz vor Cyber-Angriffen.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Leistungen</h2>
        <div className="max-w-3xl space-y-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">DATEV-Server Setup & Wartung (On-Premise oder Cloud)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Kanzlei-Netzwerk mit sicherer Mandantentrennung</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">E-Mail-Archivierung GoBD-konform (MailStore, Barracuda)</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">Backup & Disaster Recovery für Mandantendaten</span>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">VPN & Homeoffice-Zugriff für Mitarbeiter</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Warum spezialisierte IT für Steuerkanzleien?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">DATEV-Know-how</div>
            <p className="text-gray-300">Standard-IT-Dienstleister kennen DATEV nicht. Wir optimieren Performance, Lizenzen, Updates.</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">GoBD-Compliance</div>
            <p className="text-gray-300">Revisionssichere Archivierung ist Pflicht. Wir sorgen für korrekte Umsetzung.</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">Mandantengeheimnis</div>
            <p className="text-gray-300">Verschlüsselung, Zugriffsprotokolle, sichere Datenübertragung. Schutz vor Datenlecks.</p>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Kanzlei-Prozesse</div>
            <p className="text-gray-300">Wir verstehen Ihre Workflows: Digitale Belegerfassung, Mandantenportal, E-Bilanz.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet IT für Steuerkanzleien?</h3>
            <p className="text-gray-300">DATEV-Setup: ab 2.500€. Managed IT-Service: ab 590€/Monat (inkl. Support, Updates, Monitoring). Pro Arbeitsplatz: +120€/Monat.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">DATEV in der Cloud oder On-Premise?</h3>
            <p className="text-gray-300">Cloud (DATEV Rechenzentrum): Keine Server-Hardware, automatische Updates, Homeoffice-ready. On-Premise: Mehr Kontrolle, einmalige Kosten. Wir beraten Sie!</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie sichern wir Mandantendaten?</h3>
            <p className="text-gray-300">Verschlüsselung (AES-256), Next-Gen Firewall, 2FA für alle Mitarbeiter, tägliche Backups (3-2-1-Regel), GoBD-konforme E-Mail-Archivierung.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für spezialisierte Kanzlei-IT?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose IT-Analyse speziell für Steuerkanzleien in Köln.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 rounded-lg font-semibold">
            Analyse anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere IT-Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/it-services-koeln/it-sicherheit-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Sicherheit</h3>
            <p className="text-sm text-gray-400">Firewall & Endpoint-Protection</p>
          </Link>
          <Link href="/it-services-koeln/cloud-services-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Cloud-Services</h3>
            <p className="text-sm text-gray-400">DATEV in der Cloud</p>
          </Link>
          <Link href="/it-services-koeln/it-support-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Support</h3>
            <p className="text-sm text-gray-400">Kanzlei-Helpdesk</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
