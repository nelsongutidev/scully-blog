---
tweetId: ""
title: "SlicePipe"
description: "Angular provides the SlicePipe, which creates a new Array or String containing a subset (slice) of the elements."
published: true
tags: ["Angular"]
srcLarge: "https://pbs.twimg.com/media/FsVY-I4aEAAz4mA?format=jpg&name=large"
src: "https://pbs.twimg.com/media/FsVY-I4aEAAz4mA?format=jpg&name=small"
date: "Mar 28, 2023"
---

## SlicePipe

Angular provides the SlicePipe, which creates a new Array or String containing a subset (slice) of the elements. ( SlicePipe is also exported the CommonModule)

## Arrays

Example on arrays:

```javascript
@Component({
  selector: "slice-list-pipe",
  template: `<ul>
    <li *ngFor="let i of collection | slice : 1 : 3">{{ i }}</li>
  </ul>`,
  imports: [SlicePipe, NgFor],
  standalone: true,
})
export class SlicePipeListComponent {
  collection: string[] = ["a", "b", "c", "d"];
}
```

Produces the following:

```html
<ul>
  <li>b</li>
  <li>c</li>
</ul>
```

## Strings

Example on strings:

```javascript
@Component({
  selector: "slice-string-pipe",
  template: `<div>
    <p>
      {{ str }}[0:4]: '{{ str | slice : 0 : 4 }}' - output is expected to be
      'abcd'
    </p>
    <p>
      {{ str }}[4:0]: '{{ str | slice : 4 : 0 }}' - output is expected to be ''
    </p>
    <p>
      {{ str }}[-4]: '{{ str | slice : -4 }}' - output is expected to be 'ghij'
    </p>
    <p>
      {{ str }}[-4:-2]: '{{ str | slice : -4 : -2 }}' - output is expected to be
      'gh'
    </p>
    <p>
      {{ str }}[-100]: '{{ str | slice : -100 }}' - output is expected to be
      'abcdefghij'
    </p>
    <p>
      {{ str }}[100]: '{{ str | slice : 100 }}' - output is expected to be ''
    </p>
  </div>`,
  imports: [SlicePipe],
  standalone: true,
})
export class SlicePipeStringComponent {
  str: string = "abcdefghij";
}
```
