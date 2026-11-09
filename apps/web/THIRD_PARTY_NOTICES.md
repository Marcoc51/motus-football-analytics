# Third-party notices

The frontend uses npm packages under their respective upstream licenses. The lockfile records exact installed versions; it does not itself provide all redistribution notices. Vite generates `dist/licenses/third-party-frontend.md` during a production build with license and copyright notices for bundled npm code. Keep that generated file with any deployed or redistributed build. Development-only packages remain available under the licenses in their npm distributions.

| Package group | Role | License |
| --- | --- | --- |
| React, React DOM | UI runtime | MIT |
| React Router 8.5.1 | Client-side routing | MIT |
| Vite, Vitest, React plugin | Build and test tooling | MIT |
| TypeScript | Type checking | Apache-2.0 |
| Tailwind CSS and Vite plugin | Styling | MIT |
| ESLint and related TypeScript/React plugins | Linting | MIT |
| Testing Library, jsdom | Component tests | MIT |
| [Sora](https://fontsource.org/fonts/sora/about) via `@fontsource-variable/sora` 5.3.0 | Headings | OFL-1.1; [bundled notice](public/licenses/sora-OFL-1.1.txt) |
| [Hanken Grotesk](https://fontsource.org/fonts/hanken-grotesk/about) via `@fontsource-variable/hanken-grotesk` 5.3.0 | Interface and body | OFL-1.1; [bundled notice](public/licenses/hanken-grotesk-OFL-1.1.txt) |
| [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono/about) via `@fontsource-variable/jetbrains-mono` 5.3.0 | Technical metadata | OFL-1.1; [bundled notice](public/licenses/jetbrains-mono-OFL-1.1.txt) |

The font packages are distributed by [Fontsource](https://fontsource.org/) from the Sora, Hanken Grotesk, and JetBrains Mono projects. The package `LICENSE` files, including family-specific copyright notices, are copied unchanged to `public/licenses/` so they accompany the built font files. Preserve the three font notices in `dist/licenses/` with the generated npm notice. No external component source was copied.

The Motus logo and favicon SVGs are first-party brand assets reused with the co-founders' approval under the [separate brand terms](../../BRANDING.md). No crest image was added to the frontend.

`minimatch` is pinned to 11.0.5 through an npm override because the resolved lint-toolchain version had a moderate denial-of-service advisory. This is development tooling only; the frontend checks pass with the override. The installed direct packages' `package.json` license fields were checked against the table above.
