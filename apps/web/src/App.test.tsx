import { StrictMode } from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useLocation, useNavigate } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from './App'
import { DATA_SOURCES_PATH, OVERVIEW_PATH, TEAM_OVERVIEW_PATH } from './components/Navigation'

function LocationProbe() {
  const location = useLocation()
  return <output data-testid="location">{location.pathname}</output>
}

function HistoryControls() {
  const navigate = useNavigate()
  return <><button onClick={() => navigate(-1)}>Back</button><button onClick={() => navigate(1)}>Forward</button></>
}

function renderAt(path: string, withHistoryControls = false) {
  return render(<StrictMode><MemoryRouter initialEntries={[path]}><App /><LocationProbe />{withHistoryControls && <HistoryControls />}</MemoryRouter></StrictMode>)
}

function primaryLink(name: string) {
  return within(screen.getByRole('navigation', { name: 'Primary navigation' })).getByRole('link', { name })
}

describe('routes and content', () => {
  it('renders the Brentford overview at the root without redirecting or focusing its heading', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).not.toHaveFocus()
    expect(screen.getByTestId('location')).toHaveTextContent(OVERVIEW_PATH)
    expect(primaryLink('Overview')).toHaveAttribute('href', '/')
    expect(primaryLink('Overview')).toHaveAttribute('aria-current', 'page')
  })

  it('keeps the team-scoped route as an equivalent Overview', async () => {
    const user = userEvent.setup()
    renderAt(TEAM_OVERVIEW_PATH)
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).not.toHaveFocus()
    expect(screen.getByTestId('location')).toHaveTextContent(TEAM_OVERVIEW_PATH)
    expect(primaryLink('Overview')).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('heading', { name: 'No validated dataset connected' })).toBeInTheDocument()
    expect(screen.getByText(/not affiliated with or endorsed by Brentford FC/i)).toBeInTheDocument()
    await user.click(primaryLink('Overview'))
    expect(screen.getByTestId('location')).toHaveTextContent('/')
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toHaveFocus()
  })

  it('loads Data Sources directly with source-use limitations', () => {
    renderAt(DATA_SOURCES_PATH)
    expect(screen.getByRole('heading', { level: 1, name: 'Data Sources' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Data Sources' })).not.toHaveFocus()
    expect(primaryLink('Overview')).not.toHaveAttribute('aria-current')
    expect(primaryLink('Data Sources')).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText(/legacy Brentford scraping and pipeline code is preserved for evaluation/i)).toBeInTheDocument()
    expect(screen.getByText('Source and usage rights')).toBeInTheDocument()
  })

  it('offers a useful unknown-route fallback', async () => {
    const user = userEvent.setup()
    renderAt('/unknown')
    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: /go to overview/i }))
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toHaveFocus()
  })

  it('supports back and forward navigation and updates page titles', async () => {
    const user = userEvent.setup()
    renderAt(OVERVIEW_PATH, true)
    await waitFor(() => expect(document.title).toBe('Overview | Motus Football Analytics'))
    await user.click(primaryLink('Data Sources'))
    expect(screen.getByRole('heading', { level: 1, name: 'Data Sources' })).toHaveFocus()
    await waitFor(() => expect(document.title).toBe('Data Sources | Motus Football Analytics'))
    await user.click(screen.getByRole('button', { name: 'Back' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toHaveFocus()
    await user.click(screen.getByRole('button', { name: 'Forward' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Data Sources' })).toBeInTheDocument()
  })

  it('preserves the logo node during route changes and focuses after keyboard navigation', async () => {
    const user = userEvent.setup()
    const { container } = renderAt(OVERVIEW_PATH)
    const logo = container.querySelector('.brand-mark')
    primaryLink('Data Sources').focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('heading', { level: 1, name: 'Data Sources' })).toHaveFocus()
    expect(container.querySelector('.brand-mark')).toBe(logo)
  })
})

describe('mobile navigation and team context', () => {
  it('closes the menu and focuses the new heading after keyboard navigation', async () => {
    const user = userEvent.setup()
    renderAt(OVERVIEW_PATH)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true')
    primaryLink('Data Sources').focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('heading', { level: 1, name: 'Data Sources' })).toHaveFocus()
  })

  it('closes with Escape and returns focus to the menu button', async () => {
    const user = userEvent.setup()
    renderAt(OVERVIEW_PATH)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    primaryLink('Data Sources').focus()
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus()
  })

  it('shows a static Brentford context without a fake selector or crest', () => {
    renderAt(OVERVIEW_PATH)
    expect(screen.getByText('Brentford FC', { selector: 'strong' }).parentElement).toHaveAttribute('data-team-id', 'brentford-fc')
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    expect(screen.queryByText('B')).not.toBeInTheDocument()
  })

  it('keeps the skip link and labeled navigation', () => {
    renderAt(OVERVIEW_PATH)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main-content')
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })
})
