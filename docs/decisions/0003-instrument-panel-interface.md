# 0003 — Instrument Panel interface

## Decision

Use a compact, dark Motus application workspace with a top bar and two primary destinations: the default Overview at `/` and Data Sources at `/data-sources`. Keep `/teams/brentford-fc/overview` as an equivalent route for future team-aware URLs. Use React Router for direct URLs and browser history. Show Brentford FC as static team context until genuine multi-team support exists. Use the approved Motus colors and self-hosted, licensed Sora, Hanken Grotesk, and JetBrains Mono font packages.

## Rationale

The original frontend shell emphasized a marketing hero and future feature cards. A restrained workspace makes current data availability and future analytical structure clearer without inventing statistics or controls. The team selector had only one option and an invented badge, so static context is more honest.

## Alternatives and open questions

Local state navigation did not support direct links, refresh, or browser history. A larger routing framework is unnecessary for two pages. The original icon and system font fallbacks remain safe alternatives if font loading fails. A future team switcher must use actual available teams, stable IDs, keyboard-accessible selection, and clear team and analytical context. Club crests may be included only when use and public redistribution rights for specific files are verified; a local historical image alone is insufficient evidence. Future filters, modules, and data providers require separate decisions.
