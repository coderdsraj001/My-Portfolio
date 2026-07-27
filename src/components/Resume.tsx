import { profile } from '../data/resumeData'

function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">RESUME</span>
          <h2 className="section-heading display-6 mt-3">Everything above, in one document.</h2>
          <p className="section-sub mx-auto mt-2">A quick preview, or grab the full PDF to keep on file.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="resume-preview">
              <div className="row g-4 align-items-center">
                <div className="col-sm-5">
                  <div className="resume-page-mock">
                    <div className="fw-bold" style={{ fontSize: '0.95rem', color: '#1a1a2e' }}>
                      {profile.name}
                    </div>
                    <div style={{ color: '#5b6b8c', fontSize: '0.6rem' }} className="mb-2">
                      {profile.title} &middot; {profile.location}
                    </div>
                    <div style={{ height: 2, background: '#3b82f6', width: '30%' }} className="mb-2" />
                    <div className="fw-semibold mb-1" style={{ color: '#3b82f6' }}>
                      Experience
                    </div>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} style={{ height: 4, background: '#e2e5f0', width: `${90 - i * 8}%` }} className="mb-1 rounded" />
                    ))}
                    <div className="fw-semibold mt-2 mb-1" style={{ color: '#3b82f6' }}>
                      Skills
                    </div>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} style={{ height: 4, background: '#e2e5f0', width: `${75 - i * 10}%` }} className="mb-1 rounded" />
                    ))}
                  </div>
                </div>
                <div className="col-sm-7">
                  <h3 className="h5 fw-semibold mb-1">{profile.name} &mdash; Resume</h3>
                  <p className="text-muted-soft small mb-4">
                    Full Stack Engineer with 3+ years across Python, FastAPI, Django and React. Includes full
                    work history, tech stack and education.
                  </p>
                  <a className="btn-accent" href={profile.resumeFile} download>
                    <i className="bi bi-file-earmark-pdf me-2"></i>Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
