---
title: "Keyboard Event Binding"
description: "You can bind to keyboard events using Angular's binding syntax."
src: ""
srcLarge: ""
alt: "keyboard event binding code snippet"
tweetId: "1615427403152560156"
tags: ["Angular"]
date: "Mar 21, 2023"
published: true
---

## Keyboard Event Binding

You can bind to keyboard events using Angular's binding syntax. You can specify the key or code that you would like to bind to keyboard events. The following are a few exmaples:

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
