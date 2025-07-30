# Deployment Guide für Unterschrift Generator

## Cloudflare Pages Deployment

### Voraussetzungen
1. Cloudflare Account
2. Wrangler CLI installiert: `npm install -g wrangler`
3. Bei Cloudflare angemeldet: `wrangler login`

### Deployment Schritte

#### Option 1: Über Wrangler CLI (Empfohlen)
\`\`\`bash
# 1. Dependencies installieren
npm install

# 2. Projekt bauen
npm run build

# 3. Zu Cloudflare Pages deployen
npm run deploy

# Oder für Preview-Deployment:
npm run deploy:preview
\`\`\`

#### Option 2: Über Cloudflare Dashboard
1. Gehe zu [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Wähle "Pages" aus dem Menü
3. Klicke "Create a project"
4. Verbinde dein Git Repository
5. Konfiguriere Build-Einstellungen:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leer lassen)
   - **Environment variables**: 
     - `NODE_ENV` = `production`

#### Option 3: Vercel Deployment (Alternative)
\`\`\`bash
# Vercel CLI installieren
npm install -g vercel

# Deployen
vercel

# Oder direkt zu Production
vercel --prod
\`\`\`

### Build-Konfiguration prüfen

Stelle sicher, dass dein `next.config.mjs` für statischen Export konfiguriert ist:

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
\`\`\`

### Nach dem Deployment

1. **Custom Domain einrichten** (optional):
   - Gehe zu Pages > dein-projekt > Custom domains
   - Füge deine Domain hinzu

2. **SSL/TLS prüfen**:
   - Sollte automatisch aktiviert sein

3. **Performance testen**:
   - Verwende Tools wie PageSpeed Insights
   - Teste auf verschiedenen Geräten

### Troubleshooting

**Build Fehler?**
- Prüfe `npm run build` lokal
- Stelle sicher, dass alle Dependencies in `package.json` stehen

**Routing Probleme?**
- Prüfe `trailingSlash: true` in next.config.mjs
- Stelle sicher, dass alle Routen korrekt exportiert werden

**Performance Probleme?**
- Aktiviere Cloudflare's Optimierungen
- Prüfe Image-Optimierung

### Monitoring

Nach dem Deployment kannst du folgende Metriken überwachen:
- Page Load Speed
- Core Web Vitals
- Error Rates
- Traffic Analytics (über Cloudflare Analytics)
\`\`\`

Let me also update your Next.js config for better deployment compatibility:

```typescriptreact file="next.config.mjs"
[v0-no-op-code-block-prefix]/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
