# ADR-0001 — Unificar artículos, apuntes y glosario en el blog

- **Fecha:** 2026-10-22
- **Estado:** Aceptada como decisión de producto; implementación pendiente.
- **Autores:** Propietario del portfolio y asistencia técnica.
- **Contexto:** DAOVEZ Portfolio necesita presentar contenido técnico y, al mismo tiempo, servir como repositorio de notas de estudio.

## Contexto

Se valoró separar una Biblioteca Daovez del blog. Para la primera versión, mantener dos destinos principales crearía navegación y mantenimiento adicionales y dispersaría contenido relacionado.

## Decisión

Unificar la publicación de conocimiento bajo **Blog**, con tres tipos diferenciados:

1. **Artículos:** publicaciones técnicas y análisis.
2. **Apuntes:** contenidos de estudio organizados por materia y tema.
3. **Glosario:** definiciones de programación y tecnologías.

Se propone MDX para contenido enriquecido, sujeto a validación técnica de la solución de renderizado y SEO.

## Consecuencias positivas

- Navegación principal más simple.
- Un punto de entrada único al contenido.
- Reutilización de componentes, metadatos, índices y búsqueda.
- Menor coste de mantenimiento inicial.

## Costes y riesgos

- Es necesario distinguir visualmente artículos y apuntes.
- Los apuntes largos requerirán navegación interna y jerarquía editorial.
- Un volumen grande de contenido podría requerir índices y estrategias de construcción más avanzadas.

## Alternativas consideradas

- Biblioteca separada: descartada para v1.0 por complejidad adicional.
- Solo artículos y enlaces a apuntes externos: descartada porque los apuntes forman parte central del uso del sitio.

## Validación posterior

Comprobar mediante prototipo que un visitante encuentra un artículo, un apunte y un término del glosario sin confusión.
