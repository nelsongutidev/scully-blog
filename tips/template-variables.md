---
title: "Template Variables"
description: "Template variables help you use data from one part of a template in another part of the template."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "May 16, 2023"
published: true
---

## Template Variables

Template variables help you use data from one part of a template in another part of the template.

In the template, you use the hash symbol, #, to declare a template variable. The following template variable, #phone, declares a phone variable with the input element as its value.

```html
<input #phone placeholder="phone number" />
```

Refer to a template variable anywhere in the component's template. Here, a button further down the template refers to the phone variable.

```html
<input #phone placeholder="phone number" />

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button type="button" (click)="callPhone(phone.value)">Call</button>
```
