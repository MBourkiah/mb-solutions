# 🛡️ Security Guide - MB-Solutions

## ✅ Implementierte Sicherheitsmaßnahmen

### **1. Rate Limiting** ✅
**Was:** Verhindert Spam und Brute-Force Attacks
**Wo:** `/api/contact` Route
**Details:**
- 5 Requests pro Minute pro IP
- Automatische Blockierung bei Überschreitung
- HTTP 429 Response mit Retry-After Header

**Code:** `lib/rate-limit.ts`

---

### **2. Security Headers** ✅
**Was:** HTTP Security Headers zum Schutz vor diversen Attacks
**Wo:** Global Middleware
**Details:**
- `X-Content-Type-Options: nosniff` - Verhindert MIME-Sniffing
- `X-Frame-Options: DENY` - Verhindert Clickjacking
- `X-XSS-Protection` - XSS-Schutz für ältere Browser
- `Content-Security-Policy` - Verhindert Code-Injection
- `Strict-Transport-Security` - Erzwingt HTTPS
- `Referrer-Policy` - Kontrolliert Referrer-Informationen

**Code:** `middleware.ts`

---

### **3. Input Validation & Sanitization** ✅
**Was:** Validiert und säubert User-Inputs
**Wo:** `/api/contact` Route
**Details:**
- Email-Format Validierung (Regex)
- Length-Limits (Name: 2-100, Message: 10-5000 chars)
- HTML-Tag Entfernung (`<>`)
- Trim Whitespace

**Code:** `app/api/contact/route.ts`

---

### **4. CORS-Restriction** ✅
**Was:** Limitiert Cross-Origin Requests
**Wo:** API Routes
**Details:**
- Nur eigene Domain erlaubt
- Kein wildcard `*` mehr
- Schützt vor CSRF

---

### **5. HTTPS Everywhere** ✅
**Was:** Alle Connections verschlüsselt
**Wo:** Vercel automatisch
**Details:**
- Automatisches SSL-Zertifikat
- HTTP → HTTPS Redirect
- TLS 1.3

---

### **6. Next.js Built-in Security** ✅
**Was:** Framework-Level Schutz
**Details:**
- Automatisches HTML-Escaping (XSS-Schutz)
- CSRF-Token für Forms
- Safe JSON Serialization

---

## ⚠️ Zusätzliche Empfehlungen (Optional)

### **1. reCAPTCHA / hCaptcha**
**Warum:** Verhindert Bot-Spam
**Wann:** Wenn viel Spam-Traffic kommt
**Setup:**
```bash
npm install react-google-recaptcha
```

Dann in Contact-Form einbauen.

---

### **2. Redis Rate Limiting (Upstash)**
**Warum:** Besseres Rate-Limiting für große Sites
**Wann:** Wenn >1000 Requests/Tag
**Aktuell:** In-Memory Limiter (reicht für Start)

---

### **3. WAF (Web Application Firewall)**
**Warum:** Enterprise-Level Schutz
**Wann:** Bei kritischen Anwendungen
**Option:** Cloudflare Pro ($20/Monat)

---

### **4. Monitoring & Logging**
**Tools:**
- **Sentry** - Error Tracking
- **LogRocket** - Session Replay
- **Vercel Analytics** - Performance

---

## 🔐 Best Practices

### **Environment Variables:**
```bash
# ❌ NIEMALS im Code:
const apiKey = "sk_live_xxxxx"

# ✅ IMMER in .env.local:
const apiKey = process.env.API_KEY
```

### **Secrets Management:**
1. Lokale Entwicklung: `.env.local`
2. Production: Vercel Environment Variables
3. Niemals zu Git committen (`.gitignore` prüfen!)

### **API Keys:**
- Public Keys: `NEXT_PUBLIC_` Prefix (im Frontend sichtbar)
- Private Keys: Ohne Prefix (nur Backend)

---

## 🚨 Was tun bei einem Security-Incident?

### **1. Sofort:**
- Site über Vercel Rollback zur letzten sicheren Version

### **2. Danach:**
- Logs prüfen (Vercel Dashboard → Logs)
- Environment Variables rotieren
- Passwörter ändern

### **3. Prevention:**
- Sentry einrichten für Error-Monitoring
- Vercel Security Logs aktivieren

---

## 📊 Security Checklist

**Vor jedem Deployment:**
- [ ] Keine Secrets im Code
- [ ] `.env.local` nicht committed
- [ ] Input-Validierung überprüft
- [ ] Rate Limiting funktioniert
- [ ] HTTPS erzwungen
- [ ] CORS korrekt konfiguriert

**Regelmäßig (monatlich):**
- [ ] npm audit
- [ ] Dependencies updaten
- [ ] Security Headers prüfen
- [ ] Logs auf Anomalien checken

---

## 🧪 Security Testing

### **Rate Limiting testen:**
```bash
# 6x schnell hintereinander:
for i in {1..6}; do curl -X POST https://mb-solutions.biz/api/contact -d '{"name":"Test","email":"test@test.de","message":"Test message"}' -H "Content-Type: application/json"; done

# → 5x sollte funktionieren, 6x sollte 429 returnen
```

### **Security Headers prüfen:**
👉 https://securityheaders.com
- Domain eingeben: `mb-solutions.biz`
- Score sollte A oder A+ sein

### **SSL prüfen:**
👉 https://www.ssllabs.com/ssltest/
- Domain testen
- Score sollte A oder A+ sein

---

## 📖 Weitere Ressourcen

- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **Next.js Security:** https://nextjs.org/docs/app/building-your-application/configuring/security-headers
- **Vercel Security:** https://vercel.com/docs/security

---

## 🎯 Dein aktueller Security-Score: **B+**

**Gut geschützt für:**
- ✅ Small Business Websites
- ✅ Portfolio Sites
- ✅ Landing Pages
- ✅ Marketing Sites

**Zusätzlicher Schutz nötig für:**
- ⚠️ E-Commerce (Payment Processing)
- ⚠️ User Authentication
- ⚠️ Sensitive User Data

---

**Stand:** 2025-12-03
**Letzte Überprüfung:** Bei Deployment
