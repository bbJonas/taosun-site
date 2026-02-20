# Taosun Website (statische Version)

Dieses Repository enthält die aktuelle Version der Website von **Taosun GmbH** als **statische Dateien** (HTML/CSS/JS + Assets).
Deployment erfolgt aktuell **manuell per FTP** (selektiver Upload).

## Struktur
- `index.html` – Startseite
- `impressum.html` – Impressum
- `style.css` – Styles
- `script.js` – JavaScript
- `images/` – Bilder/Assets
- `docs/` – Brand, SEO, Architektur, Tasks (nicht für Deployment gedacht)

## Lokal testen (Standard)
Wir nutzen in VS Code die Extension **Live Server**:
1. Extension installieren: “Live Server” (Ritwick Dey)
2. `index.html` öffnen
3. unten rechts “Go Live” klicken

## Deployment (aktuell, manuell per FTP)
Auf den Webspace hochladen:
- `index.html`, `impressum.html`, `style.css`, `script.js`, `images/`, `taosun-logo.png`

Nicht hochladen:
- `.git/`, `.github/`, `docs/`

## Git-Regeln
- `main` ist die Quelle der Wahrheit (entspricht dem Live-Stand).
- Änderungen in kleinen, klaren Commits.