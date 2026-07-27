import { useState, type FormEvent } from 'react'
import { profile } from '../data/resumeData'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">CONTACT</span>
          <h2 className="section-heading display-6 mt-3">Let's build something great together.</h2>
          <p className="section-sub mx-auto mt-2">
            Open to Software Engineer, Full Stack and Generative AI roles. Reach out any time.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <div className="contact-card h-100">
              <div className="contact-row">
                <i className="bi bi-envelope"></i>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-row">
                <i className="bi bi-telephone"></i>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              </div>
              <div className="contact-row">
                <i className="bi bi-linkedin"></i>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/deepak-kumar
                </a>
              </div>
              <div className="contact-row">
                <i className="bi bi-github"></i>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.github.replace('https://', '')}
                </a>
              </div>
              <div className="contact-row">
                <i className="bi bi-geo-alt"></i>
                {profile.location}
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <form className="contact-card h-100" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label small text-muted-soft" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-control form-control-dark"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label small text-muted-soft" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control form-control-dark"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small text-muted-soft" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control form-control-dark"
                    rows={4}
                    placeholder="Tell me a bit about the role or project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn-accent w-100 w-sm-auto" type="submit">
                    <i className="bi bi-send me-2"></i>Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
