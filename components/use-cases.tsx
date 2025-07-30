import { Briefcase, User, FileText, AtSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function UseCases() {
  const useCases = [
    {
      icon: Briefcase,
      title: "Geschäftlich",
      description: "Verträge, Rechnungen, Angebote",
      examples: ["Verträge unterzeichnen", "Rechnungen signieren", "Geschäftsbriefe"],
    },
    {
      icon: User,
      title: "Privat",
      description: "Kündigungen, Anträge, Vollmachten",
      examples: ["Kündigungsschreiben", "Behördenanträge", "Vollmachten"],
    },
    {
      icon: FileText,
      title: "Bewerbung",
      description: "Bewerbungsschreiben, Lebenslauf",
      examples: ["Anschreiben", "Lebenslauf", "Motivationsschreiben"],
    },
    {
      icon: AtSign,
      title: "Digitale Kommunikation",
      description: "E-Mail-Signaturen, Online-Profile",
      examples: ["E-Mail-Signatur", "Online-Profile", "Digitale Dokumente"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Anwendungsbereiche</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nutzen Sie Ihre Unterschrift in verschiedenen Bereichen des täglichen Lebens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <useCase.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
