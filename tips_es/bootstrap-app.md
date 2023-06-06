---
title: "bootstrapApplication API"
description: "A partir de Angular v 15 se puede bootstrap una aplicación Angular usando un componente standalone"
src: "https://pbs.twimg.com/media/FnxUYEVaYAA6QwL?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FnxUYEVaYAA6QwL?format=jpg&name=large"
tweetId: "1620451972808687616"
tags: ["Angular"]
path: "assets/tips/bootstrap-application.md"
date: "Jan 31, 2023"
published: true
---

## bootstrapApplication API

A partir de Angular v 15 se puede bootstrap una aplicación Angular usando un componente standalone

```javascript
// ./main.ts
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((e) => console.error(e));
```
