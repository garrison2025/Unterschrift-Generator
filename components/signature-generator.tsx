"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Download, Trash2, Type, PenTool, Mail, RotateCcw, Copy } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

const SIGNATURE_FONTS = [
  { name: "Elegante Schrift", style: "Dancing Script, cursive", category: "elegant" },
  { name: "Klassisch Royal", style: "Great Vibes, cursive", category: "classic" },
  { name: "Modern Chic", style: "Allura, cursive", category: "modern" },
  { name: "Business Pro", style: "Satisfy, cursive", category: "business" },
  { name: "Künstlerisch", style: "Pacifico, cursive", category: "artistic" },
  { name: "Traditionell", style: "Kaushan Script, cursive", category: "traditional" },
  { name: "Luxus Stil", style: "Alex Brush, cursive", category: "luxury" },
  { name: "Romantisch", style: "Amatic SC, cursive", category: "romantic" },
  { name: "Minimalistisch", style: "Caveat, cursive", category: "minimal" },
  { name: "Vintage Charm", style: "Courgette, cursive", category: "vintage" },
  { name: "Dynamisch", style: "Damion, cursive", category: "dynamic" },
  { name: "Formal", style: "Euphoria Script, cursive", category: "formal" },
  { name: "Handgeschrieben", style: "Homemade Apple, cursive", category: "handwritten" },
  { name: "Kreativ", style: "Indie Flower, cursive", category: "creative" },
  { name: "Professionell", style: "Josefin Slab, serif", category: "professional" },
  { name: "Kalligrafisch", style: "Leckerli One, cursive", category: "calligraphy" },
  { name: "Persönlich", style: "Marck Script, cursive", category: "personal" },
  { name: "Natürlich", style: "Nothing You Could Do, cursive", category: "natural" },
  { name: "Spielerisch", style: "Patrick Hand, cursive", category: "playful" },
  { name: "Raffiniert", style: "Pinyon Script, cursive", category: "sophisticated" },
  { name: "Zeitlos", style: "Qwigley, cursive", category: "timeless" },
  { name: "Stilvoll", style: "Rouge Script, cursive", category: "stylish" },
  { name: "Einzigartig", style: "Sacramento, cursive", category: "unique" },
  { name: "Zart", style: "Tangerine, cursive", category: "delicate" },
]

const PRESET_COLORS = [
  { name: "Schwarz", value: "#000000" },
  { name: "Dunkelblau", value: "#1e40af" },
  { name: "Dunkelgrün", value: "#166534" },
  { name: "Bordeaux", value: "#7c2d12" },
  { name: "Lila", value: "#7c3aed" },
  { name: "Grau", value: "#374151" },
  { name: "Braun", value: "#92400e" },
  { name: "Teal", value: "#0f766e" },
]

export function SignatureGenerator() {
  const [activeTab, setActiveTab] = useState("type")
  const [name, setName] = useState("")
  const [fontSize, setFontSize] = useState([48])
  const [color, setColor] = useState("#000000")
  const [selectedFont, setSelectedFont] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderlined, setIsUnderlined] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [rotation, setRotation] = useState([0])
  const [letterSpacing, setLetterSpacing] = useState([0])

  // Drawing canvas state
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [strokeWidth, setStrokeWidth] = useState([3])
  const [canvasHistory, setCanvasHistory] = useState<ImageData[]>([])

  // Email signature state
  const [emailData, setEmailData] = useState({
    name: "",
    position: "",
    company: "",
    phone: "",
    website: "",
    email: "",
  })

  // Save canvas state for undo functionality
  const saveCanvasState = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    setCanvasHistory((prev) => [...prev.slice(-9), imageData]) // Keep last 10 states
  }

  // Undo last drawing action
  const undoCanvas = () => {
    if (canvasHistory.length === 0) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const lastState = canvasHistory[canvasHistory.length - 1]
    ctx.putImageData(lastState, 0, 0)
    setCanvasHistory((prev) => prev.slice(0, -1))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    // Set white background
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Save initial state
    saveCanvasState()
  }, [])

  const getEventPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    if ("touches" in e) {
      const touch = e.touches[0] || e.changedTouches[0]
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      }
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      }
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    saveCanvasState() // Save state before drawing
    const canvas = canvasRef.current
    if (!canvas) return

    const pos = getEventPos(e)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
    setIsDrawing(true)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const pos = getEventPos(e)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.lineWidth = strokeWidth[0]
    ctx.strokeStyle = color
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    setCanvasHistory([])
  }

  const downloadSignatureFont = (fontIndex: number) => {
    if (!name.trim()) {
      alert("Bitte geben Sie Ihren Namen ein, bevor Sie die Unterschrift herunterladen.")
      return
    }

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set high resolution for better quality
    const scale = 3
    canvas.width = 800 * scale
    canvas.height = 200 * scale
    ctx.scale(scale, scale)

    // Set transparent background
    ctx.clearRect(0, 0, 800, 200)

    // Set font and style
    const font = SIGNATURE_FONTS[fontIndex]
    const fontFamily = font.style.split(",")[0].replace(/['"]/g, "")
    let fontStyle = ""
    if (isBold) fontStyle += "bold "
    if (isItalic) fontStyle += "italic "

    ctx.font = `${fontStyle}${fontSize[0]}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Apply rotation
    ctx.save()
    ctx.translate(400, 100)
    ctx.rotate((rotation[0] * Math.PI) / 180)

    // Add text shadow for better quality
    ctx.shadowColor = "rgba(0,0,0,0.1)"
    ctx.shadowBlur = 2
    ctx.shadowOffsetX = 1
    ctx.shadowOffsetY = 1

    // Apply letter spacing
    if (letterSpacing[0] !== 0) {
      const letters = name.split("")
      let totalWidth = 0
      letters.forEach((letter) => {
        totalWidth += ctx.measureText(letter).width + letterSpacing[0]
      })

      let x = -totalWidth / 2
      letters.forEach((letter) => {
        ctx.fillText(letter, x, 0)
        x += ctx.measureText(letter).width + letterSpacing[0]
      })
    } else {
      ctx.fillText(name, 0, 0)
    }

    ctx.restore()

    // Add underline if selected
    if (isUnderlined) {
      const textWidth = ctx.measureText(name).width
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.moveTo(400 - textWidth / 2, 130)
      ctx.lineTo(400 + textWidth / 2, 130)
      ctx.stroke()
    }

    // Create download
    canvas.toBlob((blob) => {
      if (!blob) return

      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = `unterschrift-${name.toLowerCase().replace(/\s+/g, "-")}-${font.name.toLowerCase().replace(/\s+/g, "-")}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, "image/png")
  }

  const downloadCanvasSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Check if canvas has content
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const hasContent = imageData.data.some((channel, index) => index % 4 === 3 && channel !== 0)

    if (!hasContent) {
      alert("Bitte zeichnen Sie zuerst Ihre Unterschrift.")
      return
    }

    canvas.toBlob((blob) => {
      if (!blob) return

      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = `handgezeichnete-unterschrift-${new Date().getTime()}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, "image/png")
  }

  const downloadEmailSignature = () => {
    if (!emailData.name.trim()) {
      alert("Bitte geben Sie mindestens Ihren Namen ein.")
      return
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>E-Mail Signatur</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.4; color: #333;">
        <div style="border-left: 4px solid #3B82F6; padding-left: 15px;">
            <div style="font-weight: bold; font-size: 16px; margin-bottom: 2px;">${emailData.name}</div>
            ${emailData.position ? `<div style="color: #666; margin-bottom: 2px;">${emailData.position}</div>` : ""}
            ${emailData.company ? `<div style="font-weight: 500; margin-bottom: 8px;">${emailData.company}</div>` : ""}
            <div style="font-size: 12px; color: #666;">
                ${emailData.phone ? `<div style="margin-bottom: 2px;">📞 ${emailData.phone}</div>` : ""}
                ${emailData.email ? `<div style="margin-bottom: 2px;">✉️ ${emailData.email}</div>` : ""}
                ${emailData.website ? `<div>🌐 <a href="http://${emailData.website}" style="color: #3B82F6; text-decoration: none;">${emailData.website}</a></div>` : ""}
            </div>
        </div>
    </div>
</body>
</html>`

    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = `email-signatur-${emailData.name.toLowerCase().replace(/\s+/g, "-")}.html`
    link.href = url
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Also copy to clipboard
    const textContent = `${emailData.name}${emailData.position ? `\n${emailData.position}` : ""}${emailData.company ? `\n${emailData.company}` : ""}${emailData.phone ? `\n📞 ${emailData.phone}` : ""}${emailData.email ? `\n✉️ ${emailData.email}` : ""}${emailData.website ? `\n🌐 ${emailData.website}` : ""}`

    navigator.clipboard
      .writeText(textContent)
      .then(() => {
        alert("E-Mail-Signatur wurde heruntergeladen und in die Zwischenablage kopiert!")
      })
      .catch(() => {
        alert("E-Mail-Signatur wurde erfolgreich heruntergeladen!")
      })
  }

  const downloadSignature = () => {
    if (activeTab === "type") {
      downloadSignatureFont(selectedFont)
    } else if (activeTab === "draw") {
      downloadCanvasSignature()
    } else if (activeTab === "email") {
      downloadEmailSignature()
    }
  }

  const copySignatureToClipboard = async () => {
    if (activeTab === "type" && name.trim()) {
      try {
        await navigator.clipboard.writeText(name)
        alert("Unterschrift wurde in die Zwischenablage kopiert!")
      } catch (err) {
        alert("Kopieren fehlgeschlagen. Bitte versuchen Sie es erneut.")
      }
    }
  }

  const categories = ["all", "elegant", "classic", "modern", "business", "artistic", "luxury"]

  // Add touch support for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    saveCanvasState()
    const canvas = canvasRef.current
    if (!canvas) return

    const pos = getEventPos(e)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
    setIsDrawing(true)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const pos = getEventPos(e)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.lineWidth = strokeWidth[0]
    ctx.strokeStyle = color
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    setIsDrawing(false)
  }

  return (
    <section id="signature-generator" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 Professioneller Unterschrift Generator
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ihr Unterschriften-Generator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Wählen Sie zwischen drei verschiedenen Methoden, um Ihre perfekte Unterschrift zu erstellen
          </p>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardHeader className="p-4 sm:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger
                  value="type"
                  className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 sm:py-2 text-xs sm:text-sm"
                >
                  <Type className="w-4 h-4" />
                  <span>Tippen</span>
                </TabsTrigger>
                <TabsTrigger
                  value="draw"
                  className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 sm:py-2 text-xs sm:text-sm"
                >
                  <PenTool className="w-4 h-4" />
                  <span>Zeichnen</span>
                </TabsTrigger>
                <TabsTrigger
                  value="email"
                  className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 sm:py-2 text-xs sm:text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>E-Mail</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <Tabs value={activeTab} className="w-full">
              {/* Type Tab */}
              <TabsContent value="type" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ihr Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Max Mustermann"
                      className="text-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label>Größe: {fontSize[0]}px</Label>
                      <Slider
                        value={fontSize}
                        onValueChange={setFontSize}
                        max={80}
                        min={20}
                        step={2}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Rotation: {rotation[0]}°</Label>
                      <Slider
                        value={rotation}
                        onValueChange={setRotation}
                        max={15}
                        min={-15}
                        step={1}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Buchstabenabstand: {letterSpacing[0]}px</Label>
                      <Slider
                        value={letterSpacing}
                        onValueChange={setLetterSpacing}
                        max={10}
                        min={-2}
                        step={1}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Farbe wählen</Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {PRESET_COLORS.map((presetColor) => (
                        <button
                          key={presetColor.value}
                          onClick={() => setColor(presetColor.value)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            color === presetColor.value ? "border-gray-800 scale-110" : "border-gray-300"
                          }`}
                          style={{ backgroundColor: presetColor.value }}
                          title={presetColor.name}
                        />
                      ))}
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="w-8 h-8 rounded border cursor-pointer"
                          title="Benutzerdefinierte Farbe"
                        />
                        <span className="text-sm text-gray-600">{color}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="bold" checked={isBold} onCheckedChange={setIsBold} />
                      <Label htmlFor="bold" className="text-sm">
                        Fett
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="italic" checked={isItalic} onCheckedChange={setIsItalic} />
                      <Label htmlFor="italic" className="text-sm">
                        Kursiv
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="underline" checked={isUnderlined} onCheckedChange={setIsUnderlined} />
                      <Label htmlFor="underline" className="text-sm">
                        Unterstrichen
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Font Preview Grid */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      size="sm"
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="text-xs"
                    >
                      {category === "all" ? "Alle" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {SIGNATURE_FONTS.map(
                    (font, index) =>
                      (selectedCategory === "all" || font.category === selectedCategory) && (
                        <div
                          key={index}
                          className={`p-3 sm:p-4 border-2 rounded-lg transition-all ${
                            selectedFont === index
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-center">
                            <p className="text-xs text-gray-500 mb-1 capitalize">{font.category}</p>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3 truncate">
                              {font.name}
                            </p>
                            <div
                              className="cursor-pointer mb-3 sm:mb-4 min-h-[30px] sm:min-h-[40px] flex items-center justify-center"
                              onClick={() => setSelectedFont(index)}
                              style={{
                                fontFamily: font.style,
                                fontSize: `${Math.min(fontSize[0] * 0.7, 28)}px`,
                                color: color,
                                fontStyle: isItalic ? "italic" : "normal",
                                textDecoration: isUnderlined ? "underline" : "none",
                                fontWeight: isBold ? "bold" : "normal",
                                transform: `rotate(${rotation[0]}deg)`,
                                letterSpacing: `${letterSpacing[0]}px`,
                              }}
                            >
                              <span className="truncate max-w-full">{name || "Max Mustermann"}</span>
                            </div>
                            <div className="flex gap-1 sm:gap-2">
                              <Button
                                size="sm"
                                variant={selectedFont === index ? "default" : "outline"}
                                onClick={() => setSelectedFont(index)}
                                className="flex-1 text-xs px-2 py-1 h-8"
                              >
                                Wählen
                              </Button>
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => downloadSignatureFont(index)}
                                className="px-2 py-1 h-8 w-8"
                                disabled={!name.trim()}
                                title="Herunterladen"
                              >
                                <Download className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </TabsContent>

              {/* Draw Tab */}
              <TabsContent value="draw" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Strichstärke: {strokeWidth[0]}px</Label>
                    <Slider
                      value={strokeWidth}
                      onValueChange={setStrokeWidth}
                      max={15}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Farbe</Label>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-12 h-10 rounded border cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">{color}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={undoCanvas} disabled={canvasHistory.length === 0}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Rückgängig
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={clearCanvas}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Löschen
                    </Button>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 sm:p-4 bg-white">
                    <canvas
                      ref={canvasRef}
                      width={800}
                      height={300}
                      className="w-full border rounded cursor-crosshair bg-white touch-none max-w-full"
                      style={{ height: "auto", aspectRatio: "8/3" }}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    />
                    <p className="text-xs sm:text-sm text-gray-500 text-center mt-2">
                      Zeichnen Sie Ihre Unterschrift mit der Maus oder dem Touchscreen
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Email Tab */}
              <TabsContent value="email" className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email-name" className="text-sm">
                        Name *
                      </Label>
                      <Input
                        id="email-name"
                        value={emailData.name}
                        onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="position" className="text-sm">
                        Position
                      </Label>
                      <Input
                        id="position"
                        value={emailData.position}
                        onChange={(e) => setEmailData({ ...emailData, position: e.target.value })}
                        placeholder="Geschäftsführer"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-sm">
                        Unternehmen
                      </Label>
                      <Input
                        id="company"
                        value={emailData.company}
                        onChange={(e) => setEmailData({ ...emailData, company: e.target.value })}
                        placeholder="Muster GmbH"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        value={emailData.phone}
                        onChange={(e) => setEmailData({ ...emailData, phone: e.target.value })}
                        placeholder="+49 123 456789"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email-address" className="text-sm">
                        E-Mail
                      </Label>
                      <Input
                        id="email-address"
                        type="email"
                        value={emailData.email}
                        onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
                        placeholder="max@beispiel.de"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-sm">
                        Website
                      </Label>
                      <Input
                        id="website"
                        value={emailData.website}
                        onChange={(e) => setEmailData({ ...emailData, website: e.target.value })}
                        placeholder="www.beispiel.de"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Email Signature Preview */}
                <div className="border rounded-lg p-4 bg-white">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Vorschau Ihrer E-Mail-Signatur:
                  </h4>
                  <div className="border-l-4 border-blue-500 pl-4 bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-gray-800 text-lg">{emailData.name || "Max Mustermann"}</div>
                    {emailData.position && <div className="text-gray-600 text-sm">{emailData.position}</div>}
                    {emailData.company && <div className="font-medium text-gray-800 mt-1">{emailData.company}</div>}
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      {emailData.phone && <div>📞 {emailData.phone}</div>}
                      {emailData.email && <div>✉️ {emailData.email}</div>}
                      {emailData.website && (
                        <div>
                          🌐 <span className="text-blue-600">{emailData.website}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Download Button */}
            <div className="text-center pt-6 border-t">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8"
                  onClick={downloadSignature}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Unterschrift herunterladen
                </Button>
                {activeTab === "type" && name.trim() && (
                  <Button size="lg" variant="outline" onClick={copySignatureToClipboard}>
                    <Copy className="w-5 h-5 mr-2" />
                    Text kopieren
                  </Button>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {activeTab === "email" ? "Als HTML-Datei und in Zwischenablage" : "Als transparente PNG-Datei"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
