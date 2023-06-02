---
title: "Svg"
description: "Puedes usar archivos SVG como templates en tus aplicaciones de Angular. Cuando utilizas un SVG como template, puedes usar directivas y bindings de la misma manera que con los templates HTML."
src: ""
srcLarge: ""
alt: "svg code snippet"
tweetId: ""
tags: ["Angular"]
date: "Apr 18, 2023"
published: true
---

## Svg

Puedes usar archivos SVG como templates en tus aplicaciones de Angular. Cuando utilizas un SVG como template, puedes usar directivas y bindings de la misma manera que con los templates HTML.

```javascript
import { Component } from "@angular/core";

@Component({
  selector: "app-svg",
  templateUrl: "./svg.component.svg",
  styleUrls: ["./svg.component.css"],
  standalone: true,
})
export class SvgComponent {
  fillColor = "rgb(255, 0, 0)";

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
```

```html
<svg>
  <g>
    <rect x="0" y="0" width="100" height="100" [attr.fill]="fillColor" (click)="changeColor()" />
    <text x="120" y="50">click the rectangle to change the fill color</text>
  </g>
</svg>
```
