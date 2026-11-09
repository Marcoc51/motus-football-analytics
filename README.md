# Motus Football Analytics

Motus Football Analytics is an independent, open-source football analytics platform in development. Brentford is the first supported team. The intended product will be team-aware, with a team-selection interface that can support additional clubs in the future.

This public project has its own codebase and roadmap, separate from the commercial Motus product. The Motus co-founders have approved use of the Motus brand identity. Motus Football Analytics is **not affiliated with or endorsed by Brentford FC**.

## Project status

| Status | What is in this repository |
| --- | --- |
| Implemented in the original project | Legacy Python scraping and ETL code, Airflow DAGs, dbt models, and configuration files are present. Their current operational status has not been verified. |
| Historical | The original Brentford Data Engineering Zoomcamp work uses PostgreSQL as a landing database, Snowflake as a warehouse, and Power BI for reporting. It remains for context during the redesign. Historical datasets are not published or redistributed here. |
| Implemented in the new frontend | A React and TypeScript workspace under [`apps/web/`](apps/web/README.md), with Motus branding, static Brentford team context, Overview and Data Sources routes, honest empty states, component tests, and frontend GitHub Actions checks. It has no live football data connection. |
| Planned | Additional clubs; a PostgreSQL warehouse with Bronze, Silver, and Gold schemas; redesigned dbt transformations and Airflow orchestration. A Python and FastAPI backend is proposed. |

The new frontend is an interface foundation, not an operational analytics platform. The FastAPI backend, PostgreSQL warehouse, and redesigned automated pipelines **have not been implemented or validated**. Existing legacy files should not be read as instructions for running the future platform.

## Development

To run and test the frontend, see the [web application guide](apps/web/README.md). For project decisions, see the [architecture overview](docs/architecture/overview.md), [product and repository decision](docs/decisions/0001-product-and-repository.md), [technology direction](docs/decisions/0002-technology-direction.md), [interface direction](docs/decisions/0003-instrument-panel-interface.md), and [development workflow](docs/development/workflow.md). The [resources and attribution record](docs/development/resources-and-attribution.md) distinguishes installed dependencies from research references.

The [data dictionary](data_dictionary.md) describes the historical Brentford project. Its dashboard and architecture images are no longer included in the current public tree.

## Licensing and attribution

Original software that the project owner has authority to license, including the original Brentford Python, Airflow, and SQL/dbt code and the Motus frontend source, is available under [Apache License 2.0](LICENSE). This grant does not cover every file in the repository. The Motus name and [three bundled SVG assets](BRANDING.md) have separate brand-use terms. Bundled fonts retain their [SIL Open Font License 1.1 notices](apps/web/THIRD_PARTY_NOTICES.md), and third-party dependencies retain their upstream licenses.

Historical [dashboard screenshots and architecture imagery](docs/development/resources-and-attribution.md#historical-images) have been removed from the current public tree and are not licensed under Apache-2.0. Their third-party elements and redistribution rights require further review. Raw historical football datasets are not included or licensed for redistribution. Football statistics, club marks, and data-provider materials remain subject to their own rights and terms; inclusion of a historical reference does not imply endorsement.
