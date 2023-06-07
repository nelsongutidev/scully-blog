---
title: "Keyboard Event Binding"
description: "Puedes hacer binding eventos de teclado utilizando la sintaxis de binding de Angular."
src: ""
srcLarge: ""
alt: "keyboard event binding code snippet"
tweetId: "1615427403152560156"
tags: ["Angular"]
date: "Mar 21, 2023"
published: true
---

## Keyboard Event Binding

Puedes hacer binding eventos de teclado utilizando la sintaxis de binding de Angular. Puedes especificar la tecla o código al que te gustaría hacerle binding a los eventos del teclado. A continuación, se muestran algunos ejemplos:

`SHIFT+ESC`

```html
<input (keydown.shift.esc)="onKeydown($event)" />
```

`ARROWUP`

```html
<input (keydown.arrowup)="onKeydown($event)" />
```

`ENTER`

```html
<input (keydown.enter)="onKeydown($event)" />
```
