# CURRENT-STATE.md

## Status: Sprint 2 COMPLETE ✅ — Hero Redesign + Real Content

### Completed Sprints

**Sprint 1 — Foundation ✅**
- Vite + React 19 + TypeScript + Tailwind v4 + Framer Motion
- Theme system (dark/light, localStorage, system preference default)
- Section shells for all 7 sections
- Smooth scroll, Framer Motion reveals

**Sprint 2 — Hero Redesign + Content ✅**
- Hero: Giant outlined "ERIC WENG" in Orbitron 900, transparent fill with -webkit-text-stroke
- Orange accent line cutting through center of name, animates left→right
- "FULL STACK SOFTWARE ENGINEER" subtitle in accent color
- Tilted scrolling skills marquee ribbon at bottom (2° tilt, accent bg, inverted text)
- Bouncing scroll-down arrow
- Staggered entrance animations
- Services: 5 real cards with lucide icons (Globe, Code2, Calendar, ShoppingCart, Smartphone)
- About: "The Why Behind Who I Am" narrative section
- Navbar: Minimal — "Eric Weng" (Orbitron) left, GitHub/LinkedIn/Mail icons right

### Important: Tailwind v4 Compatibility
⚠️ Tailwind v4 uses `@import "tailwindcss"` and CSS-based config. The `tailwind.config.js` color mappings (bg-accent, text-bg, etc.) DO NOT WORK reliably. **Always use inline styles with `var(--color-accent)`, `var(--color-bg)`, `var(--color-text)` for theme-aware colors.** Do not rely on Tailwind utility classes for theme colors.

### Architecture
- **Repo:** https://github.com/Wengs-aibert/eric-portfolio
- **Deploy:** GitHub Pages (workflow set up, needs Pages enabled in repo settings)
- **Font:** Orbitron (Google Fonts, imported in index.css)
- **Theme vars:** --color-accent, --color-bg, --color-text (defined in index.css)
- **Dark:** black bg, white text, orange accent (#F97316)
- **Light:** white bg, black text, navy accent (#1E3A5F)

### File Structure
```
src/
  sections/Hero.tsx      — Redesigned: outlined name + marquee
  sections/Services.tsx  — 5 service cards with icons
  sections/About.tsx     — "Why" narrative
  sections/Projects.tsx  — PLACEHOLDER
  sections/TechStack.tsx — PLACEHOLDER
  sections/Experience.tsx — PLACEHOLDER
  sections/Contact.tsx   — PLACEHOLDER
  components/Navbar.tsx  — Minimal: name + social icons
  context/ThemeContext.tsx
  hooks/useTheme.ts
  index.css             — Theme vars + Orbitron import + marquee keyframes
```

### What's Next — Sprint 3
- Projects section: 3 project cards (Olympics, Golf Leaderboard, Equipment Management)
- Tech Stack section: categorized badges
- Experience timeline: TTS-Wireless → UCSC → The Bot Company

### Blockers
None
