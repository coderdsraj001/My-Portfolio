import { experience } from '../data/resumeData'

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">EXPERIENCE</span>
          <h2 className="section-heading display-6 mt-3">Where I've built production software.</h2>
          <p className="section-sub mx-auto mt-2">
            A track record of shipping full stack and AI-powered features end-to-end, from first commit to production.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {experience.map((job) => (
                <div className="timeline-item" key={`${job.company}-${job.range}`}>
                  <span className="timeline-dot" />
                  <div className="card-surface p-4">
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-1">
                      <h3 className="h5 fw-semibold mb-0">{job.role}</h3>
                      <span className="badge-soft">{job.range}</span>
                    </div>
                    <div className="text-muted-soft small mb-3">
                      {job.company} &middot; {job.location}
                    </div>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {job.tags.map((tag) => (
                        <span className="badge-soft" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="text-muted-soft mb-0 ps-3" style={{ lineHeight: 1.8 }}>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
