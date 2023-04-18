---
title: "Svg"
description: "You can use SVG files as templates in your Angular applications. When you use an SVG as the template, you are able to use directives and bindings just like with HTML templates"
src: ""
srcLarge: ""
alt: "svg code snippet"
tweetId: ""
tags: ["Angular"]
date: "Apr 18, 2023"
published: true
---

## Svg

You can use SVG files as templates in your Angular applications. When you use an SVG as the template, you are able to use directives and bindings just like with HTML templates.

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
    <rect
      x="0"
      y="0"
      width="100"
      height="100"
      [attr.fill]="fillColor"
      (click)="changeColor()"
    />
    <text x="120" y="50">click the rectangle to change the fill color</text>
  </g>
</svg>
```
