"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Breadcrumb() {
  const pathname = usePathname()

  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  const breadcrumbItems = [{ name: "Startseite", href: "/", icon: Home }]

  pathSegments.forEach((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/")
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " ")
    breadcrumbItems.push({ name, href })
  })

  if (breadcrumbItems.length <= 1) return null

  return (
    <nav className="bg-gray-50 py-3 border-b" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-600 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                >
                  {index === 0 && item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
