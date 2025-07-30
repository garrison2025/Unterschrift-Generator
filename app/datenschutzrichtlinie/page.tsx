import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Server } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie - Unterschrift Generator | DSGVO-konform",
  description:
    "Datenschutzrichtlinie des Unterschrift Generators. Erfahren Sie, wie wir Ihre Daten schützen und warum unser Tool 100% DSGVO-konform ist.",
  keywords: "Datenschutz, DSGVO, Privatsphäre, Unterschrift Generator, Datensicherheit",
}

export default function DatenschutzrichtliniePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-4xl font-bold mb-8">Datenschutzrichtlinie</h1>

            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-bold text-green-800">Unser Datenschutz-Versprechen</h2>
              </div>
              <p className="text-green-700">
                <strong>100% Lokale Verarbeitung:</strong> Alle Unterschriften werden ausschließlich in Ihrem Browser
                erstellt. Wir sammeln, speichern oder übertragen keine Ihrer persönlichen Daten. Ihre Privatsphäre ist
                garantiert!
              </p>
            </div>

            <div className="prose max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Verantwortlicher</h2>
                <p className="text-gray-700">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p>
                    <strong>Unterschrift Generator</strong>
                    <br />
                    E-Mail: info@unterschriftgenerator.pro
                    <br />
                    Website: unterschriftgenerator.pro
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Arten der verarbeiteten Daten</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold">Was wir NICHT sammeln</h3>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Ihre eingegebenen Namen</li>
                      <li>• Ihre gezeichneten Unterschriften</li>
                      <li>• Ihre E-Mail-Signatur-Daten</li>
                      <li>• Persönliche Identifikationsdaten</li>
                      <li>• Nutzungsverhalten im Tool</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Server className="w-5 h-5 text-orange-600" />
                      <h3 className="font-bold">Technische Daten</h3>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• IP-Adresse (anonymisiert)</li>
                      <li>• Browser-Typ und Version</li>
                      <li>• Betriebssystem</li>
                      <li>• Zugriffszeitpunkt</li>
                      <li>• Referrer-URL</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Wie unser Unterschrift Generator funktioniert</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Lokale Verarbeitung - Ihre Daten bleiben bei Ihnen</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Unterschrift erstellen online:</strong> Wenn Sie unseren{" "}
                      <strong>Unterschrift Generator</strong>
                      verwenden, werden alle Ihre Eingaben (Namen, Zeichnungen, E-Mail-Daten) ausschließlich in Ihrem
                      Browser verarbeitet.
                    </p>
                    <p>
                      <strong>Keine Server-Übertragung:</strong> Ihre{" "}
                      <strong>handschriftliche Unterschrift erstellen</strong>
                      oder Texteingaben werden niemals an unsere Server gesendet.
                    </p>
                    <p>
                      <strong>Automatische Löschung:</strong> Sobald Sie Ihren Browser schließen oder die Seite
                      verlassen, sind alle Daten automatisch gelöscht.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Rechtsgrundlagen (DSGVO)</h2>
                <p className="text-gray-700 mb-4">
                  Die Verarbeitung der wenigen technischen Daten erfolgt auf Grundlage von:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse):</strong> Bereitstellung und Sicherheit
                    der Website
                  </li>
                  <li>
                    <strong>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):</strong> Bei freiwilliger Kontaktaufnahme
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Hosting und technische Dienstleister</h2>
                <p className="text-gray-700 mb-4">
                  Unsere Website wird bei einem deutschen Hosting-Anbieter gehostet. Dabei können folgende Daten
                  verarbeitet werden:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>IP-Adresse (anonymisiert nach 7 Tagen)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Browser-Informationen</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Diese Daten dienen ausschließlich der Bereitstellung und Sicherheit unseres{" "}
                  <strong>unterschrift generator kostenlos</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cookies und lokale Speicherung</h2>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800">
                    <strong>Keine Tracking-Cookies:</strong> Wir verwenden keine Cookies für Tracking oder Analyse.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  Unser <strong>Unterschrift Generator</strong> verwendet minimal notwendige technische Cookies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Session-Cookies für die Funktionalität</li>
                  <li>Lokale Browser-Speicherung für Ihre Einstellungen (optional)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Ihre Rechte nach DSGVO</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Auskunftsrecht (Art. 15 DSGVO)</h3>
                    <p className="text-sm text-gray-700">
                      Sie haben das Recht zu erfahren, welche Daten wir über Sie verarbeiten.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Berichtigungsrecht (Art. 16 DSGVO)</h3>
                    <p className="text-sm text-gray-700">Sie können die Berichtigung unrichtiger Daten verlangen.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Löschungsrecht (Art. 17 DSGVO)</h3>
                    <p className="text-sm text-gray-700">Sie können die Löschung Ihrer Daten verlangen.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                    <p className="text-sm text-gray-700">Sie können der Verarbeitung Ihrer Daten widersprechen.</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:
                  <a href="mailto:info@unterschriftgenerator.pro" className="text-blue-600 hover:underline ml-1">
                    info@unterschriftgenerator.pro
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Datensicherheit</h2>
                <div className="flex items-start gap-4 mb-4">
                  <Lock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">SSL-Verschlüsselung</h3>
                    <p className="text-gray-700">
                      Unsere Website verwendet SSL-Verschlüsselung für alle Datenübertragungen. Erkennbar am "https://"
                      und dem Schloss-Symbol in Ihrem Browser.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Da unser <strong>Unterschrift Generator</strong> alle Daten lokal verarbeitet, sind Ihre
                  <strong> schöne Unterschrift</strong> und persönlichen Informationen maximal geschützt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Kontakt bei Datenschutzfragen</h2>
                <p className="text-gray-700 mb-4">
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>E-Mail:</strong> info@unterschriftgenerator.pro
                    <br />
                    <strong>Betreff:</strong> Datenschutz - Unterschrift Generator
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Änderungen dieser Datenschutzrichtlinie</h2>
                <p className="text-gray-700">
                  Diese Datenschutzrichtlinie kann bei Bedarf aktualisiert werden. Die aktuelle Version finden Sie stets
                  auf dieser Seite.
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Stand:</strong> 30. Juli 2025
                </p>
              </section>
            </div>

            <div className="mt-12 text-center bg-green-50 p-6 rounded-lg">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-bold mb-2">Ihr Datenschutz ist unser Versprechen</h3>
              <p className="text-gray-700 mb-4">
                Nutzen Sie unseren <strong>Unterschrift Generator</strong> mit dem guten Gefühl, dass Ihre Daten sicher
                und privat bleiben.
              </p>
              <Link href="/">
                <Button size="lg">Jetzt sicher Unterschrift erstellen</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
