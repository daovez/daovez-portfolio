
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

const statusLabels: Record<Project['status'], string> = {
  completed: 'Finalizado',
  'in-progress': 'En desarrollo',
  planned: 'Planificado',
}

const categoryLabels: Record<Project['category'], string> = {
  web: 'Desarrollo web',
  automation: 'Automatización',
  software: 'Software',
  education: 'Educación',
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="portfolio-project-card">
      <div className="portfolio-project-card-top">
        <span className="portfolio-project-category">
          {categoryLabels[project.category]}
        </span>

        <span className={`portfolio-project-status status-${project.status}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="portfolio-project-card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <ul className="portfolio-project-tech" aria-label="Tecnologías">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      {(project.githubUrl || project.demoUrl) && (
        <div className="portfolio-project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
