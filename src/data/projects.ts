
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'daovez-portfolio',
    title: 'DAOVEZ Portfolio',
    description:
      'Portfolio personal desarrollado con React, TypeScript y Vite. Incluye navegación responsive y componentes reutilizables.',
    category: 'web',
    status: 'in-progress',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    featured: true,
    githubUrl: 'https://github.com/daovez/daovez-portfolio',
  },
  {
    id: 'daovez-mail',
    title: 'Daovez Mail',
    description:
      'Proyecto de automatización inteligente para clasificar, organizar y gestionar correos electrónicos.',
    category: 'automation',
    status: 'planned',
    technologies: ['Python', 'IA', 'APIs'],
    featured: true,
  },
  {
    id: 'daovez-clients',
    title: 'Daovez Clients',
    description:
      'Proyecto de aplicación CRM para organizar clientes y procesos comerciales.',
    category: 'software',
    status: 'planned',
    technologies: ['React', 'TypeScript'],
    featured: true,
  },
  {
    id: 'biblioteca-daovez',
    title: 'Biblioteca Daovez',
    description:
      'Biblioteca digital de aprendizaje con apuntes, conceptos y recursos sobre programación e inteligencia artificial.',
    category: 'education',
    status: 'in-progress',
    technologies: ['Web', 'MDX'],
    featured: true,
  },
]
