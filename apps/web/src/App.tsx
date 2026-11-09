import { useEffect, useLayoutEffect, useRef, useState, type Ref } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router'
import { Navigation, DATA_SOURCES_PATH, OVERVIEW_PATH, TEAM_OVERVIEW_PATH } from './components/Navigation'

const REPOSITORY_URL = 'https://github.com/Marcoc51/motus-football-analytics'
const ARCHITECTURE_URL = `${REPOSITORY_URL}/blob/dev/docs/architecture/overview.md`

type PageProps = { headingRef: Ref<HTMLHeadingElement> }

function Overview({ headingRef }: PageProps) {
  return (
    <>
      <div className="page-heading">
        <div><p className="page-context">Workspace</p><h1 ref={headingRef} tabIndex={-1}>Overview</h1><p className="page-description">A home for Brentford analysis as verified data becomes available.</p></div>
      </div>

      <section className="status-panel" aria-labelledby="overview-status-title">
        <span className="status-icon" aria-hidden="true">i</span>
        <div className="status-copy"><p className="status-label">Data connection</p><h2 id="overview-status-title">No validated dataset connected</h2><p>This frontend currently has no live football data. The original Brentford implementation remains in the repository, but its current operation has not been verified.</p></div>
        <Link className="text-link status-link" to={DATA_SOURCES_PATH}>View data sources <span aria-hidden="true">→</span></Link>
      </section>

      <div className="workspace-grid">
        <section className="panel analysis-panel" aria-labelledby="analysis-title">
          <div className="panel-header"><div><p className="panel-kicker">Workspace</p><h2 id="analysis-title">Analysis</h2></div><span className="panel-tag">Awaiting data</span></div>
          <div className="empty-workspace"><span className="empty-rule" aria-hidden="true" /><h3>Ready for trustworthy analysis</h3><p>Tables, metrics and visualizations will be added only after their data sources and definitions are documented and validated.</p></div>
        </section>
        <aside className="panel guidance-panel" aria-labelledby="guidance-title">
          <p className="panel-kicker">Getting started</p><h2 id="guidance-title">Understand the foundation</h2>
          <p>Review the source requirements and architecture decisions behind this public project.</p>
          <div className="guidance-links"><Link className="text-link" to={DATA_SOURCES_PATH}>Data Sources <span aria-hidden="true">→</span></Link><a className="text-link external-link" href={ARCHITECTURE_URL}>Architecture documentation <span aria-hidden="true">↗</span></a></div>
        </aside>
      </div>
    </>
  )
}

function DataSources({ headingRef }: PageProps) {
  return (
    <>
      <div className="page-heading"><div><p className="page-context">Platform / Data</p><h1 ref={headingRef} tabIndex={-1}>Data Sources</h1><p className="page-description">What is available, what needs verification, and what comes next.</p></div></div>
      <section className="status-panel" aria-labelledby="sources-status-title">
        <span className="status-icon" aria-hidden="true">i</span>
        <div className="status-copy"><p className="status-label">Current state</p><h2 id="sources-status-title">No connected validated football dataset</h2><p>No historical data is exposed through this interface. Legacy Brentford scraping and pipeline code is preserved for evaluation, not represented as an operational source.</p></div>
      </section>
      <section className="panel source-panel" aria-labelledby="source-review-title">
        <div className="panel-header"><div><p className="panel-kicker">Source readiness</p><h2 id="source-review-title">Verification requirements</h2></div><span className="panel-tag">Not established</span></div>
        <p className="section-intro">Before any source appears in Motus, its use conditions and data quality must be understood. These fields will hold documented evidence rather than assumed coverage.</p>
        <dl className="source-list">
          <div><dt>Source and usage rights</dt><dd>To be verified before publication</dd></div>
          <div><dt>Club and competition coverage</dt><dd>Not established</dd></div>
          <div><dt>Freshness and refresh method</dt><dd>Not established</dd></div>
          <div><dt>Quality and provenance</dt><dd>Not established</dd></div>
        </dl>
      </section>
      <div className="source-footer"><p>Read the current architectural direction and open questions.</p><a className="text-link external-link" href={ARCHITECTURE_URL}>Architecture documentation <span aria-hidden="true">↗</span></a></div>
    </>
  )
}

function NotFound({ headingRef }: PageProps) {
  return <section className="not-found"><p className="page-context">Page unavailable</p><h1 ref={headingRef} tabIndex={-1}>Page not found</h1><p>This address is not part of the current Motus workspace.</p><Link className="text-link" to={OVERVIEW_PATH}>Go to Overview <span aria-hidden="true">→</span></Link></section>
}

function App() {
  const location = useLocation()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [navigationCount, setNavigationCount] = useState(0)
  const previousNavigation = useRef({ pathname: location.pathname, count: navigationCount })

  useLayoutEffect(() => {
    const previous = previousNavigation.current
    previousNavigation.current = { pathname: location.pathname, count: navigationCount }
    if (previous.pathname !== location.pathname || previous.count !== navigationCount) headingRef.current?.focus()
  }, [location.pathname, navigationCount])

  useEffect(() => {
    const page = location.pathname === OVERVIEW_PATH || location.pathname === TEAM_OVERVIEW_PATH ? 'Overview' : location.pathname === DATA_SOURCES_PATH ? 'Data Sources' : 'Page not found'
    document.title = `${page} | Motus Football Analytics`
  }, [location.pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation onNavigate={() => setNavigationCount((count) => count + 1)} />
      <main id="main-content" className="main-content">
        <Routes>
          <Route path={OVERVIEW_PATH} element={<Overview headingRef={headingRef} />} />
          <Route path={TEAM_OVERVIEW_PATH} element={<Overview headingRef={headingRef} />} />
          <Route path={DATA_SOURCES_PATH} element={<DataSources headingRef={headingRef} />} />
          <Route path="*" element={<NotFound headingRef={headingRef} />} />
        </Routes>
      </main>
      <footer className="site-footer"><span>Motus Football Analytics · Open source</span><span>Not affiliated with or endorsed by Brentford FC.</span><a href={REPOSITORY_URL}>View on GitHub <span aria-hidden="true">↗</span></a></footer>
    </div>
  )
}

export default App
