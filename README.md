# Lumen — Dynamic Landing Page

Eine sehr dynamische, animationsreiche SaaS-Landingpage. Gebaut mit Next.js 16 (App Router), Tailwind CSS v4 und Framer Motion.

## Features

- Scroll-getriggerte Reveal-Animationen (Hero, Features, Stats, Testimonials, Pricing, CTA)
- Animierte Gradient-Blobs im Hintergrund
- Sticky Navbar mit Blur-Effekt beim Scrollen
- Animierter Scroll-Progress-Balken
- Animierte Zähler in der Stats-Sektion
- Logo-Marquee (Endlos-Scroll)
- Pricing-Toggle (monatlich/jährlich)
- Klare, mehrfach platzierte Call-to-Actions

## Lokal starten

```bash
npm install
npm run dev
```

Dann [http://localhost:3000](http://localhost:3000) öffnen.

## Deployment auf Vercel

1. Repo auf GitHub pushen (siehe unten, falls noch nicht geschehen)
2. Auf [vercel.com/new](https://vercel.com/new) einloggen und "Import Project" wählen
3. Das GitHub-Repo auswählen — Vercel erkennt Next.js automatisch, keine Konfiguration nötig
4. "Deploy" klicken

Alternativ per CLI:

```bash
npm i -g vercel
vercel
```

## Struktur

- `src/app/page.tsx` — setzt alle Sektionen zusammen
- `src/components/` — einzelne Sektionen (Hero, Features, Stats, Testimonials, Pricing, CTA, Footer, Navbar)
