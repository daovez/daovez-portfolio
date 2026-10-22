
import { NavLink } from 'react-router'

const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export function Header() {
  return (
    <header className="site-header">
      <NavLink
        to="/"
        className="site-logo"
        aria-label="DAOVEZ - Inicio"
      >
        daovez<span>.</span>dev
      </NavLink>

      <nav aria-label="Navegación principal">
        <ul className="site-nav">
          {navigation.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
