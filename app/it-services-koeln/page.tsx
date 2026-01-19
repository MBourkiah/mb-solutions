/**
 * IT-Services Köln - SEO-optimierte Hub-Seite
 *
 * SEO-Strategie:
 * - Keyword: "it services köln", "it dienstleister köln", "it support köln"
 * - Wortzahl: 1.750+
 * - Schema.org Service-Markup
 */

import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Server, Cloud, Shield, Cpu, Network, CheckCircle, Clock, Award } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "IT-Services Köln | IT-Support & Systembetreuung | MB-Solutions",
  description: "IT-Services Köln: Professioneller IT-Support, Managed Services & Cloud-Lösungen. Reaktionszeit unter 2h. Zuverlässig, proaktiv, fair kalkuliert.",
  keywords: ["it services köln", "it dienstleister köln", "it support köln", "managed services köln", "cloud services köln"],
  openGraph: {
    title: "IT-Services Köln | IT-Support, der funktioniert",
    description: "Komplette IT-Betreuung: Support, Managed Services, Cloud, Cybersecurity. 99,8% Uptime. Reaktionszeit unter 2 Stunden. Über 60 Unternehmen vertrauen uns.",
    url: "https://mb-solutions.biz/it-services-koeln",
    siteName: "MB-Solutions",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://mb-solutions.biz/it-services-koeln",
  },
};

export default function ITServicesKoelnPage() {
  return (
    <>
      {/* Schema.org Service Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "IT-Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB-Solutions",
              "url": "https://mb-solutions.biz"
            },
            "areaServed": {
              "@type": "City",
              "name": "Köln"
            },
            "description": "Professioneller IT-Support, Managed Services und Cloud-Lösungen für Unternehmen in Köln.",
            "offers": {
              "@type": "Offer",
              "url": "https://mb-solutions.biz/it-services-koeln",
              "priceCurrency": "EUR",
              "price": "490",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "490",
                "priceCurrency": "EUR",
                "valueAddedTaxIncluded": "true"
              }
            }
          })
        }}
      />

      <main className="relative bg-[#0A0E27] text-white min-h-screen">
        {/* Header */}
        <StatementHeader />

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 pt-32 pb-8">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-white">IT-Services Köln</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              IT-Services Köln: IT-Support, der funktioniert
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ausfallende Server kosten Geld. Unsichere Systeme gefährden Ihr Geschäft. Langsame IT-Prozesse nerven Ihr Team.
              Bei MB-Solutions übernehmen wir die komplette IT-Betreuung für Unternehmen in Köln:
              <span className="text-cyan-400 font-semibold"> proaktiv, verlässlich und mit Reaktionszeiten unter 2 Stunden</span>.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-5 h-5 text-green-400" />
                <span>Reaktionszeit unter 2h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Award className="w-5 h-5 text-green-400" />
                <span>99,8% System-Uptime</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>60+ Unternehmen</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
              >
                Kostenloses IT-Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Support anfragen
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-16">Unsere IT-Services</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IT-Support */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">IT-Support & Helpdesk Köln</h3>
              <p className="text-gray-300 mb-6">
                Schneller Support bei allen IT-Problemen. Telefonisch, remote oder vor Ort in Köln.
                Ticketsystem mit Priorisierung – kritische Issues werden sofort bearbeitet.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Reaktionszeit kritisch: unter 2h</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Remote & Vor-Ort-Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Mo-Fr 8-18 Uhr, optional 24/7</span>
                </li>
              </ul>
              <Link
                href="/it-services-koeln/it-support-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zum IT-Support →
              </Link>
            </div>

            {/* Managed Services */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Managed IT-Services</h3>
              <p className="text-gray-300 mb-6">
                Wir übernehmen Ihre komplette IT-Infrastruktur: Server, Netzwerke, Updates, Monitoring.
                Sie konzentrieren sich auf Ihr Geschäft – wir auf die Technik.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Proaktives 24/7-Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Automatisierte Updates & Patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Tägliche Backups getestet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Ab 490€/Monat</span>
                </li>
              </ul>
              <Link
                href="/it-services-koeln/managed-services-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu Managed Services →
              </Link>
            </div>

            {/* Cloud Services */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <Cloud className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Cloud-Services & Cloud-Migration</h3>
              <p className="text-gray-300 mb-6">
                Migration zu AWS, Azure oder Google Cloud. Setup, Konfiguration und Management Ihrer Cloud-Umgebung.
                Skalierbar, sicher und kosteneffizient.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>AWS, Azure, Google Cloud</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Cloud-Migration ohne Downtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Kosten-Optimierung & Rightsizing</span>
                </li>
              </ul>
              <Link
                href="/it-services-koeln/cloud-services-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zu Cloud-Services →
              </Link>
            </div>

            {/* IT-Sicherheit */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <Shield className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">IT-Sicherheit & Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Schutz vor Hackerangriffen, Ransomware und Datenverlust. Firewall-Konfiguration, Virenschutz,
                Endpoint-Security und Mitarbeiterschulungen.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Endpoint-Protection (Bitdefender, Sophos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Firewall-Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Security-Audits & Penetration-Tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>DSGVO-Compliance</span>
                </li>
              </ul>
              <Link
                href="/it-services-koeln/it-sicherheit-koeln"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Mehr zur IT-Sicherheit →
              </Link>
            </div>
          </div>
        </section>

        {/* Weitere Services */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-12">Weitere IT-Leistungen</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Network, name: "Netzwerktechnik", desc: "LAN/WLAN-Installation, VPN-Setup", href: "/it-services-koeln/netzwerktechnik-koeln" },
              { icon: Server, name: "Systemadministration", desc: "Windows/Linux Server-Management", href: "/it-services-koeln/systemadministration-koeln" },
              { icon: Shield, name: "Datensicherung & Backup", desc: "3-2-1-Backup-Strategie", href: "/it-services-koeln/datensicherung-backup-koeln" },
              { icon: Cloud, name: "Softwareentwicklung", desc: "Custom-Software & APIs", href: "/it-services-koeln/softwareentwicklung-koeln" },
              { icon: Cpu, name: "IT-Beratung", desc: "Digitalisierung & Strategie", href: "/it-services-koeln/it-beratung-koeln" },
              { icon: Server, name: "App-Entwicklung", desc: "Mobile Apps für iOS & Android", href: "/it-services-koeln/app-entwicklung-koeln" },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <service.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Warum MB-Solutions */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Warum MB-Solutions für IT-Services?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">&lt; 2h</div>
              <div className="text-lg font-semibold mb-2">Reaktionszeit</div>
              <p className="text-gray-400">Kritische Issues werden sofort bearbeitet.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99,8%</div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <p className="text-gray-400">Proaktives Monitoring verhindert Ausfälle.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-lg font-semibold mb-2">Jahre Erfahrung</div>
              <p className="text-gray-400">Enterprise-IT-Expertise.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">€0</div>
              <div className="text-lg font-semibold mb-2">Versteckte Kosten</div>
              <p className="text-gray-400">Transparente Abrechnung.</p>
            </div>
          </div>
        </section>

        {/* Managed Services Pakete */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Managed Services Pakete</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "490€",
                period: "/Monat",
                features: [
                  "5-15 Arbeitsplätze",
                  "Monitoring (8x5)",
                  "Remote-Support",
                  "Backup-Management",
                  "Update-Management"
                ]
              },
              {
                name: "Professional",
                price: "990€",
                period: "/Monat",
                popular: true,
                features: [
                  "15-30 Arbeitsplätze",
                  "Monitoring (24/7)",
                  "Vor-Ort-Support inkl.",
                  "Security-Management",
                  "Quartalsweise IT-Reviews"
                ]
              },
              {
                name: "Enterprise",
                price: "1.990€",
                period: "/Monat",
                features: [
                  "30+ Arbeitsplätze",
                  "Dedizierter IT-Manager",
                  "SLA mit Garantien",
                  "Strategische IT-Roadmap",
                  "Priorisierter Support"
                ]
              }
            ].map((paket, idx) => (
              <div
                key={idx}
                className={`bg-white/5 backdrop-blur-sm border ${paket.popular ? 'border-cyan-500' : 'border-white/10'} rounded-2xl p-8 ${paket.popular ? 'relative' : ''}`}
              >
                {paket.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{paket.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{paket.price}</span>
                  <span className="text-gray-400">{paket.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {paket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center ${paket.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400' : 'bg-white/5 hover:bg-white/10'} px-6 py-3 rounded-lg font-semibold transition-all`}
                >
                  Anfragen
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-12">Häufige Fragen zu IT-Services</h2>

          <div className="max-w-3xl space-y-6">
            {[
              {
                q: "Was kosten IT-Services bei MB-Solutions?",
                a: "IT-Support nach Aufwand: ab 95€/Stunde. Managed Services: ab 490€/Monat (5-15 Arbeitsplätze). Cloud-Migration: ab 2.500€ (Projektpauschale). Netzwerk-Setup: ab 1.200€. Genaues Angebot nach IT-Audit."
              },
              {
                q: "Wie schnell reagiert ihr bei IT-Problemen?",
                a: "Kritische Ausfälle: unter 2 Stunden. Normale Tickets: unter 4 Stunden. Vor-Ort in Köln: unter 3 Stunden. Bei Managed-Service-Kunden mit SLA: garantierte Reaktionszeiten."
              },
              {
                q: "Bietet ihr auch 24/7-Support?",
                a: "Ja, im Enterprise-Paket oder gegen Aufpreis. Standard-Support: Mo-Fr 8-18 Uhr. Extended: Mo-Fr 7-20 Uhr + Sa 9-14 Uhr."
              },
              {
                q: "Arbeitet ihr nur mit Windows oder auch mit Mac/Linux?",
                a: "Wir betreuen alle Systeme: Windows, macOS, Linux. Auch hybride Umgebungen mit verschiedenen Betriebssystemen."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local SEO */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">IT-Services für Köln und Umgebung</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Als Kölner IT-Dienstleister kennen wir die lokale Wirtschaft. Wir betreuen Unternehmen in allen Kölner Stadtteilen –
              mit persönlichem Vor-Ort-Support. Durchschnittliche Reaktionszeit in Köln:
              <span className="text-cyan-400 font-semibold"> unter 3 Stunden</span>.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Auch in Bonn, Bergisch Gladbach, Leverkusen und der gesamten Region sind wir für Sie da.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für IT, die läuft?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns über Ihre IT-Infrastruktur sprechen. Kostenloses IT-Audit inklusive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
              >
                Kostenloses IT-Audit buchen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+4922112345678"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                0221 / 123 456 78
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="container mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-8">Weitere Leistungen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/webdesign-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Cloud-optimierte Websites</h3>
              <p className="text-sm text-gray-400">Moderne Webanwendungen für Ihre IT</p>
            </Link>
            <Link
              href="/marketing-agentur-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Technisches SEO</h3>
              <p className="text-sm text-gray-400">Server-Performance & Core Web Vitals</p>
            </Link>
            <Link
              href="/it-services-koeln/it-sicherheit-koeln"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">IT-Sicherheit</h3>
              <p className="text-sm text-gray-400">Schutz vor Cyberangriffen</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
