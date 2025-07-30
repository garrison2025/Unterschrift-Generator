import { Type, Palette, Download } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Type,
      title: "Namen eingeben oder zeichnen",
      description: "Geben Sie Ihren Namen ein oder zeichnen Sie Ihre Unterschrift frei Hand",
    },
    {
      icon: Palette,
      title: "Stil anpassen",
      description: "Wählen Sie aus verschiedenen Schriftarten, Größen und Farben",
    },
    {
      icon: Download,
      title: "Kostenlos herunterladen",
      description: "Laden Sie Ihre Unterschrift als transparente PNG-Datei herunter",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">So funktioniert's</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In nur drei einfachen Schritten zu Ihrer perfekten Unterschrift
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
