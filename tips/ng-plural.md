---
title: "ngPlural"
description: "In order to make pluralization easier, Angular provides the ngPlural Directive which allows to display a particular template on a given value."
src: "https://pbs.twimg.com/media/FhDUPjuVIAAvs63?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FhDUPjuVIAAvs63?format=jpg&name=large"
alt: "ngPlural code snippet"
tweetId: "1590004996858601472"
tags: ["Angular"]
published: true
date: "Nov 8, 2022"
---

## ngPlural

In order to make pluralization easier, Angular provides the ngPlural Directive which allows to display a particular template on a given value.

```html
<p [ngPlural]="items.length">
  <ng-template ngPluralCase="=0">No items on the cart</ng-template>
  <ng-template ngPluralCase="=1">One item added to the cart</ng-template>
  <ng-template ngPluralCase="few">{{items.length}} items added to the cart</ng-template>
</p>
```
