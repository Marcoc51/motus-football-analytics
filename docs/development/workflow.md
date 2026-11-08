# Development workflow

- `main` is the stable branch. `dev` is the integration branch.
- Create a short-lived branch from `dev` for each change, for example `docs/motus-foundation`, `feat/team-selection`, or `fix/data-validation`.
- Open pull requests against `dev`. Keep each PR focused and describe the change, its status, and any data or migration impact.
- Include test evidence appropriate to the change. For documentation, run `git diff --check` and check relative links and status claims. For code, report the relevant automated tests and any manual checks, including limitations.
- Request human review and approval before merging or releasing. Do not merge or release through an autonomous agent.
- Assign one coding agent responsibility for each implementation task. Other reviewers can provide feedback without making concurrent implementation edits to that task.
- Do not automatically install third-party agent skills, governance frameworks, hooks, or MCP servers. Propose any such change for human review first.
- Use descriptive, focused commits and keep architecture decisions in `docs/decisions/` when a consequential choice is made.
