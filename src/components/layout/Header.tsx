
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
      <a className="site-logo" href="/" aria-label="DAOVEZ - Inicio">
        daovez<span>.</span>dev
      </a>

      <nav aria-label="Navegación principal">
        <ul className="site-nav">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
