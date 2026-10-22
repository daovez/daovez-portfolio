
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsGrid() {
  return (
    <div className="portfolio-projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  )
}
