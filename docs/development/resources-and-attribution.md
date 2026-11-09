# Resources and attribution

This record separates software and assets in the current frontend from research references. Listing a project does not imply its endorsement of Motus. Package versions below were checked against the installed packages and `apps/web/package-lock.json` on 2026-11-09; the lockfile is the full dependency inventory.

## Installed frontend dependencies

| Resource and upstream | Purpose and installed version | License and use |
| --- | --- | --- |
| [React](https://react.dev/) and [React DOM](https://www.npmjs.com/package/react-dom) | UI runtime, 19.3.1 each | MIT; npm dependencies |
| [React Router](https://reactrouter.com/) | Client routes and history, 8.5.1 | MIT; npm dependency |
| [Vite](https://vite.dev/) | Development and build, 8.3.6 | MIT; development dependency |
| [Tailwind CSS](https://tailwindcss.com/) | Token-aware CSS tooling, 4.3.5 | MIT; development dependency |
| [TypeScript](https://www.typescriptlang.org/) | Type checking, 6.0.2 | Apache-2.0; development dependency |
| [ESLint](https://eslint.org/) and [Vitest](https://vitest.dev/) | Linting and tests, 10.14.0 and 5.1.0 | MIT; development dependencies |
| [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/) and [jsdom](https://github.com/jsdom/jsdom) | Component tests, 16.3.3 and 26.1.0 | MIT; development dependencies |
| [Fontsource Sora](https://fontsource.org/fonts/sora/about), [Hanken Grotesk](https://fontsource.org/fonts/hanken-grotesk/about), and [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono/about) | Bundled variable fonts, 5.3.0 each | OFL-1.1; family copyright and license texts accompany the build in `apps/web/public/licenses/` |

Other direct testing, linting, React type, and Vite plugin packages and their exact versions are recorded in [`apps/web/package.json`](../../apps/web/package.json) and the lockfile. Installed direct-package license fields were checked; see [frontend third-party notices](../../apps/web/THIRD_PARTY_NOTICES.md). Dependencies are installed through npm, not copied from private application repositories.

## Bundled assets

The Motus `logo.svg`, `logo-icon.svg`, and `favicon.svg` were copied unchanged from the approved Motus marketing repository with the co-founders' brand-use approval. They are first-party brand assets under the repository's [separate brand terms](../../BRANDING.md), not third-party component code. Fontsource WOFF2 files are bundled through npm; the three family-specific OFL license texts are copied unchanged from the installed packages to `apps/web/public/licenses/`. The production build generates a separate bundled-code notice as described in the [frontend third-party notices](../../apps/web/THIRD_PARTY_NOTICES.md). No Brentford crest, external UI component, private image, or historical dataset is bundled **in the frontend**.

## Historical images

The six original project images below have been removed from the current public tree and copied unchanged to a Git-ignored local archive. They are **excluded from the Apache-2.0 software grant**. The local archive will not be pushed to GitHub; the owner should keep an independent private backup. Removal from the current tree does not erase the files from Git history or establish permission to redistribute their third-party elements.

| File | Observed content | Rights status and handling |
| --- | --- | --- |
| `architecture_diagram.png` | Project flow diagram incorporating FBref and software-vendor logos | Diagram authorship is not independently verified; logo rights are separate. Review any future republication. |
| `images/Forwards.png` | Power BI player-statistics dashboard with Brentford FC crest | Underlying data and crest redistribution rights are unverified. Review before any republication. |
| `images/Goalkeeping.png` | Power BI player-statistics dashboard with Brentford FC crest | Underlying data and crest redistribution rights are unverified. Review before any republication. |
| `images/Intro.png` | Designed cover with Brentford FC crest and stadium/player imagery | Artwork and embedded imagery provenance is unverified. Review before any republication. |
| `images/dwh_1.png` | Snowflake UI screenshot showing SQL and one player-statistics result | Interface and data rights are unverified. Review before any republication. |
| `images/dwh_2.png` | Snowflake UI screenshot showing SQL and table/column results | Interface and data rights are unverified. Review before any republication. |

No historical image was identified as a diagram free of third-party branding. No right to republish the underlying football datasets has been established. These historical records do not imply endorsement by the clubs, data providers, or software vendors they depict.

## Research references, not installed

The local resource catalog's descriptions and Motus recipe were read for context. The upstream skill instructions and component source listed below were **not** imported, installed, executed, or copied. No specific UI decision is attributed to those resources; the Instrument Panel direction was approved by the product owner.

| Public reference | Why it was listed | Actual status |
| --- | --- | --- |
| [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) | Visual direction | Catalog entry only; upstream instructions not reviewed; license not independently verified |
| [make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) | UI polish | Catalog entry only; no skill installed or run |
| [mobile-native](https://github.com/emilkowalski/skills/blob/main/skills/mobile-native/SKILL.md) | Mobile interaction ideas | Catalog entry only; no skill installed or run |
| [review-animations](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md) | Motion review | Catalog entry only; no skill installed or run |
| [Interfere Design System](https://design.interfere.com/) | Design-system documentation | Catalog entry only; reuse terms not verified; no asset or code copied |
| [Animata](https://animata.design/), [HextaUI](https://hextaui.com/), [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Possible components or design tools | Catalog entries considered, not adopted; no source copied or executable installed |
| [ApexYard](https://github.com/me2resh/apexyard) | Governance reference | Catalog entry only; Motus's human-review and decision-record practices are local project decisions; framework not installed |

Football libraries mentioned in earlier planning, including kloppy, soccerdata, ScraperFC, Scrapling, mplsoccer, DataBallPy, and socceraction, are future research candidates. They were not evaluated for or added to this frontend. Any data-source rights and package licenses require separate verification before adoption.
