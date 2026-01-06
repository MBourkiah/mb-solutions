import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "IT-Sicherheit Köln | Firewall, Antivirus & Security",
  description: "IT-Sicherheit Köln: Firewall, Endpoint-Protection, Security-Audits. Schützen Sie Ihr Unternehmen vor Cyber-Angriffen. DSGVO-konform.",
  alternates: { canonical: "https://mb-solutions.biz/it-services-koeln/it-sicherheit-koeln" },
};

export default function ITSicherheitKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/it-services-koeln">IT-Services Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">IT-Sicherheit</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          IT-Sicherheit Köln: Schützen Sie Ihr Unternehmen
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          <span className="text-red-400 font-semibold">43% der Cyber-Angriffe zielen auf KMU</span>.
          Wir sichern Ihre IT: Firewall, Endpoint-Protection, Mitarbeiter-Schulungen. DSGVO-konform und praxisnah.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Security-Audit inklusive</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>DSGVO-konform</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-lg font-semibold">
          Security-Audit anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unsere Security-Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Firewall & Netzwerksicherheit</h3>
            <p className="text-gray-300">Next-Gen Firewalls (Sophos, Fortinet), VPN, Netzwerk-Segmentierung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Lock className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Endpoint-Protection</h3>
            <p className="text-gray-300">Antivirus für alle Geräte: PCs, Macs, Smartphones. Automatische Updates.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <AlertTriangle className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Security-Awareness-Training</h3>
            <p className="text-gray-300">Phishing-Simulationen, Mitarbeiter-Schulungen. Der Mensch ist das schwächste Glied.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Häufige Bedrohungen</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400 mb-2">Ransomware</div>
            <p className="text-gray-300">Verschlüsselung Ihrer Daten, Lösegeldforderung. Schutz: Backups + Endpoint-Protection.</p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-orange-400 mb-2">Phishing</div>
            <p className="text-gray-300">Gefälschte E-Mails, die Zugangsdaten stehlen. Schutz: Mitarbeiter-Schulungen + E-Mail-Filter.</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">DDoS-Angriffe</div>
            <p className="text-gray-300">Überlastung Ihrer Server. Schutz: DDoS-Protection + CDN.</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">Datenlecks</div>
            <p className="text-gray-300">Ungeschützte Datenbanken, schwache Passwörter. Schutz: Verschlüsselung + Zugriffskontrolle.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet IT-Sicherheit?</h3>
            <p className="text-gray-300">Security-Audit: ab 1.500€. Firewall-Setup: ab 2.500€. Managed Security Service: ab 290€/Monat (inkl. Firewall, Antivirus, Monitoring).</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Reicht Antivirus nicht aus?</h3>
            <p className="text-gray-300">Nein! Antivirus schützt nur einzelne Geräte. Sie brauchen zusätzlich: Firewall, Backups, Mitarbeiter-Schulungen, Netzwerk-Segmentierung.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was ist ein Security-Audit?</h3>
            <p className="text-gray-300">Wir analysieren Ihre IT-Infrastruktur auf Schwachstellen: Netzwerk, Server, PCs, Passwörter, Backups. Sie erhalten einen Report mit konkreten Maßnahmen.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Schützen Sie Ihr Unternehmen jetzt!</h2>
          <p className="text-xl text-gray-300 mb-8">Kostenloser Security-Check: Wir zeigen Ihnen, wo Sie verwundbar sind.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-lg font-semibold">
            Security-Check anfragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">Weitere IT-Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/it-services-koeln/it-support-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Support</h3>
            <p className="text-sm text-gray-400">Helpdesk & Remote-Support</p>
          </Link>
          <Link href="/it-services-koeln/cloud-services-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Cloud-Services</h3>
            <p className="text-sm text-gray-400">Azure, AWS, Google Cloud</p>
          </Link>
          <Link href="/it-services-koeln/microsoft-365-koeln" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all group">
            <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Microsoft 365 Security</h3>
            <p className="text-sm text-gray-400">MFA, Conditional Access</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
