---
title: "Navigating Angular Router Events: The Sweet Sixteen"
description: "Angular's built-in router provides 16 router events to track its lifecycle"
date: "Tue Aug 23 2022"
tags: ["Angular", "JavaScript"]
published: true
---

# Navigating Angular Router Events: The Sweet Sixteen

![https://miro.medium.com/max/700/1*Yk64-4ui8lmGEn2RFyNErQ.jpeg](https://miro.medium.com/max/700/1*Yk64-4ui8lmGEn2RFyNErQ.jpeg)

<span>Photo by [Alexander Andrews](https://unsplash.com/@alex_andrews) on [Unsplash](https://unsplash.com/)</span>

Angular’s powerful built-in router is one of the best features of the framework. It enables developers to build applications with multiple views and navigate between them with ease. Whether you are debugging an issue around the router or if you want to implement some custom logic between navigations, the router provides a specific property, the <a href="https://angular.io/api/router/Router#events">`Router.events`</a> property, that can be very handy for many given use cases.

## Router Events

The Angular Router provides a series of events (16 in total) that allow you to track the lifecycle of the router. During each navigation, the Router emits navigation events through the <a href="https://angular.io/api/router/Router#events">`Router.events`</a> property as observables. The events occur in the following sequence

- [NavigationStart](https://angular.io/api/router/NavigationStart): Navigation starts.
- [RouteConfigLoadStart](https://angular.io/api/router/RouteConfigLoadStart): Before the router [lazy loads](https://angular.io/guide/router#lazy-loading) a route configuration.
- [RouteConfigLoadEnd](https://angular.io/api/router/RouteConfigLoadEnd): After a route has been lazy loaded.
- [RoutesRecognized](https://angular.io/api/router/RoutesRecognized): When the router parses the URL and the routes are recognized.
- [GuardsCheckStart](https://angular.io/api/router/GuardsCheckStart): When the router begins the *guards* phase of routing.
- [ChildActivationStart](https://angular.io/api/router/ChildActivationStart): When the router begins activating a route’s children.
- [ActivationStart](https://angular.io/api/router/ActivationStart): When the router begins activating a route.
- [GuardsCheckEnd](https://angular.io/api/router/GuardsCheckEnd): When the router finishes the *guards* phase of routing successfully.
- [ResolveStart](https://angular.io/api/router/ResolveStart): When the router begins the *resolve* phase of routing.
- [ResolveEnd](https://angular.io/api/router/ResolveEnd): When the router finishes the *resolve* phase of routing successfully.
- [ChildActivationEnd](https://angular.io/api/router/ChildActivationEnd): When the router finishes activating a route’s children.
- [ActivationEnd](https://angular.io/api/router/ActivationEnd): When the router finishes activating a route.
- [NavigationEnd](https://angular.io/api/router/NavigationEnd): When navigation ends successfully.
- [NavigationCancel](https://angular.io/api/router/NavigationCancel): When navigation is canceled.
- [NavigationError](https://angular.io/api/router/NavigationError): When navigation fails due to an unexpected error.
- [Scroll](https://angular.io/api/router/Scroll): When the user scrolls.

## **How can I access them for debugging?**

If you are debugging an issue around the router and want to see all navigation events printed on the console, Angular provides a way to do so. All we have to do is pass a flag in our app routing module, specifically in the RouterModule’s `forRoot()` method as it is explained as follows.

The RouterModule’s <a href="https://angular.io/api/router/RouterModule#forroot">`forRoot()`</a> method takes an optional second parameter, the <a href="https://angular.io/api/router/ExtraOptions">`ExtraOptions`</a>. The `ExtraOptions` is a set of configuration options for the router module. One of this options is the <a href="https://angular.io/api/router/ExtraOptions#enableTracing">`enableTracing`</a> option, which is a boolean flag that when enabled, logs all navigation events on the console for you, just by adding that simple flag.

```javascript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Router Events as Observables

If we are not debugging, but want to add an animation, small feature or run some logic between events, we need to access the Router’s events. In order to do so all we need to do is inject the router in the constructor of our component. Having done so, we can subscribe to the stream and listen to the events that happen on each navigation.

```typescript
import { Event, Router } from "@angular/router";

export class AppComponent {
  constructor(public router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      console.log(event);
    });
  }
}
```

Most of the time, we would want to listen to a specific event of interest. For example, if we wanted to run some logic when the navigation started, we would want to only listen to the [NavigationStart](https://angular.io/api/router/NavigationStart) event. You can use the `filter()` operator from RxJS to look for that specific event, and subscribe to it in order to run the desired logic. For example we could do so like this:

```javascript
export class AppComponent {
  navigationStart: Observable<NavigationStart>;

  constructor(router: Router) {
    this.navigationStart = router.events.pipe(
      filter((event: Event) => event instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.navigationStart.subscribe((event: NavigationStart) => {
      console.log('Navigation has started', event);
    });
  }
}
```

<span>Example from [Angular Documentation](https://angular.io/guide/observables-in-angular#router)</span>

By filtering the event by the event’s instance, we can set our observables to listen to specific events and run any desired logic with them.

Now you know the Sweet Sixteen Router Events that the Angular Router provides, how to easily set a flag to print them out on the console for debugging purposes and how to access them to run custom logic. I hope they help you get to the bottom of that routing bug you have or better yet, implement great features around user navigation. See you on the next blog post!
