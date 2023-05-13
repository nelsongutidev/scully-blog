---
title: "ngNativeValidate"
description: "If you want to explicitly enable native DOM validation UI with Angular forms, you can add the ngNativeValidate attribute to the <form> element"
src: "https://pbs.twimg.com/media/Fj3YreaVUAAhv-f?format=jpg&name=medium"
srcLarge: "https://pbs.twimg.com/media/Fj3YreaVUAAhv-f?format=jpg&name=large"
alt: "ngNativeValidate code snippet"
tweetId: "1602677014137282560"
tags: ["Angular"]
date: "Dec 13, 2022"
published: true
---

## ngNativeValidate

Angular automatically adds the `novalidate` attribute to the `<form>` element whenever FormsModule or ReactiveFormsModule is imported. This prevents the browser from displaying the native DOM validation UI. If you want to explicitly enable native DOM validation UI with Angular forms, you can add the `ngNativeValidate` attribute to the `<form>` element.

```html
<form ngNativeValidate>...</form>
```
