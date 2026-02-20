# Architektur & Deployment

## Status
taosun.de ist aktuell eine **statische Website** (HTML/CSS/JS).
Deployment erfolgt **manuell per FTP** (selektiver Upload).

## Ordnerstruktur
- `/index.html` – Startseite
- `/impressum.html` – Impressum
- `/style.css` – Styles
- `/script.js` – JS
- `/images/` – Assets/Bilder
- `/docs/` – Dokumentation (nicht deployen)

## Lokal testen (Standard)
VS Code Extension: “Live Server”
- `index.html` öffnen → “Go Live”

## Deployment (manuell per FTP)
Upload auf den Webspace:
- hochladen: `index.html`, `impressum.html`, `style.css`, `script.js`, `images/`, `taosun-logo.png`
- nicht hochladen: `.git/`, `.github/`, `docs/`

## Historie
- `legacy/astro` enthält den früheren Astro-Stand (archiviert).
- `main` ist die aktuelle Live-Wahrheit.

## Optional (später)
- Automatisches Deployment via GitHub Actions (FTP/SFTP) möglich.
- Erst anfassen, wenn Inhalte & Struktur stabil sind.