---
title: "bootstrapApplication API"
description: "As of Angular v15, you can Bootstrap an Angular application using a standalone component"
src: "https://pbs.twimg.com/media/FnxUYEVaYAA6QwL?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FnxUYEVaYAA6QwL?format=jpg&name=large"
tweetId: "1620451972808687616"
tags: ["Angular"]
path: "assets/tips/bootstrap-application.md"
date: "Jan 31, 2023"
published: true
---

## bootstrapApplication API

As of Angular v15, you can Bootstrap an Angular application using a standalone component

```javascript
// ./main.ts
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((e) => console.error(e));
```
