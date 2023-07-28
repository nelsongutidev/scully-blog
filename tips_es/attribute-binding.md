---
title: "Attribute Binding"
description: "El attribute binding en Angular te ayuda a establecer valores para atributos directamente. Con attribute binding, puedes mejorar la accesibilidad, dar estilo a tu aplicación dinámicamente y gestionar múltiples clases o estilos CSS simultáneamente."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "July 3, 2023"
published: true
---

## Attribute Binding

El `attribute binding` en Angular te ayuda a establecer valores para atributos directamente. Con `attribute binding`, puedes mejorar la accesibilidad, dar estilo a tu aplicación dinámicamente y gestionar múltiples clases o estilos CSS simultáneamente.

```html
<p [attr.attribute-you-are-targeting]="expression"></p>
```

Uno de los casos de uso principales para el `attribute binding` es establecer atributos ARIA.

Para enlazar a un atributo ARIA, escribe lo siguiente:

```html
<!-- Crear y establecer un atributo ARIA para la tecnología de asistencia. -->
<button type="button" [attr.aria-label]="actionName">{{actionName}} with Aria</button>
```
