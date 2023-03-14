---
title: "Wildcard Routes"
description: "To display a 404 page, Angular provides the possibility of adding a wildcard route"
src: "https://pbs.twimg.com/media/FnQ5z_eaMAAD-kj?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FnQ5z_eaMAAD-kj?format=jpg&name=large"
alt: "Wildcard Routes code snippet"
tweetId: "1617982361727283201"
tags: ["Angular"]
date: "Jan 24, 2023"
published: true
---

## Wildcard Routes

To display a 404 page, Angular provides the possibility of adding a wildcard route. The Angular Router selects the wildcard route anytime the requested URL doesn't match any paths for routes defined in the configuration.

Set up a wild card route with the component set to the component you would like to use on your 404 page as follows:

```javascript
const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  { path: "second-component", component: SecondComponent },
  { path: "**", component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
```
