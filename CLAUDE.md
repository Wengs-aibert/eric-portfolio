# CLAUDE.md — Eric's Portfolio

Read this first. It's the only mandatory file per session.

## What This Project Is
Personal portfolio website for Eric Weng. React + Vite + TypeScript + Tailwind CSS + Framer Motion.
Single-page scroll site with dark/light theme toggle.

Read `ai-context/DESIGN.md` for full spec.

## Session Start
1. Read this file
2. Read `ai-context/CURRENT-STATE.md` if it exists (your "save file")
3. Check `ai-context/sprints/` for current sprint tasks
4. Run the Context Check below

## Context Check
Before working, answer silently:
- **Do I know what to build?** → if no, check DESIGN.md or ask
- **Do I know what's already built?** → if no, check CURRENT-STATE.md or explore the codebase
- **Do I know what NOT to do?** → if no, check DECISIONS.md
- **Am I missing context?** → if yes, create the file (see Learning Protocol)

## Context Budget
Track what you load. Stay under ~60% of context window — leave room for actual work. Load in priority order: CURRENT-STATE → sprint task → DESIGN → REPO-MAP.

## Commands
```bash
cd ~/git/eric-portfolio
npm run dev      # Dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Learning Protocol
When you hit a gap:
1. Create a file in `ai-context/` named after what you needed
2. Front-load signal — most important info in first 20 lines
3. Log it in `ai-context/CHANGELOG.md`

## Session End
- Update CURRENT-STATE.md with what you did and what's next
- Update any context files that are now stale

## File Map

| File | Purpose | When to Read |
|------|---------|-------------|
| `CURRENT-STATE.md` | Position tracker, recent changes, blockers | Every session |
| `DESIGN.md` | Full design spec, sections, theme | Planning, scope questions |
| `RULES.md` | Operating rules, bug fix protocol | Every session |
| `REPO-MAP.md` | Code structure, dependency graph | Before multi-file changes |
| `DECISIONS.md` | Architecture decisions with reasoning | When context needed |
| `sprints/sprint-NN.md` | Task specs with acceptance criteria | Autonomous mode |
