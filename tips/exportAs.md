---
title: "exportAs"
description: "Defines the name that can be used in the template to assign this directive to a variable."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "May 2, 2023"
published: true
---

## exportAs

The exportAs property defines the name that can be used in the template to assign this directive/component to a variable.

```javascript
@Component({
  selector: "child-component",
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ description }}</h1>`,
  exportAs: "child",
})
export class Child {
  description = "This is a description";
}

@Component({
  selector: "my-app",
  standalone: true,
  imports: [CommonModule, Child],
  template: `
    <h1>Example</h1>
    <child-component #c="child"></child-component>
    <p>Child Component description prop's length: {{ c.description.length }}</p>
  `,
})
export class App {
  name = "Angular";
}

bootstrapApplication(App);
```
