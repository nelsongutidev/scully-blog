---
title: "ES10 Object.fromEntries()"
date: "September, 2019"
published: true
category: "Javascript"
tags: ["Javascript", "Objects"]
description: "Object.fromEntries() is here and this is why its awesome"
---

# Object.fromEntries()

ES2019/ES10 brings what I think is one of the most expected built in methods: Object.fromEntries.

This method transforms a list of key value pairs into an object. It takes an iterable (Array or Map) as an argument and returns an object.

```js
const listOfIds = [
  ["id1", "nelson"],
  ["id2", "nadia"],
  ["id3", "paz"],
];
console.log(Object.fromEntries(listOfIds));
// { id1: "nelson", id2: "nadia", id3: "paz" }
```

As you can see, it transformed the array of arrays and returns an object with all the key value pairs.

### Data Structures: Array of Objects vs Object of Objects

Information usually comes in any of these two notations: Array of Objects vs Object of Objects.

When we have an array of objects, we are able to use built in methods (map, filter, reduce) in order to filter data as needed. Consider this example:

```js
const familyMembersArray = [
  {
    name: "nelson",
    age: 31,
    gender: "M",
    role: "father",
  },
  {
    name: "paz",
    age: 5,
    gender: "F",
    role: "daughter",
  },
  {
    name: "vale",
    age: 3,
    gender: "F",
    role: "daughter",
  },
  {
    name: "nadia",
    age: 31,
    gender: "F",
    role: "mother",
  },
];
```

If we had to filter all the female members in the family we would simply do this:

```js
const females = familyMembersArray.filter((i) => i.gender === "F");

console.log(females);

/* females = [
  {
    "name": "paz",
    "age": 5,
    "gender": "F",
    "role": "daughter"
  },
  {
    "name": "vale",
    "age": 3,
    "gender": "F",
    "role": "daughter"
  },
  {
    "name": "nadia",
    "age": 31,
    "gender": "F",
    "role": "mother"
  }
] */
```

This was easy to do because the data was an array of objects, so we could iterate over it with ease with high order functions and maintain the format the data has.

But, what happens when we have an object of objects?

Consider the following example:

```js
const familyMembersObject = {
  nelson: {
    name: "nelson",
    age: 31,
    gender: "M",
    role: "father",
  },
  paz: {
    name: "paz",
    age: 5,
    gender: "F",
    role: "daughter",
  },
  vale: {
    name: "vale",
    age: 3,
    gender: "F",
    role: "daughter",
  },
  nadia: {
    name: "nadia",
    age: 31,
    gender: "F",
    role: "mother",
  },
};
```

If we needed to again return only the objects of the family members that are females how could we do it?

### Object.fromEntries to the rescue

Using Object.entries, which returns an Array of Arrays of the key value pairs in the object provided, we can manipulate the data. Nonetheless, the data now has a different notation or format and it is no longer an Object of Objects but an array of arrays instead.

```js
const females = Object.entries(familyMembersObject).filter(
  ([key, value]) => value.gender === "F"
);

console.log(females);

/* females = [
  [
    "paz",
    {
      "name": "paz",
      "age": 5,
      "gender": "F",
      "role": "daughter"
    }
  ],
  [
    "vale",
    {
      "name": "vale",
      "age": 3,
      "gender": "F",
      "role": "daughter"
    }
  ],
  [
    "nadia",
    {
      "name": "nadia",
      "age": 31,
      "gender": "F",
      "role": "mother"
    }
  ]
] */
```

This is where Object.fromEntries is handy. By simply passing the array to the Object.fromEntries method, we have the information in the format needed.

```js
const females = Object.entries(familyMembersObject).filter(
  ([key, value]) => value.gender === "F"
);
console.log(Object.fromEntries(females));

/* females = {
  "paz": {
    "name": "paz",
    "age": 5,
    "gender": "F",
    "role": "daughter"
  },
  "vale": {
    "name": "vale",
    "age": 3,
    "gender": "F",
    "role": "daughter"
  },
  "nadia": {
    "name": "nadia",
    "age": 31,
    "gender": "F",
    "role": "mother"
  }
} */
```

In other words, Object.fromEntries is the awaited method we needed to convert back our data to the object notation after having transformed an object into an array with Object.Entries.

### Intermediate transformations

We can also modify data to a specific form with Object.fromEntries. Consider this example with the same data:

Lets say we need to now return an object where the keys are the family member´s name and the value is their role in the family. We could do it like this:

```js
const females = Object.entries(familyMembersObject)
  .filter(([key, value]) => value.gender === "F")
  .map(([key, value]) => [key, value.role]);

console.log(Object.fromEntries(females)); // { paz: "daughter", vale: "daughter", nadia: "mother"}
```

Hope you found this one useful!
