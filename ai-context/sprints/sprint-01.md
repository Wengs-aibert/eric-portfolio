# Sprint 1 — Foundation: Setup + Theme + Layout Shell

## Goal
Get the project running with Vite + React + TypeScript + Tailwind, dark/light theme toggle working, fixed nav bar, and all section placeholders in place with smooth scroll.

## Tasks

### Task 1: Project Init
**What:** Initialize Vite React-TS project, install dependencies, configure Tailwind v4.
**Acceptance Criteria:**
- `npm run dev` starts successfully
- Tailwind classes work
- TypeScript strict mode enabled
- Dependencies: react, react-dom, tailwindcss, framer-motion, lucide-react, react-hook-form

**Commands:**
```bash
cd ~/git/eric-portfolio
npm create vite@latest . -- --template react-ts
npm install tailwindcss @tailwindcss/vite framer-motion lucide-react react-hook-form
```

### Task 2: Theme System
**What:** Build dark/light theme toggle with CSS variables + Tailwind dark mode.
**Acceptance Criteria:**
- `ThemeProvider` context with toggle function
- Dark: orange accent (#F97316), black bg (#000000), white text
- Light: navy accent (#1E3A5F), white bg (#FFFFFF), black text
- Persists to localStorage
- Defaults to system preference (`prefers-color-scheme`)
- CSS variables for `--color-accent`, `--color-bg`, `--color-text`
- Tailwind `darkMode: 'class'` strategy

**Files:**
- `src/context/ThemeContext.tsx`
- `src/hooks/useTheme.ts`
- Update `src/index.css` with CSS variables

### Task 3: Fixed Navigation Bar
**What:** Fixed top nav with section links + theme toggle button.
**Acceptance Criteria:**
- Fixed position, stays on scroll
- Links: What I Do, Projects, Tech Stack, Experience, About, Contact
- Clicking a link smooth-scrolls to that section
- Theme toggle button (sun/moon icon from Lucide)
- Mobile: hamburger menu that opens overlay nav
- Nav has subtle backdrop blur

**Files:**
- `src/components/Navbar.tsx`
- `src/components/MobileMenu.tsx` (or within Navbar)

### Task 4: Section Shells + Smooth Scroll
**What:** Create placeholder components for all 7 sections, wire them into a single-page layout with scroll targets.
**Acceptance Criteria:**
- Each section has an `id` for scroll targeting: `hero`, `services`, `projects`, `tech-stack`, `experience`, `about`, `contact`
- Each section renders its name as a heading + placeholder text
- Sections have appropriate min-height and padding
- `scroll-behavior: smooth` on html
- Framer Motion fade-in on scroll for each section (basic `whileInView`)

**Files:**
- `src/sections/Hero.tsx`
- `src/sections/Services.tsx`
- `src/sections/Projects.tsx`
- `src/sections/TechStack.tsx`
- `src/sections/Experience.tsx`
- `src/sections/About.tsx`
- `src/sections/Contact.tsx`
- `src/App.tsx` — compose all sections

### Task 5: Cleanup
- Remove Vite boilerplate (default App.tsx content, vite.svg, etc.)
- Set page title to "Eric Weng — Portfolio"
- Add basic meta tags in index.html

## Do NOT
- Don't add real project content yet (use placeholders)
- Don't set up Formspree yet (just the form UI)
- Don't deploy yet
- Don't add page transitions or complex animations beyond basic fade-in

## Definition of Done
- `npm run dev` shows the site with all 7 sections
- Theme toggle switches between dark/light correctly
- Nav links scroll to correct sections
- Mobile nav works
- No TypeScript errors, no console errors
