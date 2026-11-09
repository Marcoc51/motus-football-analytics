export const INITIAL_TEAM_ID = 'brentford-fc'

export function TeamContext() {
  return <div className="team-context" data-team-id={INITIAL_TEAM_ID}><span className="team-context-label">Team</span><strong>Brentford FC</strong></div>
}
