# Soundbites — Design Document

**Date:** 2026-03-03
**Event:** Radio Milwaukee Soundbites Fundraiser, Thursday March 6, 2026
**Station:** DJ Tarik Moody × Chef Dane Baldwin (The Diplomat, Milwaukee)
**Song:** Weldon Irvine — "Morning Sunrise" (from *The Sisters*)
**Dish:** Citrus Corn Muffin with Confit Pork Belly

## Overview

A single-page interactive experience for attendees at the Soundbites event. Attendees visit DJ/chef stations wearing headphones, try the dish, and engage with a visually stunning digital companion on an iPad. The experience pairs music with food through bold typography, smooth animations, and a museum-interactive feel.

## Tech Stack

- **Next.js** with static export + Vercel deployment
- **Framer Motion** for animations and modal transitions
- **Service worker** for offline caching (PWA)
- **iPad Safari** as the primary target device

## Architecture: Hero + Animated Modals

Zero scrolling on the main view. One full-screen hero with four tap targets that open full-screen animated modals.

### Main View (No Scroll)

```
┌──────────────────────────────────┐
│  ── Sound & Flavor Pairing ──   │
│                                  │
│      MORNING                     │
│      SUNRISE                     │
│      meets Citrus & Smoke        │
│                                  │
│  Chef Dane Baldwin × DJ Tarik    │
│  The Diplomat, Milwaukee         │
│                                  │
│  ┌──────────┐  ┌──────────┐     │
│  │ THE      │  │          │     │
│  │ ARTIST   │  │ LYRICS   │     │
│  └──────────┘  └──────────┘     │
│  ┌──────────┐  ┌──────────┐     │
│  │ THE      │  │ WHY IT   │     │
│  │ PAIRING  │  │ WORKS    │     │
│  └──────────┘  └──────────┘     │
│                                  │
│ ▶ Morning Sunrise   advancement ↻ 🔊│
└──────────────────────────────────┘
```

### Modals (Framer Motion AnimatePresence)

Each modal slides up from the bottom, full-screen, blurred backdrop. Swipe down or tap X to dismiss. Content inside modals can scroll if needed.

**The Artist Modal:**
- Weldon Irvine photos (two vintage shots + album art from *The Sisters*)
- Bio: keyboardist, composer, Nina Simone's bandleader, co-wrote "To Be Young, Gifted and Black"
- Tags: Jazz-Funk, Soul, Hampton VA, Keys, Composer
- Subtle parallax on photos

**The Lyrics Modal:**
- Full lyrics, large readable type
- Line-by-line fade-in animation
- Album art as blurred background element

**The Pairing Modal:**
- The evocative pairing story (3 paragraphs, drop cap opening)
- Track details: song, album, musicians, dish

**Why It Works Modal:**
- Chef Dane Baldwin, The Diplomat
- The dish: Citrus Corn Muffin with Confit Pork Belly
- 4 parallels: Brightness & Warmth, Low & Slow, Sweet Meets Soul, Morning Energy

### Audio Player Bar

Fixed to bottom of viewport. Large touch targets (56px+) for attendees holding plates.

- **Play/Pause** — large, unmistakable button
- **Restart** — tap to jump to 0:00
- **Volume slider** — horizontal, easy thumb control
- **Progress bar** — thin gold line showing position
- Song title + duration displayed

## Visual Design

### Palette
- Warm black: `#1A1612`
- Gold: `#D4A853`
- Gold light: `#E8C97A`
- Amber: `#C2762E`
- Cream: `#F5EDE0`
- Cream light: `#FAF6EF`
- Muted: `#9B8E7E`
- Citrus: `#E89B3E`

### Typography
- **Headlines:** Playfair Display (900 weight, italic for accents)
- **UI elements:** DM Sans (300-500 weight)
- **Body prose:** Source Serif 4 (300-400 weight)

### Texture & Atmosphere
- SVG noise overlay (low opacity)
- Radial gradient atmospheric background
- Warm, editorial, jazz-lounge feel

### Animations
- Entrance fade-ups on page load
- Modal slide-up/down with spring physics
- Card tap glow effect
- Subtle pulse on play button
- Line-by-line fade for lyrics

## Performance & Deployment

### Caching Strategy
- Service worker caches all assets on first load (HTML, JS, CSS, images, .m4a)
- Audio uses `preload="auto"` for instant playback
- Full offline support after initial load

### Deployment
- **Primary:** Vercel deployment, load on iPad via URL
- **iPad setup:** Open URL in Safari, "Add to Home Screen" for fullscreen PWA mode (no browser chrome)
- Load and cache before the event starts

### Optimization
- Next.js `<Image>` component for optimized images
- `manifest.json` for PWA home screen icon
- Static export for fast initial load

## Assets (in `/research`)

- `Morning Sunrise_Weldon Irvine.m4a` — the song
- `a0980267655_10.jpg` — *The Sisters* album art
- `images (2).jpeg` — Weldon Irvine photo (color)
- `weldon (1).webp` — Weldon Irvine photo (B&W)
- `morning-sunrise-pairing.html` — pairing text and artist bio content

## Content Needed

- [ ] Lyrics for "Morning Sunrise" (user will provide)
- [ ] Chef Dane Baldwin bio / details about The Diplomat
- [ ] Radio Milwaukee branding / logo (optional)
