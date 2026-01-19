import type { Metadata } from "next";
import { StatementHeader } from "@/components/layout/StatementHeader";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <StatementHeader />
      <article className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <p className="text-lg text-muted-foreground mb-8">
          Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
          <h4 className="font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h4 className="font-semibold mb-2 mt-4">Wie erfassen wir Ihre Daten?</h4>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mt-4">
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme
            erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem
            oder Uhrzeit des Seitenaufrufs).
          </p>

          <h4 className="font-semibold mb-2 mt-4">Wofür nutzen wir Ihre Daten?</h4>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
            zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="font-semibold mb-2 mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
            ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>

          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Vercel</h3>
          <p>
            Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            (nachfolgend &ldquo;Vercel&rdquo;).
          </p>
          <p className="mt-4">
            Vercel ist ein Dienst zum Hosten von Webseiten. Wenn Sie unsere Website besuchen,
            erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
          </p>
          <p className="mt-4">
            Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="bg-muted p-6 rounded-xl mt-4">
            <p className="font-mono text-sm">
              [Ihr Name / Firmenname]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]<br />
              <br />
              E-Mail: [ihre-email@example.com]<br />
              Telefon: [Ihre Telefonnummer]
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
            genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
            für die Datenverarbeitung entfällt.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
            möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-semibold mb-3">Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte &ldquo;Cookies&rdquo;. Cookies sind kleine
            Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
          </p>
          <p className="mt-4">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
            informiert werden und Cookies nur im Einzelfall erlauben.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in
            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Analyse-Tools und Werbung</h2>

          <h3 className="text-xl font-semibold mb-3">Plausible Analytics (optional)</h3>
          <p>
            Diese Website nutzt Plausible Analytics, einen datenschutzfreundlichen
            Webanalysedienst ohne Cookies. Plausible erfasst anonymisierte Nutzungsdaten,
            um die Website zu verbessern.
          </p>
          <p className="mt-4">
            Es werden keine personenbezogenen Daten gespeichert oder an Dritte weitergegeben.
            Weitere Informationen:{" "}
            <a
              href="https://plausible.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://plausible.io/privacy
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten.</li>
            <li><strong>Berichtigungsrecht:</strong> Sie haben das Recht, unrichtige Daten berichtigen zu lassen.</li>
            <li><strong>Löschungsrecht:</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.</li>
            <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, der Datenverarbeitung zu widersprechen.</li>
            <li><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Diese Datenschutzerklärung wurde mit Sorgfalt erstellt. Bei Fragen wenden Sie sich bitte an:{" "}
            <a href="/contact" className="text-primary hover:underline">Kontakt</a>
          </p>
        </div>
      </article>
    </div>
  );
}
