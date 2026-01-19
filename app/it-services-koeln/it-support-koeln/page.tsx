import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Headphones, Clock, Shield, CheckCircle } from "lucide-react";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "IT-Support Köln | Helpdesk & Remote-Support | MB-Solutions",
  description: "IT-Support Köln: Schnelle Hilfe bei IT-Problemen. Reaktionszeit unter 2h. Remote & vor Ort. Mo-Fr 8-18 Uhr, optional 24/7. Jetzt Support anfragen!",
  alternates: { canonical: "https://mb-solutions.biz/it-services-koeln/it-support-koeln" },
};

export default function ITSupportKoelnPage() {
  return (
    <main className="relative bg-[#0A0E27] text-white min-h-screen">
      <StatementHeader />
      <div className="container mx-auto px-6 pt-32 pb-8">
        <nav className="text-sm text-gray-400">
          <Link href="/">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/it-services-koeln">IT-Services Köln</Link>
          <span className="mx-2">/</span>
          <span className="text-white">IT-Support Köln</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          IT-Support Köln: Schnelle Hilfe bei IT-Problemen
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Ihr Team hat ein IT-Problem? Wir lösen es – <span className="text-cyan-400 font-semibold">ohne Warteschleifen</span>,
          ohne komplizierte Ticketsysteme. Telefonisch, remote oder vor Ort in Köln.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Clock className="w-5 h-5 text-green-400" />
            <span>Reaktionszeit unter 2h</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Mo-Fr 8-18 Uhr</span>
          </div>
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
          Support anfragen <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Unser Support-Ansatz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Headphones className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Telefonischer Support</h3>
            <p className="text-gray-300 mb-4">Direkte Hotline ohne Warteschleife. Mo-Fr 8:00-18:00 Uhr.</p>
            <p className="text-sm text-gray-400">Tel: 0221 / 123 456 78</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Remote-Support</h3>
            <p className="text-gray-300">Die meisten Probleme lösen wir per Fernwartung. Schnell, effizient, sicher.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Clock className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Vor-Ort-Support</h3>
            <p className="text-gray-300">Bei Hardware-Problemen kommen wir zu Ihnen. Reaktionszeit in Köln: unter 3h.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Reaktionszeiten (garantiert)</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400 mb-2">Kritisch (P1)</div>
            <p className="text-gray-300">Server down, Totalausfall</p>
            <div className="text-cyan-400 font-bold mt-2">Reaktion: unter 2h</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-orange-400 mb-2">Hoch (P2)</div>
            <p className="text-gray-300">Wichtige Services beeinträchtigt</p>
            <div className="text-cyan-400 font-bold mt-2">Reaktion: unter 4h</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">Normal (P3)</div>
            <p className="text-gray-300">Einzelner Arbeitsplatz betroffen</p>
            <div className="text-cyan-400 font-bold mt-2">Reaktion: 1 Werktag</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Niedrig (P4)</div>
            <p className="text-gray-300">Fragen, kleine Anpassungen</p>
            <div className="text-cyan-400 font-bold mt-2">Reaktion: 3 Werktage</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <div className="max-w-3xl space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Was kostet IT-Support?</h3>
            <p className="text-gray-300">Nach Aufwand: ab 95€/Stunde. Oder Managed-Service-Paket ab 490€/Monat mit inklusiven Support-Stunden.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Bietet ihr auch 24/7-Support?</h3>
            <p className="text-gray-300">Ja, im Enterprise-Paket oder gegen Aufpreis. Standard: Mo-Fr 8-18 Uhr. Extended: Mo-Fr 7-20 Uhr + Sa 9-14 Uhr.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">IT-Problem? Wir helfen!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold">
              Support anfragen <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="tel:+4922112345678" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-lg font-semibold">
              0221 / 123 456 78
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
