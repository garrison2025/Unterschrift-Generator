// app/sitemap.ts

import type { MetadataRoute } from "next"

// 添加下面这一行代码！
// 这会告诉 Next.js 这个路由是静态的，在构建时就生成 sitemap.xml 文件。
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://unterschrift-generator.de",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://unterschrift-generator.de/ratgeber",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://unterschrift-generator.de/impressum",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://unterschrift-generator.de/datenschutz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://unterschriftgenerator.pro",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://unterschriftgenerator.pro/ratgeber",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://unterschriftgenerator.pro/ueber-uns",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://unterschriftgenerator.pro/kontakt",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://unterschriftgenerator.pro/datenschutzrichtlinie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://unterschriftgenerator.pro/nutzungsbedingungen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ]
}
