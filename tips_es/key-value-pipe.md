---
title: "KeyValuePipe"
description: "Angular proporciona el keyvalue pipe, que transforma un objeto o map en un array de llave-valor. Con él, se puede iterar un objeto o un map usando *ngFor."
src: "https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=small"
srcLarge: "https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=large"
alt: "keyvalue pipe code snippet"
tweetId: "1615427403152560156"
tags: ["Angular"]
date: "Jan 17, 2023"
published: true
---

## KeyValuePipe

Angular proporciona el keyvalue pipe, que transforma un objeto o map en un array de llave-valor. Con él, se puede iterar un objeto o un map usando \*ngFor.

```javascript
@Component({
  selector: "keyvalue-pipe",
  template: `<span>
    <p>Object</p>
    <div *ngFor="let item of object | keyvalue">{{ item.key }}:{{ item.value }}</div>
    <p>Map</p>
    <div *ngFor="let item of map | keyvalue">{{ item.key }}:{{ item.value }}</div>
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
