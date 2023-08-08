---
title: "cdkTextareaAutosize"
description: "The cdkTextareaAutosize directive can be applied to any textarea to make it automatically resize to fit its content."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular", "Angular CDK"]
date: "August 8, 2023"
published: true
---

## cdkTextareaAutosize

Angular CDK's TextFieldModule provides useful utilities for working with text input fields such as `input` and `textarea`.

One of them is the cdkTextareaAutosize directive, which can be applied to any `textarea` to make it automatically resize to fit its content. The minimum and maximum number of rows to expand to can be set via the cdkAutosizeMinRows and cdkAutosizeMaxRows properties respectively.

```html
<label for="textAreaId">Text area: </label>

<textarea id="textAreaId" cdkTextareaAutosize cdkAutosizeMinRows="4" cdkAutosizeMaxRows="10">
Long text to be added...
</textarea>
```

Add the TextFieldModule to your component to use the directive.

```js
import { TextFieldModule } from "@angular/cdk/text-field";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, TextFieldModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
```
