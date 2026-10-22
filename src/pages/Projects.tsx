
import { ProjectsGrid } from '../components/projects/ProjectGrid'

export function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-page-header">
        <p className="section-eyebrow">
          PORTFOLIO / PROYECTOS
        </p>

        <h1>
          Proyectos y <span>experimentos.</span>
        </h1>

        <p className="projects-page-intro">
          Una selección de aplicaciones, herramientas y proyectos
          personales relacionados con el desarrollo de software,
          la automatización y la inteligencia artificial.
        </p>
      </header>

      <ProjectsGrid />
    </div>
  )
}
