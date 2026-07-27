import { useEffect, useState } from 'react'
import { profile } from '../data/resumeData'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <nav className="navbar navbar-expand-lg fixed-top site-navbar py-2">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-semibold" href="#home">
          <span className="brand-mark">{profile.initials}</span>
          <span className="d-none d-sm-inline">{profile.name}</span>
        </a>

        <button
          className="btn btn-outline-soft d-lg-none border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
        </button>

        <div
          className={`w-100 d-lg-flex justify-content-lg-end ${open ? 'd-block mobile-nav-drawer' : 'd-none'}`}
        >
          <ul className="navbar-nav d-flex flex-column flex-lg-row gap-lg-4 gap-2 mb-0">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
