
export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'planned'

export type ProjectCategory =
  | 'web'
  | 'automation'
  | 'software'
  | 'education'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  status: ProjectStatus
  technologies: string[]
  featured: boolean
  githubUrl?: string
  demoUrl?: string
}

