# Architecture overview

Motus Football Analytics is an independent, open-source football analytics platform in transition from the original Brentford Data Engineering Zoomcamp project. Brentford is the first supported team; the intended product should let users select a team and eventually support additional clubs. This is a design direction, not an implemented multi-team system.

## Status

| Area | Current status | Direction |
| --- | --- | --- |
| User interface | React and TypeScript workspace under `apps/web/`; Overview and Data Sources routes, static Brentford context, and no live data connection | Genuine team switching, additional clubs, and data-backed analytical views are planned |
| API | No FastAPI application in this repository | Proposed Python and FastAPI backend |
| Data storage | Historical PostgreSQL landing database and Snowflake warehouse configuration | Planned PostgreSQL warehouse with Bronze, Silver, and Gold schemas |
| Transformation | Historical dbt project targeting Snowflake | Planned dbt transformations for the PostgreSQL warehouse |
| Orchestration | Historical Airflow DAGs | Planned Airflow orchestration for redesigned pipelines |
| Reporting | Historical Power BI work; dashboard screenshots are no longer in the current public tree | Planned platform reporting; presentation details remain open |

The legacy scraper, ETL code, dbt models, DAGs, and documentation remain as historical project material. Their presence does not establish that the redesigned platform or its pipelines run today. Historical datasets are not published or redistributed as part of this transition.

## Boundaries and open questions

- Keep the public open-source codebase and roadmap separate from the commercial Motus product.
- Keep team identity explicit in future product and data design; the team model, data contracts, and selection behavior are not yet specified.
- Decide how existing data may be sourced, licensed, refreshed, and tested before implementing a new pipeline.
- Decide deployment, authentication, reporting details, and the migration path from Snowflake and Power BI in later decisions.

See [product and repository decision](../decisions/0001-product-and-repository.md), [technology direction](../decisions/0002-technology-direction.md), and [development workflow](../development/workflow.md).
