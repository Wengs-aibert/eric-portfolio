# Repository Map

_Last reviewed: {{DATE}}_

## Directory Structure

```
{{APP_NAME}}/
├── CLAUDE.md                    # Entry point
├── ai-context/
│   ├── 01-CURRENT-STATE.md      # Position tracker
│   ├── 01-DESIGN.md             # MVP design doc
│   ├── 02-RULES.md              # Operating rules
│   ├── 03-REPO-MAP.md           # This file
│   ├── 05-DECISIONS.md          # Architecture decisions
│   ├── 06-IDEATION.md           # Idea backlog
│   ├── 07-IMPACT-ANALYSIS.md    # Change impact template
│   ├── 08-PRODUCTION-READINESS.md # Prod checklist
│   ├── sprints/                 # Sprint task specs
│   ├── execution/               # Preflight, autonomous state
│   └── retro/                   # Sprint retrospectives
└── [app code — expand below]
```

## App Code Structure

<details>
<summary>src/ — Application source</summary>

```
src/
├── {{EXPAND_THIS}}
```

_Expand and fill in as the project grows._
</details>

<details>
<summary>tests/ — Test files</summary>

```
tests/
├── unit/
└── integration/
```
</details>

## Module Dependency Graph

Map which modules depend on which. **Agents must check this before modifying shared modules.**

```
[module A] → [module B] → [module C]
                        → [module D]
[module E] → [module B]  ← SHARED (high-risk)
```

### Shared Modules (High-Risk)
These are imported by 3+ other files. Changes here require impact analysis.

| Module | Imported By | Risk |
|--------|------------|------|
| _e.g. utils/transform.js_ | _routes, frontend, tests_ | HIGH |

### API Surface
Public endpoints and their contracts.

| Method | Path | Description | Request | Response |
|--------|------|-------------|---------|----------|
| | | | | |

## Key Files

| File | Purpose | Risk Level |
|------|---------|------------|
| CLAUDE.md | Entry point, routing | LOW |
| ai-context/* | Agent context | LOW |
| _main app files_ | _describe_ | _assess_ |

## External Dependencies

| Dependency | Purpose | Version |
|-----------|---------|---------|
| | | |

## Evolution Log
_Track major structural changes here._

| Date | Change | Reason |
|------|--------|--------|
| | | |

---

**Update this file when:**
- New directories or major files are added
- Module dependencies change
- API surface changes
- Shared modules are created or modified
