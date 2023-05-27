---
title: "Variables de Plantilla"
description: "Las variables de plantilla te ayudan a utilizar datos de una parte de una plantilla en otra parte de la plantilla."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "May 16, 2023"
published: true
---

## Template Variables

Las variables de plantilla te ayudan a utilizar datos de una parte de una plantilla en otra parte de la plantilla.

En la plantilla, utilizas el símbolo de almohadilla, #, para declarar una variable de plantilla. La siguiente variable de plantilla, #phone, declara una variable de teléfono con el elemento de entrada como su valor.

```html
<input #phone placeholder="phone number" />
```

Haz referencia a una variable de plantilla en cualquier lugar de la plantilla del componente. Aquí, un botón más abajo en la plantilla hace referencia a la variable de teléfono.

```html
<input #phone placeholder="phone number" />

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button type="button" (click)="callPhone(phone.value)">Call</button>
```
