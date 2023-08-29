---
title: "[value] vs [ngValue] in select option"
description: "Angular provides the NgSelectOption Directive, which contains two inputs: value and NgValue
Use ngValue if you are building a select and you need to bind the entire object to the selects option"
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "August 29, 2023"
published: true
---

## [value] vs [ngValue] in select option

Angular provides the NgSelectOption Directive, which contains two inputs: value and ngValue

Use [ngValue] if you are building a select and you need to bind the entire object to the selects option

```html
<select name="player-select" [(ngModel)]="selectedPlayer">
  <option
    *ngFor="
      let player of [
        { id: 1, name: 'Michael Jordan' },
        { id: 2, name: 'Kobe Bryant' },
        { id: 3, name: 'Lebron James' }
      ]
    "
    [ngValue]="player"
  >
    {{ player.name }}
  </option>
</select>

<pre>
    {{ selectedPlayer | json }} 
    <!-- { id: 1, name: 'Michael Jordan' } -->
</pre>
```

If you only need to bind a string value, you can use [value]:

```html
<select name="player-select" [(ngModel)]="selectedPlayer">
  <option
    *ngFor="
      let player of [
        { id: 1, name: 'Michael Jordan' },
        { id: 2, name: 'Kobe Bryant' },
        { id: 3, name: 'Lebron James' }
      ]
    "
    [value]="player.id"
  >
    {{ player.name }}
  </option>
</select>

<pre>
    {{ selectedPlayer | json }} 
    <!-- "1" -->
</pre>
```
