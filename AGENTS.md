# AGENTS.md

## Cursor Cloud specific instructions

### Overview

ZUI 3 is a frontend UI component library (pnpm monorepo, 60+ packages under `lib/`). No backend services, databases, or Docker required.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (serves at `http://localhost:5173/`) |
| Lint | `pnpm lint` |
| Build | `pnpm build` |
| Docs dev | `pnpm docs:dev` |

All commands run from the workspace root. See `package.json` scripts for the full list.

### Non-obvious caveats

- **pnpm v10+ blocks build scripts by default.** After `pnpm install`, run `pnpm rebuild esbuild` to ensure esbuild's platform-specific binary is available (required by Vite).
- **Lint has pre-existing errors.** `pnpm lint` exits non-zero due to 3 pre-existing `no-undef` errors in doc JS files and warnings in source. These are in the repository already and not regressions.
- **pnpm is enforced.** The `preinstall` script rejects other package managers via `only-allow pnpm`.
- **Component dev pages** are at `http://localhost:5173/<component-name>` (e.g. `/button`, `/modal`, `/color-picker`). The sidebar on the homepage lists all components.
- **No automated test suite.** There is no `test` script in `package.json`; validation is done via lint + build + manual browser testing of component demos.
