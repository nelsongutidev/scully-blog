---
title: "KeyValuePipe"
description: "Angular provides the keyvalue pipe, which transforms an Object or Map into an array of key value pairs. With it, an Object or a Map can be iterated by *ngFor"
src: "https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=large"
alt: "keyvalue pipe code snippet"
tweetId: "1615427403152560156"
tags: ["Angular"]
date: "Jan 17, 2023"
published: true
---

## KeyValuePipe

Angular provides the keyvalue pipe, which transforms an Object or Map into an array of key value pairs. With it, an Object or a Map can be iterated by \*ngFor.

```javascript
@Component({
  selector: "keyvalue-pipe",
  template: `<span>
    <p>Object</p>
    <div *ngFor="let item of object | keyvalue">
      {{ item.key }}:{{ item.value }}
    </div>
    <p>Map</p>
    <div *ngFor="let item of map | keyvalue">
      {{ item.key }}:{{ item.value }}
    </div>
  </span>`,
})
export class KeyValuePipeComponent {
  object: { [key: number]: string } = { 2: "foo", 1: "bar" };
  map = new Map([
    [2, "foo"],
    [1, "bar"],
  ]);
}
```
