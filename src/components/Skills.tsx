import { skillGroups } from '../data/resumeData'

const groupIcons: Record<string, string> = {
  backend: 'bi-server',
  frontend: 'bi-window',
  ai: 'bi-stars',
  tools: 'bi-tools',
}

function Skills() {
  return (
    <section id="skills" className="bg-black bg-opacity-25">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">SKILLS</span>
          <h2 className="section-heading display-6 mt-3">A full-stack toolkit, built for AI-powered products.</h2>
          <p className="section-sub mx-auto mt-2">Technologies I use daily to design, build and ship production software.</p>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-sm-6 col-lg-3" key={group.key}>
              <div className="skill-card">
                <div className="icon-tile">
                  <i className={`bi ${groupIcons[group.key]}`}></i>
                </div>
                <h3 className="h6 fw-semibold mb-3">{group.title}</h3>
                <ul className="list-unstyled skill-list mb-0">
                  {group.items.map((item) => (
                    <li key={item}>
                      <i className="bi bi-check2-square"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
