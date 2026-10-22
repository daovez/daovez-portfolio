# DAOVEZ Portfolio — Plan de proyecto

> **Estado:** Borrador para revisión · **Versión:** 0.2 · **Fecha:** 2026-10-22  
> **Repositorio:** `daovez/daovez-portfolio` · **Rama de trabajo:** `docs/sprint-0-foundation`

## 1. Visión

DAOVEZ Portfolio será el portfolio profesional de un desarrollador de software en formación, orientado principalmente a reclutadores, responsables técnicos, empresas que ofrecen prácticas y posibles colaboradores.

El objetivo no es acumular secciones, sino **demostrar competencias mediante proyectos reales, explicaciones técnicas claras y un proceso de desarrollo trazable**.

## 2. Objetivos del producto

1. Presentar de forma inmediata quién es el desarrollador, qué construye y cómo contactar.
2. Mostrar entre tres y cinco proyectos destacados cuando existan proyectos suficientes y verificables.
3. Explicar cada proyecto como caso de estudio: problema, solución, arquitectura, decisiones, pruebas, estado, resultados y enlaces.
4. Ofrecer información veraz sobre habilidades, formación y experiencia.
5. Publicar artículos técnicos, apuntes de estudio y un glosario en un blog unificado.
6. Aplicar buenas prácticas de accesibilidad, rendimiento, seguridad y SEO.
7. Demostrar un flujo profesional de trabajo mediante issues, ramas, commits, PR y documentación.

## 3. Público objetivo

- Reclutadores y responsables de contratación de perfiles junior.
- Equipos técnicos que evalúan código, decisiones y capacidad de aprendizaje.
- Empresas que ofrecen prácticas en desarrollo de software.
- Posibles clientes o colaboradores que quieran conocer los proyectos.

## 4. Estructura de información

La navegación principal prevista es:

- **Inicio** (`/`): presentación, propuesta profesional, proyectos destacados y llamadas a la acción.
- **Proyectos** (`/proyectos`): listado y fichas por proyecto (`/proyectos/:slug`).
- **Sobre mí** (`/sobre-mi`): biografía, formación, tecnologías, experiencia y CV.
- **Blog** (`/blog`): puerta de entrada a artículos, apuntes y glosario.
- **Contacto** (`/contacto`): email profesional y enlaces públicos.

El blog incluirá:

- **Artículos** (`/blog/articulos` y `/blog/articulos/:slug`).
- **Apuntes** (`/blog/apuntes` y rutas por materia/tema).
- **Glosario** (`/blog/glosario` y fichas por término cuando corresponda).

Las rutas son propuestas y se validarán con el diseño y el contenido real.

## 5. Requisitos funcionales

| ID | Requisito | Prioridad | Criterio de aceptación |
|---|---|---|---|
| FR-001 | Portada profesional | Alta | Identidad, especialización y enlaces principales claros sin desplazarse excesivamente |
| FR-002 | Navegación responsive | Alta | Navegable con teclado y adaptable a móvil y escritorio |
| FR-003 | Proyectos destacados y listado | Alta | Cada proyecto muestra nombre, propósito, tecnologías y estado real |
| FR-004 | Caso de estudio de proyecto | Alta | Problema, solución, decisiones, capturas cuando existan y enlaces relevantes |
| FR-005 | Sobre mí | Alta | Trayectoria y formación verificables, sin inflar competencias |
| FR-006 | Contacto | Alta | Al menos una vía de contacto funcional y enlaces accesibles |
| FR-007 | CV | Media | Enlace a PDF actualizado si existe archivo aprobado |
| FR-008 | Blog unificado | Alta | Se pueden consultar artículos, apuntes y glosario desde `/blog` |
| FR-009 | Contenido MDX | Alta | Artículos y apuntes soportan títulos, enlaces, imágenes y bloques de código |
| FR-010 | Organización del contenido | Alta | Apuntes filtrables o navegables por materia y tema; artículos por categoría |
| FR-011 | Glosario | Media | Entradas con definiciones claras y enlaces internos cuando proceda |
| FR-012 | Búsqueda local del contenido | Media | El visitante puede localizar títulos o términos sin backend, si el volumen lo justifica |
| FR-013 | SEO básico | Alta | Metadatos por página, títulos comprensibles y sitemap al publicar |
| FR-014 | Integración con redes profesionales | Alta | Enlaces correctos a GitHub y LinkedIn |

## 6. Requisitos no funcionales

- **Accesibilidad:** objetivo WCAG 2.2 AA; navegación por teclado, HTML semántico, foco visible y contraste suficiente.
- **Responsive:** pruebas en anchos pequeños, medianos y grandes; sin scroll horizontal accidental.
- **Rendimiento:** medir LCP, INP y CLS en entorno real; optimizar recursos y reducir JavaScript innecesario.
- **Calidad:** TypeScript, formato consistente, comprobaciones automáticas y pruebas relevantes.
- **Seguridad:** nunca subir claves, tokens ni datos personales privados; minimizar dependencias.
- **Mantenibilidad:** componentes reutilizables y separación clara de páginas, contenido, diseño y lógica.
- **SEO:** metadatos, jerarquía correcta de encabezados, enlaces válidos y contenido indexable.
- **Privacidad:** evitar analítica intrusiva y formularios innecesarios.

## 7. Dirección visual acordada

- Estilo premium oscuro, minimalista y editorial.
- Azul mate como acento principal; evitar brillos, neones y animación gratuita.
- Jerarquía tipográfica clara, buena legibilidad y espacios generosos.
- Tarjetas de proyectos técnicas pero sobrias.
- Microinteracciones discretas, con respeto por `prefers-reduced-motion`.
- Identidad coherente con DAOVEZ, sin confundir el portfolio personal con las webs comerciales Studio y Systems.

**Nota:** la paleta exacta, tipografías y componentes se fijarán en `docs/DESIGN_SYSTEM.md` tras la fase de diseño. Los ejemplos visuales discutidos todavía no constituyen un diseño aprobado.

## 8. Stack propuesto (pendiente de ADR de confirmación)

- React + TypeScript + Vite.
- CSS con variables/tokens de diseño.
- MDX para artículos y apuntes.
- Router cliente solo si se justifica con la estructura de páginas.
- Vitest + Testing Library para pruebas.
- ESLint + Prettier para calidad.
- GitHub Actions para CI.
- Vercel para despliegues de prueba y producción.

Antes de implementar el blog, evaluar las implicaciones de SEO, prerenderizado y experiencia de lectura.

## 9. Alcance v1.0

**Dentro del alcance:** portada, proyectos y casos de estudio, sobre mí, contacto, blog con artículos/apuntes/glosario, responsive, accesibilidad básica auditada, documentación técnica, pruebas y despliegue.

**Fuera del alcance inicial:** cuentas de usuarios, autenticación, panel de administración, pagos, base de datos propia, CMS remoto obligatorio, tienda online y automatizaciones de negocio dentro del portfolio.

La búsqueda avanzada, filtros complejos y funcionalidades interactivas de apuntes pueden entregarse de forma incremental.

## 10. Flujo profesional de desarrollo

1. Crear o describir un issue con propósito y criterios de aceptación.
2. Abrir rama corta con nombre descriptivo.
3. Implementar un cambio pequeño y comprobable.
4. Ejecutar checks acordes al cambio.
5. Registrar commits auténticos con Conventional Commits.
6. Abrir pull request describiendo cambio, pruebas y capturas si hay UI.
7. Revisar el diff, corregir observaciones y fusionar con `main`.
8. Actualizar documentación y registro de desarrollo cuando corresponda.

No se crearán commits vacíos o ficticios para aumentar la actividad.

## 11. Definition of Done

Una tarea solo estará terminada si cumple sus criterios de aceptación, no rompe funcionalidades existentes, supera las comprobaciones relevantes, es usable por teclado cuando aplica, funciona en los tamaños previstos y está documentada cuando corresponda. El merge requiere una revisión del cambio.

## 12. Hitos

- **Sprint 0 — Descubrimiento y base documental:** requisitos, decisiones iniciales, sistema de trabajo, backlog.
- **Sprint 1 — Fundamentos técnicos y visuales:** entorno, arquitectura mínima, tokens, layouts.
- **Sprint 2 — Portfolio esencial:** portada, navegación, proyectos y sobre mí.
- **Sprint 3 — Contenido:** artículos MDX, apuntes y glosario.
- **Sprint 4 — Calidad:** pruebas, accesibilidad, rendimiento y SEO.
- **Sprint 5 — Lanzamiento:** despliegue, checklist, CV/enlaces y versión inicial.

No se estiman fechas todavía: el orden se adaptará al progreso real.

## 13. Cuestiones abiertas

- Idiomas: español, inglés o ambos.
- Contenido y permisos de uso de la fotografía profesional.
- Selección de proyectos reales y su estado de madurez.
- Dominio y estrategia de convivencia con la web actual.
- Formulario de contacto frente a enlaces directos.
- Diseño visual definitivo.
- Política de licencias del repositorio.

Estas cuestiones no bloquean la documentación inicial, pero sí algunas tareas de implementación.

## 14. Estado verificado a 2026-10-22

- Repositorio público `daovez/daovez-portfolio` existente.
- `README.md` accesible en `main` y en `docs/sprint-0-foundation`.
- La rama `docs/sprint-0-foundation` existe.
- Este documento ha sido preparado para incorporación; **no se declara publicado hasta verificar su commit**.
- La aplicación web todavía no está desarrollada.
