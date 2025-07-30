"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Zap, Shield, Star } from "lucide-react"

export function HeroSection() {
  const scrollToGenerator = () => {
    const element = document.getElementById("signature-generator")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm px-4 py-2">
            🚀 Deutschlands #1 Unterschrift Generator - Kostenlos
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Unterschrift Generator -</span>
            <br />
            <span className="text-blue-600">Unterschrift erstellen online</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Erstellen Sie professionelle <strong>unterschriften</strong> kostenlos mit unserem{" "}
            <strong>unterschriften generator</strong>. <strong>Online unterschrift erstellen</strong> war noch nie so
            einfach - für eine <strong>schöne unterschrift erstellen</strong>.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="font-medium">Sofort einsatzbereit</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-medium">100% Datenschutz</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Download className="w-5 h-5 text-purple-500" />
              <span className="font-medium">PNG Download</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">24+ Schriftarten</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToGenerator}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Jetzt Unterschrift erstellen
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToGenerator}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              Mehr erfahren
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-center text-gray-500">
            <p className="mb-4">Vertraut von über 50.000+ Nutzern</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm">✓ DSGVO-konform</div>
              <div className="text-sm">✓ Keine Anmeldung</div>
              <div className="text-sm">✓ Kostenlos</div>
              <div className="text-sm">✓ Sofort-Download</div>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Unser professioneller <strong>Unterschrift Generator</strong> ermöglicht es Ihnen,{" "}
            <strong>unterschrift erstellen kostenlos</strong> und ohne Anmeldung. Egal ob Sie eine{" "}
            <strong>handschriftliche unterschrift erstellen</strong> möchten oder aus unseren{" "}
            <strong>unterschrift ideen</strong> wählen - mit unserem <strong>unterschrift ideen generator</strong>{" "}
            finden Sie die perfekte Lösung. <strong>Unterschrift erstellen online</strong> für alle Ihre Dokumente und
            E-Mails.
          </p>
        </div>
      </div>
    </section>
  )
}
