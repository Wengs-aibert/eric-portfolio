# Contributing — {{APP_NAME}}

Quick guide to jumping into this codebase.

## Setup

```bash
git clone {{REPO_URL}}
cd {{APP_NAME}}
npm install    # or the relevant package manager
npm run dev    # starts local dev server
```

Open [http://localhost:3000](http://localhost:3000) (or whatever port is configured).

## Project Structure

> See `ai-context/03-REPO-MAP.md` for the full dependency graph.

### Entry Points (most likely files you'll touch)

| Want to... | Look at |
|-----------|---------|
| {{ENTRY_1_ACTION}} | `{{ENTRY_1_PATH}}` |
| {{ENTRY_2_ACTION}} | `{{ENTRY_2_PATH}}` |
| {{ENTRY_3_ACTION}} | `{{ENTRY_3_PATH}}` |
| {{ENTRY_4_ACTION}} | `{{ENTRY_4_PATH}}` |
| {{ENTRY_5_ACTION}} | `{{ENTRY_5_PATH}}` |

### Shared Modules (touch carefully)
- `{{SHARED_1}}` — {{SHARED_1_DESC}}
- `{{SHARED_2}}` — {{SHARED_2_DESC}}

## Making Changes

1. Create a branch: `git checkout -b feat/your-change`
2. Make your changes
3. Run tests: `npm test`
4. Push and open a PR

## Design Decisions

If you're wondering "why is it built this way?" → check `ai-context/05-DECISIONS.md`.

## Current Sprint

See `ai-context/sprints/` for what's in progress and what's next.
