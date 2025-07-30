import { Card, CardContent } from "@/components/ui/card"

export function SignatureStyles() {
  const styles = [
    { name: "Elegante Schrift", preview: "Max Mustermann", font: "Dancing Script, cursive" },
    { name: "Klassisch Royal", preview: "Max Mustermann", font: "Great Vibes, cursive" },
    { name: "Modern Chic", preview: "Max Mustermann", font: "Allura, cursive" },
    { name: "Business Pro", preview: "Max Mustermann", font: "Satisfy, cursive" },
    { name: "Künstlerisch", preview: "Max Mustermann", font: "Pacifico, cursive" },
    { name: "Traditionell", preview: "Max Mustermann", font: "Kaushan Script, cursive" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unsere Unterschriften-Stile</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wählen Sie aus unserer Kollektion handverlesener Schriftarten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {styles.map((style, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-4">{style.name}</h3>
                <div
                  className="text-3xl text-gray-800 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: style.font }}
                >
                  {style.preview}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
