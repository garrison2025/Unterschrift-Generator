import { Type, PenTool, Mail, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  const features = [
    {
      icon: Type,
      title: "Professionelle Schriftarten",
      description: "Über 20 handverlesene Schriftarten für jeden Anlass und Geschmack",
    },
    {
      icon: PenTool,
      title: "Echte Handschrift",
      description: "Zeichnen Sie Ihre Unterschrift natürlich mit Maus oder Touchscreen",
    },
    {
      icon: Mail,
      title: "E-Mail-Signatur Tool",
      description: "Erstellen Sie professionelle HTML-E-Mail-Signaturen in Sekunden",
    },
    {
      icon: Shield,
      title: "100% Datenschutz",
      description: "Alle Daten werden lokal verarbeitet und niemals gespeichert oder übertragen",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Warum wir?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie die Vorteile unseres Unterschriften-Generators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
