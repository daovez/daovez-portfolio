
import { Link } from 'react-router'

export function NotFound() {
  return (
    <section className="page not-found">
      <p className="not-found-code">404</p>

      <h1>Página no encontrada</h1>

      <p>
        La página que buscas no existe
        o ha cambiado de dirección.
      </p>

      <Link className="not-found-link" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}
