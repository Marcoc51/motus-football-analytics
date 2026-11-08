# Development workflow

- `main` is the stable release branch and should be protected in GitHub. `dev` is the active development branch.
- Work directly on `dev` for ordinary development tasks. Use a short-lived branch from `dev` when external contributions, parallel work, experiments, or risky changes justify one.
- Review each change and run relevant local validation before committing or pushing to `dev`. Keep changes focused and describe their status and any data or migration impact.
- Include test evidence appropriate to the change. For documentation, run `git diff --check` and check relative links and status claims. For code, report the relevant automated tests and any manual checks, including limitations.
- Open a reviewed pull request from `dev` into `main` when a release is ready. Require human approval before merging or releasing; do not merge or release through an autonomous agent.
- Configure CI to run on pushes to `dev` and pull requests targeting `main` once checks exist. Require those checks for releases after they have run successfully.
- Do not force-push or rewrite branch history.
- Assign one coding agent responsibility for each implementation task. Other reviewers can provide feedback without making concurrent implementation edits to that task.
- Do not automatically install third-party agent skills, governance frameworks, hooks, or MCP servers. Propose any such change for human review first.
- Use descriptive, focused commits and keep architecture decisions in `docs/decisions/` when a consequential choice is made.
