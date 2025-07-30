import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - Unterschrift Generator | AGB",
  description:
    "Nutzungsbedingungen für den kostenlosen Unterschrift Generator. Erfahren Sie mehr über die Nutzung unseres Online-Tools für digitale Unterschriften.",
  keywords: "Nutzungsbedingungen, AGB, Unterschrift Generator, Rechtliches, Nutzung",
}

export default function NutzungsbedingungenPage() {
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
            <h1 className="text-4xl font-bold mb-8">Nutzungsbedingungen</h1>

            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-800">Willkommen beim Unterschrift Generator</h2>
              </div>
              <p className="text-blue-700">
                Diese Nutzungsbedingungen regeln die Verwendung unseres kostenlosen{" "}
                <strong>Unterschrift Generators</strong>. Durch die Nutzung unserer Website stimmen Sie diesen
                Bedingungen zu.
              </p>
            </div>

            <div className="prose max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Anbieter und Geltungsbereich</h2>
                <p className="text-gray-700 mb-4">
                  Diese Nutzungsbedingungen gelten für die Website <strong>unterschriftgenerator.pro</strong>
                  und alle damit verbundenen Dienste.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Anbieter:</strong> Unterschrift Generator
                    <br />
                    <strong>E-Mail:</strong> info@unterschriftgenerator.pro
                    <br />
                    <strong>Website:</strong> unterschriftgenerator.pro
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Beschreibung des Dienstes</h2>
                <p className="text-gray-700 mb-4">
                  Unser <strong>Unterschrift Generator</strong> ist ein kostenloses Online-Tool, das es Nutzern
                  ermöglicht:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <h3 className="font-bold mb-2">Unterschrift erstellen</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Online Unterschrift erstellen</strong> mit über 24 professionellen Schriftarten
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <h3 className="font-bold mb-2">Handschrift-Tool</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Handschriftliche Unterschrift erstellen</strong> per Maus oder Touchscreen
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <h3 className="font-bold mb-2">E-Mail-Signatur</h3>
                    <p className="text-sm text-gray-700">Professionelle HTML-E-Mail-Signaturen erstellen</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Kostenlose Nutzung</h2>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-green-800">
                    <strong>100% Kostenlos:</strong> Unser <strong>unterschrift generator kostenlos</strong>
                    ist vollständig gratis und bleibt es auch. Keine versteckten Kosten, keine Abonnements.
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Unbegrenzte Nutzung aller Funktionen</li>
                  <li>Keine Registrierung erforderlich</li>
                  <li>Keine zeitlichen Beschränkungen</li>
                  <li>Alle Downloads kostenlos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Erlaubte Nutzung</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-green-800">Erlaubt</h3>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Private Nutzung für persönliche Dokumente</li>
                      <li>• Geschäftliche Nutzung für Unternehmen</li>
                      <li>
                        • <strong>Schöne Unterschrift</strong> für Bewerbungen
                      </li>
                      <li>• E-Mail-Signaturen für berufliche Zwecke</li>
                      <li>• Verwendung in Verträgen und Dokumenten</li>
                    </ul>
                  </div>
                  <div className="border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <h3 className="font-bold text-red-800">Nicht erlaubt</h3>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Missbrauch für betrügerische Zwecke</li>
                      <li>• Fälschung fremder Unterschriften</li>
                      <li>• Automatisierte Massennutzung</li>
                      <li>• Weiterverkauf der generierten Unterschriften</li>
                      <li>• Reverse Engineering des Tools</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Rechtliche Hinweise zu Unterschriften</h2>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2">Wichtiger Hinweis</h3>
                      <p className="text-yellow-700 text-sm">
                        Die rechtliche Gültigkeit digitaler Unterschriften hängt vom Kontext und den lokalen Gesetzen
                        ab. Informieren Sie sich über die Anforderungen in Ihrem Anwendungsfall.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Einfache elektronische Signatur:</strong> Die mit unserem{" "}
                    <strong>Unterschrift Generator</strong>
                    erstellten Signaturen gelten als einfache elektronische Signaturen nach eIDAS-Verordnung.
                  </p>
                  <p>
                    <strong>Anwendungsbereiche:</strong> Geeignet für viele alltägliche Dokumente wie Bewerbungen,
                    interne Verträge, E-Mails und ähnliche Zwecke.
                  </p>
                  <p>
                    <strong>Nicht geeignet für:</strong> Notarielle Dokumente, Testamente oder andere Dokumente, die
                    qualifizierte elektronische Signaturen erfordern.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Datenschutz und Sicherheit</h2>
                <p className="text-gray-700 mb-4">
                  Beim <strong>unterschrift erstellen online</strong> mit unserem Tool:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Alle Daten werden nur lokal in Ihrem Browser verarbeitet</li>
                  <li>Keine Übertragung Ihrer Unterschriften an unsere Server</li>
                  <li>Automatische Löschung beim Schließen des Browsers</li>
                  <li>100% DSGVO-konform</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Details finden Sie in unserer{" "}
                  <Link href="/datenschutzrichtlinie" className="text-blue-600 hover:underline">
                    Datenschutzrichtlinie
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Verfügbarkeit und technische Anforderungen</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Verfügbarkeit:</strong> Wir bemühen uns um eine hohe Verfügbarkeit unseres
                    <strong> Unterschrift Generators</strong>, können jedoch keine 100%ige Verfügbarkeit garantieren.
                  </p>
                  <p>
                    <strong>Technische Anforderungen:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Moderner Webbrowser (Chrome, Firefox, Safari, Edge)</li>
                    <li>JavaScript aktiviert</li>
                    <li>Internetverbindung für den ersten Aufruf</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Haftungsausschluss</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Nutzung auf eigene Verantwortung:</strong> Die Nutzung unseres
                    <strong> professionelle unterschrift generator</strong> erfolgt auf eigene Verantwortung.
                  </p>
                  <p>
                    <strong>Keine Gewährleistung:</strong> Wir übernehmen keine Gewährleistung für:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Die rechtliche Gültigkeit der erstellten Unterschriften</li>
                    <li>Die ununterbrochene Verfügbarkeit des Dienstes</li>
                    <li>Die Kompatibilität mit allen Browsern und Geräten</li>
                  </ul>
                  <p>
                    <strong>Haftungsbegrenzung:</strong> Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit
                    beschränkt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Änderungen der Nutzungsbedingungen</h2>
                <p className="text-gray-700">
                  Wir behalten uns vor, diese Nutzungsbedingungen bei Bedarf zu ändern. Änderungen werden auf dieser
                  Seite veröffentlicht und treten sofort in Kraft.
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Empfehlung:</strong> Überprüfen Sie diese Seite regelmäßig auf Aktualisierungen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Kontakt und Streitbeilegung</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Kontakt:</strong> Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns unter:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>E-Mail:</strong> info@unterschriftgenerator.pro
                      <br />
                      <strong>Betreff:</strong> Nutzungsbedingungen - Unterschrift Generator
                    </p>
                  </div>
                  <p>
                    <strong>Anwendbares Recht:</strong> Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                  </p>
                  <p>
                    <strong>Gerichtsstand:</strong> Für alle Streitigkeiten ist der Gerichtsstand Deutschland.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Salvatorische Klausel</h2>
                <p className="text-gray-700">
                  Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein oder werden, bleibt die
                  Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Stand:</strong> 30. Juli 2025
                </p>
              </section>
            </div>

            <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg">
              <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Bereit zum Starten?</h3>
              <p className="text-gray-700 mb-4">
                Nutzen Sie jetzt unseren <strong>Unterschrift Generator</strong> und erstellen Sie Ihre perfekte{" "}
                <strong>schöne Unterschrift</strong> kostenlos!
              </p>
              <Link href="/">
                <Button size="lg">Jetzt Unterschrift erstellen</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
