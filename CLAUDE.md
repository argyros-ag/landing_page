# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static single-page landing page for **Argyros** — a DeFi swap aggregator built natively on Fogo Chain L1 (SVM). There is no build system, no package manager, and no framework. The entire site is `index.html`.

## Development

Open `index.html` directly in a browser — no server required. Changes take effect on reload.

To serve locally with live-reload (optional):
```bash
npx serve .
# or
python3 -m http.server 8080
```

## Architecture

Everything lives in `index.html`:

- **Tailwind CSS** loaded via CDN (`https://cdn.tailwindcss.com`). The `tailwind.config` block at the top of `<head>` defines the custom color palette and fonts.
- **Google Fonts** (Inter + JetBrains Mono) via `<link>` preconnect/stylesheet tags.
- **Custom CSS** in a `<style>` block covers: animated conic-gradient border (`.grad-border`), gradient text (`.silver-text`), pulsing status dot (`.pulse-ok`), scroll-reveal via `animation-timeline: view()` (`.reveal`), token-row swap widget, and ticker.
- **Vanilla JS** at the bottom of `<body>` handles:
  - Count-up animation for stats (pools indexed, volume, slippage saved)
  - Live latency jitter simulation feeding the hero sparkline SVG
  - 60-second scrolling latency chart (full SVG, 1 s tick)
  - Code tab switching (Rust / TypeScript / cURL) with syntax-highlighted HTML strings
  - Clipboard copy button

## Brand tokens

| Token | Value |
|---|---|
| Background (space) | `#050914` |
| Silver text | `#c9ced6` |
| Tech blue | `#4aa8ff` |
| OK green | `#22c55e` |

Custom Tailwind color names: `space`, `silver`, `tech`, `ok`.

## Key CSS classes

- `.silver-text` — white→silver→tech-blue gradient text via `background-clip: text`
- `.grad-border` — animated conic-gradient border using `@property --a` + `@keyframes spin`
- `.hair` / `.hair-strong` — hairline border color utilities (no Tailwind equivalent)
- `.reveal` — scroll-triggered fade-in using `animation-timeline: view()` (graceful fallback: always visible)
- `.btn` / `.btn-primary` — CTA button base and primary variant
