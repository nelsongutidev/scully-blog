---
title: "ariaCurrentWhenActive"
description: "The RouterLinkActive directive provides the ariaCurrentWhenActive input which sets the aria-current to a specified value when the link becomes active"
src: "https://pbs.twimg.com/media/FgfS-I6VIAA-YzC?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FgfS-I6VIAA-YzC?format=jpg&name=large"
alt: "ariaCurrentWhenActive code snippet"
tweetId: "1587470353831542784"
tags: ["Angular"]
published: true
date: "Nov 1, 2022"
---

## ariaCurrentWhenActive

The RouterLinkActive directive provides the ariaCurrentWhenActive input which sets the aria-current to a specified value when the link becomes active

```html
<nav>
  <a
    routerLink="home"
    routerLinkActive="active-page"
    ariaCurrentWhenActive="page"
  >
    Home
  </a>
  <a
    routerLink="about"
    routerLinkActive="active-page"
    ariaCurrentWhenActive="page"
  >
    About
  </a>
  <a
    routerLink="shop"
    routerLinkActive="active-page"
    ariaCurrentWhenActive="page"
  >
    Shop
  </a>
</nav>
```
