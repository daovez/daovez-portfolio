
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <p className="footer-brand">daovez.dev</p>
          <p>Desarrollo de software, automatización e IA.</p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <a
            href="https://github.com/daovez"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="/contacto">Contacto</a>
        </nav>
      </div>

      <p className="footer-copyright">
        © {year} DAOVEZ. Todos los derechos reservados.
      </p>
    </footer>
  )
}
