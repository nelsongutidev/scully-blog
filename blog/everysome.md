---
title: "The .every() and .some() methods: The Unpopular Pair"
date: "March, 2019"
published: true
description: "Two usually forgotten yet handy methods to keep in your bag of tricks"
tags: ["Javascript", "Array"]
---

# The .every() and .some() Array Methods in JS: The Unpopular Pair

When ES5 came out, many handy methods were introduced such as forEach, map, reduce and filter. The .every() and .some() were also introduced back then but are not as popular. I will share with you what they can do for you with some practical examples.

## The Array.prototype.every() method

This method takes a callback function as a parameter and checks whether every single element in the array passes the test implemented in the provided function. It does it by executing the callback function once for each element in the array until it finds one where a falsy value is returned. If a falsy value is found, the method immediately returns _false_. In the other hand, if the callback function returns only truthy values, the .every() method returns _true_.

### Example:

Lets say we want to know whether every person from the `data` array is older than 18 and if every person has a senior level. We can use the .every() method for this:

```js
const data = [
  {
    name: "John",
    gender: "M",
    age: 25,
    level: "mid",
  },
  {
    name: "Jane",
    gender: "F",
    age: 24,
    level: "senior",
  },
  {
    name: "Grace",
    gender: "F",
    age: 30,
    level: "senior",
  },
  {
    name: "Mike",
    gender: "M",
    age: 19,
    level: "senior",
  },
];

console.log(data.every((i) => i.age > 18)); // true

console.log(data.every((i) => i.level === "senior")); // false
```

### Combining it with other methods

If for example, you want to know if all females have "senior" level, you can combine the .every() method with the .filter() method. You can first filter out the objects that correspond to a female and then use the .every() method:

```js
console.log(
  data.filter((i) => i.gender === "F").every((i) => i.level === "senior")
); // true
```

### Fun fact

If the .every() method is used on an empty array, it will always return true regardless of the condition given.

```js
console.log([].every((i) => i === "hello")); // true

console.log([].every((i) => i)); // true
```

## The Array.prototype.some() method

Similarly to the .every() method, this method executes a call back function for each element in the array. The difference with this one is that whenever it finds a truthy value, it will immediately return _true_ . Consequently, if none of the elements are truthy, it will return _false_.

Using the same `data` as before, lets use the .some() method to determine if there are any "mid" level people and if there are any "juniors" on the `data` array.

```js
console.log(data.some((i) => i.level === "mid")); // true
console.log(data.some((i) => i.level === "junior")); // false
```

Finally we will check if there are any people under 20 years old on the `data` array:

```js
console.log(data.some((i) => i.age < 20)); // true
```

Thanks for reading! Hope you found this one useful.
