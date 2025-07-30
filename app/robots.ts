// app/robots.ts

import type { MetadataRoute } from "next"

// 添加下面这一行代码！
// 这会告诉 Next.js 在构建时就生成一个静态的 robots.txt 文件。
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://unterschrift-generator.de/sitemap.xml",
  }
}
