---
title: "ngForOf"
description: "The ngForOf directive (*ngFor) not only provides the index exported value, but it also provides other exported values that can be aliased to local variables."
src: "https://pbs.twimg.com/media/FhoKMZ6VsAEZ9KT?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FhoKMZ6VsAEZ9KT?format=jpg&name=large"
alt: "ngForOf code snippet"
tweetId: "1592597209480323072"
tags: ["Angular"]
published: true
date: "Nov 15, 2022"
---

## ngForOf

The ngForOf directive (\*ngFor) not only provides the index exported value, but it also provides other exported values that can be aliased to local variables.

```html
<li *ngFor="let user of users; index as i; first as isFirst">
  {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```

Exported values an be aliased to local variables. The following values are exported:

- index: number: The index of the current item in the iterable.
- count: number: The length of the iterable.
- first: boolean: True when the item is the first item in the iterable.
- last: boolean: True when the item is the last item in the iterable.
- even: boolean: True when the item has an even index in the iterable.
- odd: boolean: True when the item has an odd index in the iterable.
