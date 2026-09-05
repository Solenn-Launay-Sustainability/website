# Agent Guidelines for Website Codebase

## Build & Commands
- **Dev**: `bun dev` (runs Next.js dev server with Bun runtime)
- **Build**: `bun run build` (production build)
- **Lint**: `bun run check` (check only) or `bun run check:fix` (fix issues)
- **Format**: `bun run format` (formats with Biome)
- **No tests**: This project has no test suite configured

## Code Style (Biome enforced)
- **Formatting**: 2 spaces, 80 char line width, LF endings
- **Imports**: Auto-organized, use `@/` for src paths, Node.js `node:` protocol for built-ins
- **Types**: TypeScript strict mode, no inferrable types, use `as const` assertions
- **Naming**: No unused imports/variables, exhaustive dependencies in hooks
- **Components**: Export as named exports `export { ComponentName }`, use function declarations
- **Console**: Only `console.error`, `console.warn`, `console.info` allowed
- **React**: All React domain rules enforced, self-closing elements required
- **Tailwind**: Classes sorted via `cn()` utility from `@/lib/utils`, use `cva` for variants
- **i18n**: Use `next-intl` with `getTranslations()` for server components
- **Error Handling**: No empty blocks, prefer explicit error handling

## Architecture
- Next.js 16 App Router with `next-intl` for i18n, Sanity CMS, Bun runtime, React 19 compiler enabled
