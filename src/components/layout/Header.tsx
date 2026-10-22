
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

const navigation = [
  { label: 'Inicio', path: '/' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Sobre mí', path: '/sobre-mi' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Al navegar, cerramos el menú móvil.
  const [previousPath, setPreviousPath] = useState(location.pathname)

  if (previousPath !== location.pathname) {
    setPreviousPath(location.pathname)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Link
        to="/"
        className="site-logo"
        onClick={() => setMenuOpen(false)}
        aria-label="DAOVEZ — Ir al inicio"
      >
        daovez<span>.</span>dev
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="menu-toggle-line" />
        <span className="menu-toggle-line" />
        <span className="menu-toggle-line" />
      </button>

      <nav
        id="primary-navigation"
        className={`site-navigation ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        <ul className="site-nav">
          {navigation.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
