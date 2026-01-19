import type { Metadata } from "next";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Informationen über die Verwendung von Cookies auf dieser Website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <StatementHeader />
      <article className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Cookie-Richtlinie</h1>

        <p className="text-lg text-muted-foreground mb-8">
          Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert
            werden, wenn Sie eine Website besuchen. Sie werden weitgehend verwendet, um Websites
            funktionsfähig zu machen und Informationen an die Website-Betreiber zu übermitteln.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Wie verwenden wir Cookies?</h2>
          <p>
            Diese Website verwendet verschiedene Arten von Cookies, um Ihre Erfahrung zu
            verbessern und die Website-Funktionalität zu gewährleisten. Wir unterteilen
            Cookies in die folgenden Kategorien:
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookie-Kategorien</h2>

          <div className="space-y-8">
            {/* Necessary Cookies */}
            <div className="bg-muted/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold m-0">Notwendige Cookies</h3>
              </div>
              <p className="mb-4">
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und
                können nicht deaktiviert werden.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Verwendete Cookies:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <code className="bg-muted px-2 py-1 rounded">gdpr-consent</code> -
                    Speichert Ihre Cookie-Präferenzen (12 Monate)
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded">session</code> -
                    Technische Session-Verwaltung (Session)
                  </li>
                </ul>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="bg-muted/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold m-0">Funktionale Cookies</h3>
              </div>
              <p className="mb-4">
                Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B.
                Ihre bevorzugte Sprache oder Theme-Einstellung.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Verwendete Cookies:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <code className="bg-muted px-2 py-1 rounded">theme</code> -
                    Speichert Ihre Theme-Präferenz (12 Monate)
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded">language</code> -
                    Speichert Ihre Sprachauswahl (12 Monate)
                  </li>
                </ul>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-muted/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold m-0">Analyse-Cookies</h3>
              </div>
              <p className="mb-4">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website
                interagieren, indem Informationen anonym gesammelt und gemeldet werden.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Verwendete Dienste:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Plausible Analytics</strong> (optional) -
                    Privacy-first Analytics ohne Cookies
                  </li>
                  <li className="text-muted-foreground">
                    • Keine personenbezogenen Daten<br />
                    • Keine IP-Adressen gespeichert<br />
                    • GDPR-konform by default
                  </li>
                </ul>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-muted/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold m-0">Marketing-Cookies</h3>
              </div>
              <p className="mb-4">
                Diese Cookies werden verwendet, um Besuchern relevante Anzeigen und
                Marketingkampagnen bereitzustellen.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Wir verwenden derzeit keine Marketing-Cookies. Sollten wir dies in Zukunft
                  ändern, werden wir Sie entsprechend informieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ihre Cookie-Einstellungen verwalten</h2>
          <p>
            Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner anpassen.
            Klicken Sie dazu auf den Link in der Fußzeile der Website.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg mt-6">
            <p className="font-semibold mb-2">💡 Tipp:</p>
            <p className="text-sm m-0">
              Die meisten Webbrowser ermöglichen es Ihnen, Cookies über die Browsereinstellungen
              zu kontrollieren. Bitte beachten Sie, dass das Blockieren bestimmter Cookies die
              Funktionalität der Website beeinträchtigen kann.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookie-Lebensdauer</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border rounded-xl overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Cookie-Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Typ</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Dauer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm">gdpr-consent</td>
                  <td className="px-4 py-3 text-sm">Notwendig</td>
                  <td className="px-4 py-3 text-sm">12 Monate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">theme</td>
                  <td className="px-4 py-3 text-sm">Funktional</td>
                  <td className="px-4 py-3 text-sm">12 Monate</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">language</td>
                  <td className="px-4 py-3 text-sm">Funktional</td>
                  <td className="px-4 py-3 text-sm">12 Monate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Weitere Informationen</h2>
          <p>
            Für weitere Informationen über unsere Datenschutzpraktiken besuchen Sie bitte
            unsere{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
          <p className="mt-4">
            Bei Fragen zu unserer Cookie-Richtlinie können Sie uns gerne{" "}
            <a href="/contact" className="text-primary hover:underline">
              kontaktieren
            </a>.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Diese Cookie-Richtlinie wurde erstellt, um vollständige Transparenz über die
            Verwendung von Cookies auf dieser Website zu gewährleisten.
          </p>
        </div>
      </article>
    </div>
  );
}
