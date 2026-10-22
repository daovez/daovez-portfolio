
import { Link } from 'react-router'

const projects = [
  {
    id: 'mail',
    number: '01',
    category: 'AUTOMATIZACIÓN · IA',
    title: 'Daovez Mail',
    description:
      'Sistema de clasificación y gestión inteligente de correos electrónicos.',
    technologies: ['Python', 'IA', 'APIs'],
  },
  {
    id: 'clients',
    number: '02',
    category: 'SOFTWARE EMPRESARIAL',
    title: 'Daovez Clients',
    description:
      'Aplicación para organizar clientes, contactos y procesos comerciales.',
    technologies: ['React', 'TypeScript', 'CRM'],
  },
  {
    id: 'academy',
    number: '03',
    category: 'EDUCACIÓN · DESARROLLO WEB',
    title: 'Biblioteca Daovez',
    description:
      'Plataforma de consulta y aprendizaje con apuntes, conceptos y recursos técnicos.',
    technologies: ['React', 'MDX', 'Web'],
  },
]

export function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-title"
    >
      <div className="featured-heading">
        <div>
          <p className="section-eyebrow">TRABAJO SELECCIONADO</p>
          <h2 id="featured-title">Proyectos destacados.</h2>
        </div>

        <Link to="/proyectos" className="featured-all">
          Todos los proyectos <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="featured-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-top">
              <span>{project.number}</span>
              <span aria-hidden="true">↗</span>
            </div>

            <div className="project-card-body">
              <p className="project-category">
                {project.category}
              </p>
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
            </div>

            <ul className="project-technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

