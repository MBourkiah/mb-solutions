# 🚀 Deployment Guide - Ionos Server

## Workflow Übersicht

```
┌─────────────────┐      ┌──────────────┐      ┌─────────────────┐
│  Lokale         │      │   GitHub/    │      │   Ionos Server  │
│  Entwicklung    │─────▶│   GitLab     │─────▶│   Production    │
│  (dein PC)      │ push │   Repository │ pull │   (Live-Site)   │
└─────────────────┘      └──────────────┘      └─────────────────┘
```

**Du arbeitest lokal → Push zu Git → Server zieht Updates**

---

## 🎯 Empfohlene Methode: Git + PM2 + GitHub Actions

### **Schritt 1: Git Repository einrichten**

```bash
# In deinem Projekt-Ordner (falls noch nicht gemacht):
cd premium-website
git init
git add .
git commit -m "Initial commit - Production ready"

# GitHub Repository erstellen und verbinden:
git remote add origin https://github.com/DEIN-USERNAME/mb-solutions.git
git branch -M main
git push -u origin main
```

---

### **Schritt 2: Ionos Server vorbereiten**

**SSH in deinen Ionos Server:**
```bash
ssh root@DEINE-SERVER-IP
# oder: ssh USERNAME@DEINE-SERVER-IP
```

**Installiere Node.js (falls nicht vorhanden):**
```bash
# Node.js 20 LTS installieren
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Überprüfen:
node -v  # sollte v20.x.x zeigen
npm -v
```

**PM2 installieren (Process Manager):**
```bash
sudo npm install -g pm2
```

**Projekt klonen:**
```bash
# In /var/www oder wo du willst:
cd /var/www
git clone https://github.com/DEIN-USERNAME/mb-solutions.git
cd mb-solutions/premium-website
```

**Dependencies installieren & Build:**
```bash
npm install
npm run build
```

**PM2 starten:**
```bash
pm2 start npm --name "mb-solutions" -- start
pm2 save
pm2 startup
```

---

### **Schritt 3: Nginx als Reverse Proxy**

**Nginx installieren:**
```bash
sudo apt update
sudo apt install nginx
```

**Nginx Config erstellen:**
```bash
sudo nano /etc/nginx/sites-available/mb-solutions
```

**Config einfügen:**
```nginx
server {
    listen 80;
    server_name mb-solutions.biz www.mb-solutions.biz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Aktivieren:**
```bash
sudo ln -s /etc/nginx/sites-available/mb-solutions /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

### **Schritt 4: SSL Zertifikat (Let's Encrypt)**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d mb-solutions.biz -d www.mb-solutions.biz
```

Fertig! Deine Seite läuft jetzt unter **https://mb-solutions.biz** 🎉

---

### **Schritt 5: Auto-Deployment einrichten**

**Option A: Manuelles Update (Einfach)**
```bash
# Auf dem Server:
cd /var/www/mb-solutions/premium-website
git pull origin main
npm install
npm run build
pm2 restart mb-solutions
```

**Option B: GitHub Actions (Automatisch)** ⭐ EMPFOHLEN

Erstelle `.github/workflows/deploy.yml` in deinem Projekt:

```yaml
name: Deploy to Ionos

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Deploy to Server
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SERVER_IP }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        script: |
          cd /var/www/mb-solutions/premium-website
          git pull origin main
          npm install
          npm run build
          pm2 restart mb-solutions
```

**Secrets in GitHub einrichten:**
1. GitHub Repo → Settings → Secrets → Actions
2. Füge hinzu:
   - `SERVER_IP`: Deine Ionos Server IP
   - `SERVER_USER`: SSH Username (meist `root`)
   - `SSH_PRIVATE_KEY`: Dein SSH Private Key

**Jetzt:** Einfach `git push` → Automatisches Deployment! 🚀

---

## 🔄 Täglicher Workflow

### **Lokal entwickeln:**
```bash
# In deinem Projekt:
cd C:\MBSolutions\premium-website

# Dev Server starten:
npm run dev

# Änderungen machen...
# Testen auf http://localhost:3000

# Wenn fertig:
git add .
git commit -m "Feature XY hinzugefügt"
git push origin main
```

**→ GitHub Actions deployt automatisch auf deinen Server!**

---

## 🛠️ Nützliche PM2 Befehle

```bash
pm2 list              # Alle laufenden Apps
pm2 logs mb-solutions # Logs ansehen
pm2 restart mb-solutions # Restart
pm2 stop mb-solutions    # Stop
pm2 delete mb-solutions  # Löschen
pm2 monit               # Monitoring Dashboard
```

---

## 🎯 Alternative: Ionos Deploy Now

Falls du **keinen VPS** hast, sondern nur Webhosting:

1. **https://www.ionos.de/hosting/deploy-now** besuchen
2. **GitHub Repository verbinden**
3. **Framework auswählen:** Next.js
4. **Automatisch deployed** ✅

**Vorteile:**
- Kein Server-Management nötig
- Automatisches Scaling
- CDN inklusive
- SSL automatisch

---

## 📊 Environment Variables auf Server

**Erstelle `.env.production` auf dem Server:**
```bash
cd /var/www/mb-solutions/premium-website
nano .env.production
```

**Füge ein:**
```env
NEXT_PUBLIC_SITE_URL=https://mb-solutions.biz
NODE_ENV=production
```

---

## 🔒 Sicherheit

**Firewall einrichten:**
```bash
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

**Fail2Ban (gegen Brute-Force):**
```bash
sudo apt install fail2ban
sudo systemctl enable fail2ban
```

---

## 🐛 Troubleshooting

**Seite lädt nicht?**
```bash
pm2 logs mb-solutions  # Fehler checken
sudo nginx -t          # Nginx Config testen
sudo systemctl status nginx
```

**Port 3000 schon belegt?**
```bash
sudo lsof -i :3000
pm2 restart mb-solutions
```

**Build-Fehler?**
```bash
cd /var/www/mb-solutions/premium-website
rm -rf .next node_modules
npm install
npm run build
pm2 restart mb-solutions
```

---

## 📈 Monitoring einrichten

**PM2 Web Dashboard:**
```bash
pm2 install pm2-server-monit
```

**Uptime Monitoring:**
- https://uptimerobot.com (kostenlos)
- Check alle 5 Minuten

---

## ✅ Checkliste

- [ ] Git Repository erstellt
- [ ] GitHub Actions konfiguriert
- [ ] Server vorbereitet (Node.js, PM2, Nginx)
- [ ] Projekt deployed
- [ ] SSL Zertifikat installiert
- [ ] Domain auf Server zeigt
- [ ] Environment Variables gesetzt
- [ ] Firewall konfiguriert
- [ ] Monitoring eingerichtet
- [ ] Backup-Strategie (Datenbank falls vorhanden)

---

**Du kannst jetzt:**
✅ Lokal entwickeln wie gewohnt
✅ `git push` → Automatisches Deployment
✅ Live-Site läuft 24/7 auf Ionos
✅ Keine Downtime bei Updates

**Viel Erfolg! 🚀**
