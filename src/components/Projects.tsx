import { projects } from '../data/resumeData'

function Projects() {
  return (
    <section id="projects" className="bg-black bg-opacity-25">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">FEATURED PROJECTS</span>
          <h2 className="section-heading display-6 mt-3">Systems I've built end-to-end.</h2>
          <p className="section-sub mx-auto mt-2">
            Selected projects spanning Generative AI platforms to production backend services.
          </p>
        </div>

        <div className="d-flex flex-column gap-4">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-visual">
                <i className="bi bi-layers"></i>
              </div>
              <div className="project-body">
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                  <h3 className="h5 fw-semibold mb-0">{project.title}</h3>
                  <span className="badge-soft">{project.architecture}</span>
                </div>
                <p className="text-muted-soft mb-3">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span className="badge-soft" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="fw-semibold small text-muted-soft mb-2">KEY FEATURES</div>
                    <ul className="text-muted-soft mb-0 ps-3" style={{ lineHeight: 1.8 }}>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
