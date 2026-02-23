# DESIGN.md — Eric's Portfolio

## Overview
Personal portfolio for Eric Weng — a single-page scroll site showcasing projects, skills, and experience. Mobile-first, clean, typography-driven. Inspired by [mannan.io/v1](https://www.mannan.io/v1).

## Tech Stack
- **Framework:** React 19 + Vite + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Contact Form:** React Hook Form + Formspree (no backend)
- **Deployment:** Vercel
- **Icons:** Lucide React

## Theme System
**Toggle between dark and light.** Persist preference in localStorage, default to system preference.

### Dark Theme
- **Accent:** Orange (#F97316 or similar)
- **Background:** Black (#000000 or near-black)
- **Text:** White

### Light Theme
- **Accent:** Navy Blue (#1E3A5F or similar)
- **Background:** White (#FFFFFF)
- **Text:** Black

## Sections (scroll order)

### 1. Hero
- Name: Eric Weng
- Title/tagline (software engineer)
- Short pitch (1-2 sentences)
- Photo placeholder
- CTA button → scroll to Contact

### 2. What I Do
- Services/skills grid (3-4 cards)
- Icons + short descriptions
- Examples: Full-Stack Development, ML/AI, System Design, Cloud Infrastructure

### 3. Projects
- 4 project cards
- Each: title, description, tech tags, link (GitHub/live)
- Placeholder content for now — Eric will fill in real projects

### 4. Tech Stack
- Visual grid/cloud of technologies
- Categories: Languages, Frameworks, Tools, Cloud
- Examples: React, TypeScript, Python, Java, AWS, Docker, Kubernetes, TensorFlow

### 5. Experience Timeline
- Vertical timeline layout
- Each entry: company, role, dates, 2-3 bullet points
- Placeholder content for now

### 6. About
- Personal narrative section
- Who Eric is, what drives him
- Placeholder text

### 7. Contact
- Form: name, email, message
- Submit via Formspree
- Also show email link
- Social links (GitHub, LinkedIn)

## Navigation
- Fixed top nav bar
- Links: What I Do, Projects, Tech Stack, Experience, About, Contact
- Theme toggle button in nav
- Smooth scroll to sections

## Design Principles
- **Mobile-first** — responsive from 320px up
- **Typography-driven** — clean fonts, good hierarchy
- **Minimal** — no clutter, lots of whitespace
- **Smooth** — Framer Motion for scroll reveals and hover effects
- **Fast** — Vite, code-split, optimized images

## Success Criteria
- [ ] All 7 sections render correctly
- [ ] Theme toggle works + persists
- [ ] Mobile responsive (320px to 1440px+)
- [ ] Smooth scroll navigation
- [ ] Contact form submits
- [ ] Lighthouse score > 90 on all categories
- [ ] Deploys to Vercel
