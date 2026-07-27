import { aboutText, highlights, profile, education } from '../data/resumeData'

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">{aboutText.eyebrow}</span>
          <h2 className="section-heading display-6 mt-3">{aboutText.heading}</h2>
          <p className="section-sub mx-auto mt-2">{aboutText.subheading}</p>
        </div>

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-4 text-center">
            <div className="avatar-block">{profile.initials}</div>
            <div className="stat-pill mt-4 d-inline-flex">
              <i className="bi bi-mortarboard"></i> {profile.yearsExperience}
            </div>
          </div>
          <div className="col-lg-8">
            <p className="text-muted-soft mb-4" style={{ lineHeight: 1.8 }}>
              {aboutText.paragraph}
            </p>
            <div className="card-surface p-3 d-flex flex-row align-items-center gap-3">
              <div className="icon-tile mb-0 flex-shrink-0">
                <i className="bi bi-mortarboard"></i>
              </div>
              <div>
                <div className="fw-semibold">{education.degree}</div>
                <div className="text-muted-soft small">
                  {education.school} &middot; {education.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {highlights.map((h) => (
            <div className="col-sm-6 col-lg-3" key={h.title}>
              <div className="highlight-card">
                <div className="icon-tile">
                  <i className={`bi ${h.icon}`}></i>
                </div>
                <h3 className="h6 fw-semibold mb-2">{h.title}</h3>
                <p className="text-muted-soft small mb-0">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
