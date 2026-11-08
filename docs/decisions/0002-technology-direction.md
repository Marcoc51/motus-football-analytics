# 0002: Technology direction

Status: Accepted direction; implementation pending.

## Decision

- Plan a React and TypeScript frontend.
- Propose a Python and FastAPI backend; its API design is not yet decided.
- Plan a PostgreSQL data warehouse with Bronze, Silver, and Gold schemas.
- Plan dbt for transformations, Airflow for orchestration, and GitHub Actions for validation as components are introduced.
- Preserve the historical Snowflake, Power BI, dbt, and Airflow files during the transition.

## Rationale

This direction supports an open-source application with a team-aware user interface and a PostgreSQL-centered analytical data model. Phased implementation allows each component to be designed and validated before it is presented as working.

## Alternatives considered

The repository's original approach uses PostgreSQL as a landing database, Snowflake for the warehouse, dbt and Airflow in its pipeline, and Power BI for reporting. The planned PostgreSQL warehouse and application interface are a change in direction; no migration has been implemented.

## Open questions

- What are the first data sources, permissions, refresh requirements, and quality checks?
- What are the schema contracts, team identifiers, and boundaries between Bronze, Silver, and Gold?
- What API endpoints, frontend libraries beyond React, deployment environment, and CI checks are appropriate? These are not approved dependencies yet.
- How should historical dbt models, DAGs, and reporting assets be evaluated for reuse?
