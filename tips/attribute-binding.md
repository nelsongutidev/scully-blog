---
title: "Attribute Binding"
description: "Attribute binding in Angular helps you set values for attributes directly. With attribute binding, you can improve accessibility, style your application dynamically, and manage multiple CSS classes or styles simultaneously."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "July 3, 2023"
published: true
---

## Attribute Binding

Attribute binding in Angular helps you set values for attributes directly. With attribute binding, you can improve accessibility, style your application dynamically, and manage multiple CSS classes or styles simultaneously.

```html
<p [attr.attribute-you-are-targeting]="expression"></p>
```

One of the primary use cases for attribute binding is to set ARIA attributes.

To bind to an ARIA attribute, type the following:

```html
<!-- create and set an aria attribute for assistive technology -->
<button type="button" [attr.aria-label]="actionName">{{actionName}} with Aria</button>
```
