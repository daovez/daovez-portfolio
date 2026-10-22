# ADR-0002 — Identidad visual editorial oscura con contraste cálido

- **Fecha:** 2026-10-22
- **Estado:** Aceptada como dirección visual inicial; implementación pendiente
- **Ámbito:** DAOVEZ Portfolio

## Contexto

El portfolio debe comunicar profesionalidad técnica sin reproducir las convenciones de fondos negros con neón. También debe alojar apuntes y artículos extensos que requieran una experiencia de lectura cómoda.

## Decisión

Adoptar la paleta proporcionada como referencia: Abyssal Blue (`#1B2632`) para fondos oscuros, Blue Fantastic (`#2C3B4D`) para superficies, Palladian (`#EEE9DF`) para texto principal y superficies de lectura, Oatmeal (`#C9C1B1`) para apoyo, Burning Flame (`#FFB162`) como acento y Truffle Trouble (`#A35139`) como tono complementario.

La web será predominantemente oscura y los contenidos extensos usarán superficies crema. Se evitarán brillos, efectos neón y animaciones invasivas.

## Justificación

- Una identidad distintiva respecto a plantillas tecnológicas habituales.
- Mayor comodidad de lectura en el blog y en apuntes.
- Sistema pequeño y coherente de colores reutilizables.
- Separación visual de contenido editorial e interfaces de proyectos.

## Consecuencias

- Es necesario comprobar contrastes en cada combinación real.
- Algunos tonos secundarios pueden no ser adecuados para texto pequeño.
- Los componentes requerirán variantes para superficie clara y oscura.
- Se deberán probar estados de foco, enlaces y efectos con movimiento reducido.

## Alternativas consideradas

- Negro y azul eléctrico: descartados como dirección principal por ser menos distintivos respecto al objetivo editorial.
- Sitio completamente claro: descartado; se prefiere portada y navegación oscuras.
- Sitio completamente oscuro: descartado para lectura larga.

## Validación futura

Revisión de prototipos de Inicio, Proyectos y una página de Apuntes; auditoría de contraste y responsive antes de la implementación definitiva.
