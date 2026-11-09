# Motus web frontend

This React, TypeScript, Vite, Tailwind CSS, and React Router application is the public Motus Football Analytics interface. It has its own codebase and roadmap, separate from commercial Motus.

## Run locally

Use Node.js 22.22 or later on a supported release line and npm. From `apps/web`:

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The application contains no live football data connection. A production host will need an HTML fallback for direct requests to client-side routes.

## Routes and current status

| Route | Current content |
| --- | --- |
| `/` | Default Brentford FC Overview; the URL stays `/` |
| `/teams/brentford-fc/overview` | The same Overview through a retained team-scoped route |
| `/data-sources` | Source-readiness requirements; no validated dataset is connected |
| Other paths | Page-not-found view with a route back to Overview |

The top bar shows static Brentford FC context, not a team selector. Additional clubs and a genuine keyboard-accessible switcher using stable team IDs are planned; any crest must have verified use and redistribution rights. The redesigned FastAPI backend, PostgreSQL warehouse, dbt transformations, and Airflow pipelines are not operational. Historical Brentford code remains in the repository, but its current operation has not been verified. No football statistics or historical datasets are published through this interface.

The original marketing-style Roadmap screen is not a route. The current product direction is recorded in the [interface decision](../../docs/decisions/0003-instrument-panel-interface.md) and [architecture overview](../../docs/architecture/overview.md).

## Checks

```sh
npm run typecheck
npm run lint
npm run test
npm run build
```

GitHub Actions is configured to run these checks on `dev` pushes and pull requests targeting `main`. The browser build has no backend or hosting configuration; a deployment platform must serve `index.html` for direct route requests.

## Brand, fonts, and notices

The approved Motus SVGs in `public/` are unchanged copies from the Motus marketing repository (`motus/public/logo.svg`, `logo-icon.svg`, and `favicon.svg`). Production color values in `src/styles/tokens.css` follow `motus/src/styles/tokens.css`. The header mark has a short reveal on initial mount without delaying rendering; the header persists across route changes, and reduced-motion mode removes the animation.

Sora, Hanken Grotesk, and JetBrains Mono are bundled from pinned Fontsource variable-font packages under SIL Open Font License 1.1. Their exact package versions and source details appear in [third-party notices](THIRD_PARTY_NOTICES.md); license texts are included in `public/licenses/`. No private Motus font binaries or application code were copied.

A Brentford crest is intentionally absent. Public-use and redistribution rights for a specific crest file remain unverified. Motus Football Analytics is not affiliated with or endorsed by Brentford FC.
