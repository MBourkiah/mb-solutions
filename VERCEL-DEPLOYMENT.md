# Vercel Deployment Guide

## 🚀 Schnellstart

Dieses Projekt ist für Vercel optimiert und kann in wenigen Schritten deployed werden.

### Voraussetzungen

- GitHub Account (✅ bereits vorhanden)
- Vercel Account ([vercel.com](https://vercel.com))

## 📋 Deployment-Schritte

### 1. Vercel Account einrichten

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf **"Sign Up"** oder **"Login"**
3. Wähle **"Continue with GitHub"**
4. Autorisiere Vercel für dein GitHub-Konto

### 2. Projekt importieren

1. Klicke auf **"Add New Project"**
2. Wähle dein Repository: **`MBourkiah/mb-solutions`**
3. Vercel erkennt automatisch Next.js

### 3. Projekt-Einstellungen

Vercel sollte automatisch erkennen:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Keine Änderungen nötig!** Die `vercel.json` Datei übernimmt die Konfiguration.

### 4. Environment Variables (optional)

Falls benötigt, füge Environment Variables hinzu:

```bash
# Beispiel (nur bei Bedarf)
NEXT_PUBLIC_SITE_URL=https://deine-domain.vercel.app
```

### 5. Deploy!

Klicke auf **"Deploy"** und warte 2-3 Minuten.

## ✅ Nach dem Deployment

### Automatische Deployments

Jeder Push auf den `main` Branch triggert automatisch ein neues Deployment.

```bash
# Lokale Änderungen committen und pushen
git add .
git commit -m "Update: Deine Änderung"
git push origin main
```

Vercel baut und deployed automatisch!

### Custom Domain einrichten

1. Gehe zu **Project Settings** → **Domains**
2. Füge deine Domain hinzu (z.B. `mb-solutions.biz`)
3. Folge den DNS-Anweisungen

Vercel kümmert sich automatisch um:
- ✅ SSL/HTTPS-Zertifikat
- ✅ CDN-Optimierung
- ✅ Edge-Functions
- ✅ Image-Optimierung

## 🔧 Vercel-spezifische Features

### Performance-Optimierungen (bereits aktiviert)

- **Region**: Frankfurt (fra1) für optimale EU-Performance
- **Edge Network**: Automatisches Global CDN
- **Image Optimization**: Next.js Image-Komponente
- **Cache Headers**: Optimiert für statische Assets

### Security Headers (bereits konfiguriert)

```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

### Analytics (optional aktivieren)

1. Gehe zu **Project Settings** → **Analytics**
2. Aktiviere **Web Analytics**
3. Keine Code-Änderungen nötig!

## 🐛 Troubleshooting

### Build schlägt fehl?

**Lösung 1**: Prüfe die Build-Logs in Vercel
```bash
# Lokaler Test
npm run build
```

**Lösung 2**: Node.js Version prüfen
- Vercel verwendet standardmäßig Node.js 20.x
- Projekt ist kompatibel mit Node.js 18.x+

### Deployment dauert zu lange?

- Normal: 2-3 Minuten
- Bei erstem Deployment: bis zu 5 Minuten
- Bei Dependencies-Änderungen: etwas länger

### Domain funktioniert nicht?

1. Prüfe DNS-Einstellungen (48h Propagation)
2. Stelle sicher, dass SSL-Zertifikat aktiv ist
3. Cache leeren: Strg + Shift + R

## 📊 Monitoring & Performance

### Vercel Dashboard

- **Deployments**: Alle Deployment-History
- **Analytics**: Traffic & Performance
- **Logs**: Runtime & Build Logs
- **Speed Insights**: Core Web Vitals

### Empfohlene Metriken

- ✅ **Lighthouse Score**: 95+
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3.5s
- ✅ **Largest Contentful Paint**: < 2.5s

## 🔐 Environment Variables Best Practices

**Niemals committen:**
- API Keys
- Datenbank-Credentials
- Private Tokens

**Nur über Vercel Dashboard hinzufügen!**

## 📚 Weitere Ressourcen

- [Vercel Docs](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

## 💡 Pro-Tipps

1. **Preview Deployments**: Jeder Branch bekommt eine eigene URL
2. **Rollback**: Einfach zu vorherigem Deployment zurückkehren
3. **Team-Kollaboration**: Lade Team-Mitglieder ein
4. **Function Logs**: Live-Debugging direkt in Vercel

---

**Repository**: [https://github.com/MBourkiah/mb-solutions](https://github.com/MBourkiah/mb-solutions)

**Maintainer**: MBourkiah (m.bourkiah@gmail.com)

**Letzte Aktualisierung**: Januar 2026
