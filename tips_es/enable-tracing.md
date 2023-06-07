---
title: "enableTracing and withDebugTracing()"
description: "A la hora de debugguear en torno a los eventos del router, Angular proporciona una forma sencilla de registrar todos los eventos internos de navegación en la consola."
tweetId: "1622984875358752771"
src: "https://pbs.twimg.com/media/FoX_01haEAUtP9k?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FoX_01haEAUtP9k?format=jpg&name=large"
tags: ["Angular"]
date: "Feb 7, 2023"
published: true
---

## enableTracing and withDebugTracing()

A la hora de debugguear en torno a los eventos del router, Angular proporciona una forma sencilla de registrar todos los eventos internos de navegación en la consola.

```javascript
const routes: Routes = [];
@NgModule({
  import: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Si no estás utilizando un ngModule para iniciar tu aplicación, Angular también proporciona una forma de habilitar el debug tracing

```javascript
const appRoutes: Routes = [];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes, withDebugTracing())],
});
```
