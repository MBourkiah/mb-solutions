import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Cloud, Lock, Zap, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Cloud-Services Köln | Azure, AWS & Google Cloud",
  description: "Cloud-Services Köln: Migration, Setup & Verwaltung von Azure, AWS, Google Cloud. Skalierbar, sicher, kosteneffizient. Für KMU in Köln.",
  alternates: { canonical: "https://mb-solutions.biz/it-services-koeln/cloud-services-koeln" },
};

export default function CloudServicesKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/it-services-koeln">IT-Services Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Cloud-Services</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Cloud-Services Köln: Ihre IT in der Cloud
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Schluss mit teuren Servern im Keller. Wir migrieren Ihre IT in die Cloud –
          <span className="text-cyan-400 font-semibold"> Microsoft Azure, AWS oder Google Cloud</span>.
          Skalierbar, sicher, von überall erreichbar.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Azure, AWS, Google Cloud</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>DSGVO-konform</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
          Cloud-Beratung anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Cloud-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Cloud className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cloud-Migration</h3>
            <p className="text-gray-300">Umzug Ihrer Server, Datenbanken, Applikationen in die Cloud. Ohne Downtime.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Lock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cloud-Backup</h3>
            <p className="text-gray-300">Automatische Backups Ihrer Daten. 3-2-1-Regel, verschlüsselt, DSGVO-konform.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Managed Cloud</h3>
            <p className="text-gray-300">Wir verwalten Ihre Cloud-Infrastruktur. Updates, Monitoring, Optimierung.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Vorteile der Cloud</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Skalierbar</div>
            <p className="text-gray-300">Mehr Speicher oder Rechenleistung nötig? In 5 Minuten hochskaliert.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Kosteneffizient</div>
            <p className="text-gray-300">Zahlen Sie nur, was Sie nutzen. Keine teure Hardware-Anschaffung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Von überall</div>
            <p className="text-gray-300">Homeoffice, unterwegs – Ihre Daten sind überall verfügbar.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">Hochverfügbar</div>
            <p className="text-gray-300">99,9% Uptime-Garantie. Keine Ausfälle bei Hardware-Defekten.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet Cloud-Migration?</h3>
            <p className="text-gray-300">Analyse & Konzept: ab 1.500€. Migration (je nach Komplexität): 3.500-15.000€. Laufende Kosten (Cloud-Hosting): ab 150€/Monat.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Sind meine Daten in der Cloud sicher?</h3>
            <p className="text-gray-300">Ja! Azure/AWS/Google haben ISO 27001-Zertifizierung. Verschlüsselung, Backups, Firewalls – höchste Sicherheit. DSGVO-konform mit deutschen Rechenzentren.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Azure, AWS oder Google Cloud - was ist besser?</h3>
            <p className="text-gray-300">Azure für: Microsoft 365-Integration, Windows-Server. AWS für: Maximale Flexibilität, größte Auswahl. Google Cloud für: Machine Learning, Kubernetes. Wir beraten Sie!</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für die Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenlose Cloud-Readiness-Analyse für Ihr Unternehmen.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
            Analyse anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere IT-Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/it-services-koeln/it-support-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Support</h3>
            <p className="text-sm text-gray-400">Helpdesk & Remote-Support</p>
          </Link>
          <Link href="/it-services-koeln/it-sicherheit-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Sicherheit</h3>
            <p className="text-sm text-gray-400">Firewall & Security</p>
          </Link>
          <Link href="/it-services-koeln/microsoft-365-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Microsoft 365</h3>
            <p className="text-sm text-gray-400">Setup & Migration</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
