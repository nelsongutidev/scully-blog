---
title: "Angular CDK Clipboard"
description: "The cdkCopyToClipboard directive can be used to easily add copy-on-click functionality to an existing element."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular", "Angular CDK"]
date: "August 1, 2023"
published: true
---

## Angular CDK Clipboard

Angular CDK's clipboard package provides helpers for working with the system clipboard.

One of them is the cdkCopyToClipboard directive that can be used to easily add copy-on-click functionality to an existing element. The directive selector doubles as an @Input() for the text to be copied.

```html
<label for="clipboard-input-example">Text to be copied: </label>
<input id="clipboard-input-example" type="text" [(ngModel)]="value" />
<button [cdkCopyToClipboard]="value">Copy to clipboard</button>
```

Add the ClipboardModule to your component to use the directive.

```js
import { ClipboardModule } from "@angular/cdk/clipboard";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ClipboardModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  value = "text to be copied";
}
```
