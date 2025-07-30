import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Allgemeine Hinweise</h3>
                    <p className="text-sm">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                      Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit
                      denen Sie persönlich identifiziert werden können.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Datenerfassung auf unserer Website</h3>
                    <p className="text-sm">
                      <strong>Wichtig:</strong> Unser Unterschriften-Generator verarbeitet alle Daten ausschließlich
                      lokal in Ihrem Browser. Wir sammeln, speichern oder übertragen keine personenbezogenen Daten von
                      Ihnen. Ihre eingegebenen Namen oder gezeichneten Unterschriften verlassen niemals Ihr Gerät.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Hosting und Content Delivery Networks (CDN)</h2>
                <div className="text-gray-700">
                  <p className="text-sm">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                    die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
                    es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                    Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
                    handeln.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Datenschutz</h3>
                    <p className="text-sm">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                      Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                      sowie dieser Datenschutzerklärung.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="text-sm">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="mt-2 text-sm">
                      <p>Unterschrift Generator</p>
                      <p>Musterstraße 123</p>
                      <p>12345 Musterstadt</p>
                      <p>E-Mail: datenschutz@unterschrift-generator.de</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Datenerfassung auf unserer Website</h2>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Server-Log-Dateien</h3>
                    <p className="text-sm">
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                      Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
                      Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
                      Uhrzeit der Serveranfrage und IP-Adresse.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Unterschriften-Generator</h3>
                    <p className="text-sm">
                      <strong>Keine Datenübertragung:</strong> Alle Funktionen unseres Unterschriften-Generators
                      (Texteingabe, Zeichnen, E-Mail-Signatur-Erstellung) werden vollständig in Ihrem Browser
                      ausgeführt. Es werden keine Daten an unsere Server übertragen oder gespeichert. Ihre
                      Unterschriften und persönlichen Daten bleiben ausschließlich auf Ihrem Gerät.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Ihre Rechte</h2>
                <div className="text-gray-700">
                  <p className="text-sm">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                    Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                    Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. SSL- bzw. TLS-Verschlüsselung</h2>
                <div className="text-gray-700">
                  <p className="text-sm">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                    SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                    Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer
                    Browserzeile.
                  </p>
                </div>
              </section>

              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Unser Datenschutz-Versprechen</h3>
                <p className="text-sm text-green-700">
                  Wir sammeln, speichern oder verarbeiten keine Ihrer persönlichen Daten durch unseren
                  Unterschriften-Generator. Alle Funktionen arbeiten ausschließlich lokal in Ihrem Browser. Ihre
                  Privatsphäre ist uns wichtig!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
