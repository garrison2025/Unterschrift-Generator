"use client"

import { useEffect, useState } from "react"

export function MobileOptimizations() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Prevent zoom on input focus for iOS
    if (isMobile) {
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no")
      }
    }
  }, [isMobile])

  return null
}
