---
tweetId: "1625586017334878238"
title: "TitleCasePipe"
description: "Angular provides the TitleCasePipe, which capitalizes the first letter of each word and also transforms the rest of the word to lowercase"
published: true
tags: ["Angular"]
srcLarge: "https://pbs.twimg.com/media/FqEcqjIaIAE-luf?format=jpg&name=large"
src: "https://pbs.twimg.com/media/FqEcqjIaIAE-luf?format=jpg&name=small"
date: "Feb 14, 2023"
---

## TitleCasePipe

Angular provides the TitleCasePipe, which capitalizes the first letter of each word and also transforms the rest of the word to lowercase.

```javascript
@Component({
  selector: "titlecase-pipe",
  template: `<div>
    <p>{{ "some string" | titlecase }}</p> <!-- output is expected to be "Some String" -->
    <p>{{ "tHIs is mIXeD CaSe" | titlecase }}</p> <!-- output is expected to be "This Is Mixed Case" -->
    <p>{{ "it's non-trivial question" | titlecase }}</p> <!-- output is expected to be "It's Non-trivial Question" -->
    <p>{{ "one,two,three" | titlecase }}</p> <!-- output is expected to be "One,two,three" -->
    <p>{{ "true|false" | titlecase }}</p> <!-- output is expected to be "True|false" -->
    <p>{{ "foo-vs-bar" | titlecase }}</p> <!-- output is expected to be "Foo-vs-bar" -->
  </div>`,
})
export class TitleCasePipeComponent {}
```
