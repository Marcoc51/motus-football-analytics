# Motus Football Analytics

Motus Football Analytics is an independent, open-source football analytics platform in development. Brentford is the first supported team. The intended product will be team-aware, with a team-selection interface that can support additional clubs in the future.

This public project has its own codebase and roadmap, separate from the commercial Motus product. The Motus co-founders have approved use of the Motus brand identity. Motus Football Analytics is **not affiliated with or endorsed by Brentford FC**.

## Project status

| Status | What is in this repository |
| --- | --- |
| Implemented in the original project | Legacy Python scraping and ETL code, Airflow DAGs, dbt models, and configuration files are present. Their current operational status has not been verified. |
| Historical | The original Brentford Data Engineering Zoomcamp work uses PostgreSQL as a landing database, Snowflake as a warehouse, and Power BI for reporting. It remains for context during the redesign. Historical datasets are not published or redistributed here. |
| Planned | A React and TypeScript frontend with team selection; a PostgreSQL warehouse with Bronze, Silver, and Gold schemas; redesigned dbt transformations and Airflow orchestration. A Python and FastAPI backend is proposed. GitHub Actions validation is planned as components are added. |

The new React platform, FastAPI backend, PostgreSQL warehouse, and redesigned automated pipelines **have not been implemented or validated**. Existing files should not be read as instructions for running the future platform.

## Development

Work is being prepared in phases. See the [architecture overview](docs/architecture/overview.md), [product and repository decision](docs/decisions/0001-product-and-repository.md), [technology direction](docs/decisions/0002-technology-direction.md), and [development workflow](docs/development/workflow.md).

The [data dictionary](data_dictionary.md) and [original architecture diagram](architecture_diagram.png) describe the historical Brentford project.
