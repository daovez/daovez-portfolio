# DAOVEZ Portfolio — Sistema de diseño

> **Versión:** 0.1.0  
> **Estado:** Dirección visual aprobada; implementación pendiente  
> **Fecha:** 2026-10-22  
> **Decisión relacionada:** [ADR-0002](decisions/0002-visual-identity.md)

## 1. Principios de diseño

- **Premium mate:** sin brillos excesivos, neones ni efectos gratuitos.
- **Editorial y técnico:** tipografía clara, aire visual y jerarquía reconocible.
- **Accesible:** navegación por teclado, foco visible y contraste suficiente.
- **Responsive desde móvil:** interfaces legibles en pantallas pequeñas.
- **Contenido primero:** blog, apuntes y glosario deben favorecer la lectura extensa.

## 2. Paleta oficial

| Token | Nombre | Hexadecimal | Uso previsto |
|---|---|---|---|
| `--color-bg` | Abyssal Blue | `#1B2632` | Fondo oscuro principal |
| `--color-surface` | Blue Fantastic | `#2C3B4D` | Tarjetas y superficies oscuras |
| `--color-text` | Palladian | `#EEE9DF` | Texto principal sobre fondo oscuro |
| `--color-muted` | Oatmeal | `#C9C1B1` | Texto secundario, bordes cálidos |
| `--color-accent` | Burning Flame | `#FFB162` | Acciones principales y detalles |
| `--color-accent-dark` | Truffle Trouble | `#A35139` | Detalles cálidos y estados contrastados |

**Regla:** no utilizar el naranja como color de texto pequeño sobre el crema sin validar contraste. Comprobar combinaciones reales de texto e iconografía con WCAG 2.2 AA antes del lanzamiento.

## 3. Tokens CSS iniciales

```css
:root {
  color-scheme: dark;
  --color-bg: #1b2632;
  --color-surface: #2c3b4d;
  --color-text: #eee9df;
  --color-muted: #c9c1b1;
  --color-accent: #ffb162;
  --color-accent-dark: #a35139;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --container-max: 72rem;
}
```

Estos tokens son una **propuesta de implementación**, no una funcionalidad ya construida.

## 4. Tipografía

- Tipografía de lectura propuesta: **Inter**, con reserva del sistema (`system-ui`, `sans-serif`).
- Tipografía técnica propuesta: **JetBrains Mono**, con reserva monoespaciada.
- Usar tamaños fluidos mediante `clamp()` en encabezados.
- Texto de lectura: aproximadamente `1rem`–`1.125rem`, altura de línea `1.6`–`1.8`.
- Mantener una sola jerarquía `h1` principal por página; utilizar encabezados en orden lógico.
- No depender de fuentes externas que bloqueen la lectura.

## 5. Composición y espaciado

- Contenido centrado en un contenedor con anchura máxima de `72rem`.
- Márgenes horizontales fluidos en móvil y escritorio.
- Utilizar la escala de espaciado de los tokens CSS.
- Priorizar cuadrículas sencillas; evitar columnas muy estrechas.
- En pantallas reducidas, las tarjetas pasarán a una columna si es necesario.

## 6. Componentes previstos

### Navegación

- Cabecera con marca, enlaces principales y menú móvil accesible.
- Indicación visible de página actual.
- Accesibilidad por teclado y estados de foco.

### Botones y enlaces

- Botón principal con acento naranja y texto oscuro.
- Botón secundario de contorno o superficie azul.
- Estados `hover`, `focus-visible`, `active` y `disabled` cuando correspondan.
- Los enlaces deben reconocerse también sin depender solo del color.

### Tarjetas de proyecto

- Nombre y resumen comprensible.
- Tecnologías y estado de desarrollo verificables.
- Enlace al caso de estudio; demo y repositorio solo cuando existan.
- No inventar estadísticas o métricas de impacto.

### Lectura del blog

- Fondo crema y texto azul oscuro en vistas de lectura largas, cuando el diseño lo permita.
- Ancho de línea confortable y tabla de contenidos para notas extensas.
- Código con desplazamiento horizontal controlado.
- Estilos coherentes para encabezados, tablas, listas y advertencias.

## 7. Responsive

Diseñar primero para móvil. Validar en diferentes anchuras reales, en lugar de depender exclusivamente de modelos específicos de dispositivos. Los puntos de ruptura se elegirán según el contenido y se documentarán cuando se implementen.

## 8. Movimiento

Animaciones discretas y no esenciales para comprender el contenido. Respetar `prefers-reduced-motion` y evitar movimiento automático excesivo.

## 9. Accesibilidad y calidad

- Objetivo WCAG 2.2 AA.
- Contraste verificado para todas las combinaciones reales de texto/fondo.
- Foco visible y controles con etiquetas.
- Semántica HTML y navegación por teclado.
- Imágenes con texto alternativo apropiado o marcado decorativo.
- Pruebas de diseño claro/oscuro solo si se implementan ambos modos.

## 10. Próximas tareas

1. Crear `src/styles/tokens.css` a partir de los tokens aprobados.
2. Sustituir la interfaz demostrativa de Vite.
3. Implementar cabecera, pie y componentes base reutilizables.
4. Revisar contraste y responsive en navegador.
5. Registrar los resultados y cambios en el diario de desarrollo.
