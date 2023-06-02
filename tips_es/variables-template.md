---
title: "Variables del template"
description: "Las variables en el template te ayudan a utilizar datos de una parte de un template en otra parte del template."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "May 16, 2023"
published: true
---

## Template Variables

"Las variables en el template te ayudan a utilizar datos de una parte de un template en otra parte del template."

En el template, utilizas el símbolo de numeral, #, para declarar una variable en el template. La siguiente variable de template, #phone, declara una variable phone con el elemento input como su valor.

```html
<input #phone placeholder="phone number" />
```

Haz referencia a una variable en el template en cualquier lugar del template del componente. Aquí, un botón más abajo en el template hace referencia a la variable de phone.

```html
<input #phone placeholder="phone number" />

<!-- otros elementos-->

<!-- phone se refiere al elemento input; puedes pasar el `value` a un event handler -->
<button type="button" (click)="callPhone(phone.value)">Call</button>
```
