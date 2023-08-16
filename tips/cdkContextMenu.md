---
title: "cdkContextMenuTrigger"
description: "The cdkContextMenuTrigger directive opens a menu when a user right-clicks within its host element."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular", "Angular CDK"]
date: "August 15, 2023"
published: true
---

## CdkContextMenuTrigger

The @angular/cdk/menu module provides directives to help create custom menu interactions based on the WAI ARIA specification.

One of them is the `cdkContextMenuTrigger` directive, which opens a menu when a user right-clicks within its host element. It is aware of nested context menus and will trigger only the lowest level non-disabled context menu.

```html
<div [cdkContextMenuTriggerFor]="context_menu">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
<ng-template #context_menu>
  <div class="example-menu" cdkMenu>
    <button class="example-menu-item" cdkMenuItem>Cut</button>
    <button class="example-menu-item" cdkMenuItem>Copy</button>
    <button class="example-menu-item" cdkMenuItem>Link</button>
  </div>
</ng-template>
```

Add the necessary imports to your component to use the directive.

```js
import { CdkContextMenuTrigger, CdkMenuItem, CdkMenu } from "@angular/cdk/menu";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
```
