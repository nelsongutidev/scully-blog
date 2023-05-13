---
title: "enableTracing and withDebugTracing()"
description: "For debugging purposes around router events, Angular provides an easy way to log all internal navigation events to the console"
tweetId: "1622984875358752771"
src: "https://pbs.twimg.com/media/FoX_01haEAUtP9k?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FoX_01haEAUtP9k?format=jpg&name=large"
tags: ["Angular"]
date: "Feb 7, 2023"
published: true
---

## enableTracing and withDebugTracing()

<p class="md:my-8">For debugging purposes around router events, Angular provides an easy way to log all internal navigation events to the console</p>

```javascript
const routes: Routes = [];
@NgModule({
  import: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

If you're not using an ngModule to bootsrtrap your app, Angular also provides a way to enable debug tracing

```javascript
const appRoutes: Routes = [];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes, withDebugTracing())],
});
```
