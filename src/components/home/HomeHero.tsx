
import { Link } from 'react-router'

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero-content">
        <p className="home-hero-eyebrow">
          DESARROLLO DE SOFTWARE / AUTOMATIZACIÓN / IA
        </p>

        <h1 id="hero-title">
          Construyendo
          <span> soluciones digitales.</span>
        </h1>

        <p className="home-hero-description">
          Soy desarrollador de software y estudiante de
          Ingeniería en Inteligencia Artificial. Exploro,
          diseño y desarrollo aplicaciones y soluciones
          que conectan tecnología con necesidades reales.
        </p>

        <div className="home-hero-actions">
          <Link to="/proyectos" className="hero-button-primary">
            Explorar proyectos <span aria-hidden="true">↗</span>
          </Link>

          <Link to="/sobre-mi" className="hero-button-secondary">
            Sobre mí
          </Link>
        </div>
      </div>
    </section>
  )
}
