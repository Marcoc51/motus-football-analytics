import { useRef, useState, type KeyboardEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { TeamContext } from './TeamContext'

export const OVERVIEW_PATH = '/'
export const TEAM_OVERVIEW_PATH = '/teams/brentford-fc/overview'
export const DATA_SOURCES_PATH = '/data-sources'

type NavigationProps = { onNavigate: () => void }

export function Navigation({ onNavigate }: NavigationProps) {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const overviewActive = pathname === OVERVIEW_PATH || pathname === TEAM_OVERVIEW_PATH

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && mobileOpen) {
      setMobileOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  function handleNavigate() {
    setMobileOpen(false)
    onNavigate()
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <div className="header-inner">
        <Link className="brand" to={OVERVIEW_PATH} onClick={handleNavigate} aria-label="Motus Football Analytics home">
          <img src="/logo-icon.svg" alt="" className="brand-mark" />
          <span className="brand-wordmark"><strong>Motus</strong><span>Football Analytics</span></span>
        </Link>

        <nav id="primary-navigation" className={`primary-nav${mobileOpen ? ' primary-nav--open' : ''}`} aria-label="Primary navigation">
          <Link to={OVERVIEW_PATH} className={`nav-link${overviewActive ? ' nav-link--active' : ''}`} aria-current={overviewActive ? 'page' : undefined} onClick={handleNavigate}>Overview</Link>
          <NavLink to={DATA_SOURCES_PATH} className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`} onClick={handleNavigate}>Data Sources</NavLink>
        </nav>

        <TeamContext />
        <button ref={menuButtonRef} type="button" className="mobile-menu-button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => setMobileOpen((open) => !open)}>
          <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
        </button>
      </div>
    </header>
  )
}
