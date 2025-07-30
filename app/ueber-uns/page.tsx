import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Zap, Heart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Logo } from "@/components/logo"

export const metadata: Metadata = {
  title: "Über uns - Unterschrift Generator | Unser Team und Mission",
  description:
    "Erfahren Sie mehr über das Team hinter dem führenden Unterschrift Generator. Unsere Mission: Sichere, kostenlose und benutzerfreundliche Unterschriften für alle.",
  keywords: "Über uns, Unterschrift Generator Team, Mission, Unternehmen, kostenlose Unterschriften",
}

export default function UeberUnsPage() {
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
            <h1 className="text-4xl font-bold mb-8 text-center">Über uns</h1>

            <div className="prose max-w-none">
              <div className="text-center mb-12">
                <Logo size="xl" showText={false} className="mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Willkommen beim Unterschrift Generator</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Wir sind das Team hinter dem führenden kostenlosen <strong>Unterschrift Generator</strong> in
                  Deutschland. Seit 2024 helfen wir Menschen dabei, professionelle Unterschriften schnell, sicher und
                  kostenlos zu erstellen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Unsere Mission</h3>
                  <p className="text-gray-700 mb-4">
                    Unser Ziel ist es, jedem Menschen den Zugang zu professionellen digitalen Unterschriften zu
                    ermöglichen. Wir glauben, dass das <strong>Unterschrift erstellen online</strong> einfach, sicher
                    und für jeden kostenlos verfügbar sein sollte.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Mit unserem <strong>Unterschrift Generator</strong> haben bereits über 10.000 Nutzer ihre perfekte
                    Signatur gefunden - von Studenten für Bewerbungen bis hin zu Geschäftsführern für wichtige Verträge.
                  </p>
                  <p className="text-gray-700">
                    Wir entwickeln kontinuierlich neue Funktionen und verbessern unser Tool, um Ihnen die beste
                    Erfahrung beim <strong>online Unterschrift erstellen</strong> zu bieten.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Unsere Werte</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Datenschutz First</h4>
                        <p className="text-gray-600 text-sm">
                          Ihre Daten bleiben bei Ihnen. Alle Unterschriften werden lokal erstellt und niemals
                          gespeichert.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Benutzerfreundlichkeit</h4>
                        <p className="text-gray-600 text-sm">
                          Einfache Bedienung für alle - von Technik-Neulingen bis zu Profis.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Kostenlos für alle</h4>
                        <p className="text-gray-600 text-sm">
                          Professionelle Unterschriften sollten nicht vom Geldbeutel abhängen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Was macht uns besonders?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24+</div>
                    <div className="font-semibold mb-2">Schriftarten</div>
                    <p className="text-sm text-gray-600">
                      Von elegant bis geschäftlich - für jeden Stil die richtige <strong>schöne Unterschrift</strong>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">10.000+</div>
                    <div className="font-semibold mb-2">Zufriedene Nutzer</div>
                    <p className="text-sm text-gray-600">
                      Täglich vertrauen Menschen unserem <strong>unterschrift generator kostenlos</strong>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="font-semibold mb-2">Datenschutz</div>
                    <p className="text-sm text-gray-600">DSGVO-konform und sicher - Ihre Privatsphäre ist garantiert</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-6">Unser Versprechen an Sie</h3>
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-700 mb-6">
                    Wir verpflichten uns, Ihnen stets den besten Service zu bieten. Unser{" "}
                    <strong>Unterschrift Generator</strong>
                    wird kontinuierlich weiterentwickelt, um Ihren Bedürfnissen gerecht zu werden.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">✓ Immer kostenlos</h4>
                      <p className="text-gray-600">Keine versteckten Kosten, keine Abonnements</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">✓ Ständige Verbesserungen</h4>
                      <p className="text-gray-600">Neue Features und Optimierungen</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">✓ Schneller Support</h4>
                      <p className="text-gray-600">Bei Fragen sind wir für Sie da</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">✓ Höchste Sicherheit</h4>
                      <p className="text-gray-600">Ihre Daten bleiben privat und sicher</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Vielen Dank für Ihr Vertrauen!</h3>
                <p className="mb-6">
                  Über 10.000 Menschen haben bereits ihre perfekte Unterschrift mit unserem Tool erstellt. Werden auch
                  Sie Teil unserer Community!
                </p>
                <Link href="/">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Jetzt Unterschrift erstellen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
