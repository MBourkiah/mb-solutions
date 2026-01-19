import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Mail, Calendar, FileText, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Microsoft 365 Köln | Setup, Migration & Support",
  description: "Microsoft 365 Köln: Professionelles Setup, Migration von Exchange, Teams-Integration. Für moderne Zusammenarbeit in KMU.",
  alternates: { canonical: "https://mb-solutions.biz/it-services-koeln/microsoft-365-koeln" },
};

export default function Microsoft365KoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/it-services-koeln">IT-Services Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Microsoft 365</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Microsoft 365 Köln: Modern arbeiten mit Cloud-Office
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-cyan-400 font-semibold">Outlook, Teams, OneDrive, SharePoint</span> –
          alles in einem. Wir migrieren Ihr Unternehmen zu Microsoft 365 und richten es professionell ein.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Migration ohne Datenverlust</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Teams-Setup inklusive</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
          Microsoft 365-Beratung anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Microsoft 365-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Mail className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">E-Mail-Migration</h3>
            <p className="text-gray-300">Umzug von Exchange, IMAP, Gmail zu Microsoft 365. Ohne Downtime, ohne Datenverlust.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Calendar className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Teams-Setup & Training</h3>
            <p className="text-gray-300">Microsoft Teams richtig einrichten: Channels, Meetings, Integration. 2h Mitarbeiter-Schulung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <FileText className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">SharePoint & OneDrive</h3>
            <p className="text-gray-300">Dokumenten-Management, Teamordner, Freigabe-Links. Schluss mit E-Mail-Anhängen.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Was ist in Microsoft 365 enthalten?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Outlook (E-Mail)</div>
            <p className="text-gray-300">50 GB Postfach, Kalender, Kontakte. Web, Desktop, Mobile.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Microsoft Teams</div>
            <p className="text-gray-300">Chat, Videocalls (bis 300 Teilnehmer), Bildschirmfreigabe.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Office-Apps</div>
            <p className="text-gray-300">Word, Excel, PowerPoint. Online & Desktop (5 Geräte/User).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">OneDrive (1 TB)</div>
            <p className="text-gray-300">Cloud-Speicher, Sync, Freigabe. Automatisches Backup.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet Microsoft 365?</h3>
            <p className="text-gray-300">Business Basic: 5,60€/User/Monat. Business Standard (inkl. Office-Apps): 11,70€/User/Monat. Setup & Migration: ab 1.500€ (einmalig).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Können wir unsere E-Mail-Adressen behalten?</h3>
            <p className="text-gray-300">Ja! Ihre @firma.de-Adressen bleiben erhalten. Wir migrieren nur den Posteingang zu Microsoft 365.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wie lange dauert die Migration?</h3>
            <p className="text-gray-300">Setup: 1-2 Tage. E-Mail-Migration: 1-3 Tage (je nach Datenmenge). Teams-Training: 2h. Gesamt: 1 Woche.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Microsoft 365?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Migrations-Planung für Ihr Unternehmen.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg font-semibold">
            Planung anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere IT-Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/it-services-koeln/cloud-services-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Cloud-Services</h3>
            <p className="text-sm text-gray-400">Azure Integration</p>
          </Link>
          <Link href="/it-services-koeln/it-support-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Support</h3>
            <p className="text-sm text-gray-400">Microsoft 365-Support</p>
          </Link>
          <Link href="/it-services-koeln/it-sicherheit-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Microsoft 365 Security</h3>
            <p className="text-sm text-gray-400">MFA & Conditional Access</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
