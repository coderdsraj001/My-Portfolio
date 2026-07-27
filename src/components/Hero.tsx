import { profile } from '../data/resumeData'

function Hero() {
  return (
    <section id="home" className="hero-section pb-5">
      <div className="hero-bg-glow" />
      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="badge-soft mb-3 d-inline-block">
              {'</>'} Software Engineer &middot; Full Stack &middot; Generative AI
            </span>
            <h1 className="hero-heading mb-3">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
              <br />
              {profile.heroHeadingLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="section-sub mb-4">{profile.heroSubtext}</p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <span className="stat-pill">
                <i className="bi bi-briefcase"></i> {profile.yearsExperience}
              </span>
              <span className="stat-pill">
                <i className="bi bi-geo-alt"></i> {profile.location}
              </span>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a className="btn-accent" href={profile.resumeFile} download>
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
              <a className="btn-outline-soft" href="#contact">
                <i className="bi bi-envelope me-2"></i>Contact Me
              </a>
            </div>

            <div className="d-flex gap-3 mt-4">
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
          </div>

          <div className="col-lg-5">
            <div className="code-window">
              <div className="code-window-bar">
                <span className="code-dot" style={{ background: '#ff5f56' }} />
                <span className="code-dot" style={{ background: '#ffbd2e' }} />
                <span className="code-dot" style={{ background: '#27c93f' }} />
              </div>
              <pre>
                <span className="token-key">const</span> developer <span className="token-punct">=</span> {'{'}
                {'\n  '}
                <span className="token-key">name</span><span className="token-punct">:</span>{' '}
                <span className="token-str">'Deepak Kumar'</span>,
                {'\n  '}
                <span className="token-key">role</span><span className="token-punct">:</span>{' '}
                <span className="token-str">'Full Stack Engineer'</span>,
                {'\n  '}
                <span className="token-key">stack</span><span className="token-punct">:</span> [
                <span className="token-str">'Python'</span>, <span className="token-str">'FastAPI'</span>,{' '}
                <span className="token-str">'React'</span>],
                {'\n  '}
                <span className="token-key">focus</span><span className="token-punct">:</span>{' '}
                <span className="token-str">'Generative AI'</span>,
                {'\n  '}
                <span className="token-key">experience</span><span className="token-punct">:</span>{' '}
                <span className="token-str">'3+ years'</span>,
                {'\n  '}
                <span className="token-key">available</span><span className="token-punct">:</span>{' '}
                <span className="token-str">true</span>,
                {'\n'}
                {'}'}
                {'\n\n'}
                <span className="token-comment">{'// > Open to new opportunities'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
