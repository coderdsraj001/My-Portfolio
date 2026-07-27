import { profile } from '../data/resumeData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 text-center text-sm-start">
        <div className="d-flex align-items-center gap-2">
          <span className="brand-mark">{profile.initials}</span>
          <div>
            <div className="text-white fw-semibold small">{profile.name}</div>
            <div className="small">{profile.title}</div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <a className="social-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a className="social-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="social-icon" href={`mailto:${profile.email}`} aria-label="Email">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <div className="small">&copy; 2026 {profile.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
