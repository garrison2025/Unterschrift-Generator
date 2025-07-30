import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - Unterschrift Generator | Hilfe und Support",
  description:
    "Kontaktieren Sie das Unterschrift Generator Team. Wir helfen Ihnen gerne bei Fragen zu unserem kostenlosen Online-Tool für Unterschriften.",
  keywords: "Kontakt, Support, Hilfe, Unterschrift Generator, Kundenservice, Fragen",
}

export default function KontaktPage() {
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
            <h1 className="text-4xl font-bold mb-8 text-center">Kontakt</h1>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Wir sind für Sie da!</h2>
                <p className="text-gray-700 mb-8">
                  Haben Sie Fragen zu unserem <strong>Unterschrift Generator</strong>? Benötigen Sie Hilfe beim
                  <strong> Unterschrift erstellen online</strong>? Unser Team steht Ihnen gerne zur Verfügung.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail Support</h3>
                      <p className="text-gray-600 mb-2">
                        Für alle Fragen rund um unseren <strong>unterschrift generator kostenlos</strong>
                      </p>
                      <a
                        href="mailto:info@unterschriftgenerator.pro"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        info@unterschriftgenerator.pro
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Antwortzeiten</h3>
                      <p className="text-gray-600">
                        Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Standort</h3>
                      <p className="text-gray-600">
                        Deutschland
                        <br />
                        Entwickelt mit ❤️ für deutsche Nutzer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold mb-3">Häufige Fragen</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      • Wie kann ich <strong>handschriftliche Unterschrift erstellen</strong>?
                    </li>
                    <li>
                      • Ist der <strong>Unterschrift Generator</strong> wirklich kostenlos?
                    </li>
                    <li>
                      • Wie lade ich meine <strong>schöne Unterschrift</strong> herunter?
                    </li>
                    <li>
                      • Sind meine Daten beim <strong>online Unterschrift erstellen</strong> sicher?
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Antworten finden Sie in unserem{" "}
                    <Link href="/#faq" className="text-blue-600 hover:underline">
                      FAQ-Bereich
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vorname">Vorname *</Label>
                      <Input id="vorname" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="nachname">Nachname *</Label>
                      <Input id="nachname" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="betreff">Betreff *</Label>
                    <Input id="betreff" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="nachricht">Ihre Nachricht *</Label>
                    <Textarea
                      id="nachricht"
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Beschreiben Sie Ihr Anliegen oder Ihre Frage..."
                    />
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>* Pflichtfelder</p>
                    <p className="mt-2">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <Link href="/datenschutzrichtlinie" className="text-blue-600 hover:underline">
                        Datenschutzrichtlinie
                      </Link>{" "}
                      zu.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Nachricht senden
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Weitere Hilfe benötigt?</h3>
              <p className="text-gray-600 mb-6">
                Besuchen Sie unsere Hilfeseiten oder probieren Sie direkt unseren{" "}
                <strong>Unterschrift Generator</strong> aus.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#faq">
                  <Button variant="outline">FAQ ansehen</Button>
                </Link>
                <Link href="/">
                  <Button>Unterschrift erstellen</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
