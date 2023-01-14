---
title: "Closures Explained with a Practical Example"
date: "April 3, 2019"
published: true
tags: ["JavaScript"]
description: "While studying for a Javascript interview, a ran into a challenge that helped me understand closures."
---

# Closures Explained with a Practical Example

While preparing for Javascript interviews a while ago, I came across an interesting challenge:

_Write a function that takes in a string (person's name) and it is able to output one letter at a time using closures._

Even though I knew what closures were, I didn't fully _understand_ them. After working through the challenge and playing with it for a while, I had an _"AHA!"_ moment and finally got them. Let's dive in.

## First of all, what are closures?

The best definition I've encountered comes from Kyle Simpson's book, [You Don't Know JS Book](https://github.com/getify/You-Dont-Know-JS) (which is an amazing resource to learn JS):

> Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

I like this definition because it sums it up perfectly: closures enable us to **remember** and **access** the lexical scope of the parent function.

Lets take a look at the function I wrote to complete the interview prep challenge:

```js
function outer(str) {
  let index = 0;

  return function inner() {
    return str[index++];
  };
}

const nelson = outer("nelson");

console.log(nelson()); // "n"
console.log(nelson()); // "e"
console.log(nelson()); // "l"
console.log(nelson()); // "s"
console.log(nelson()); // "o"
console.log(nelson()); // "n"
```

Lets analyze the code. The _outer_ function contains three things:

1. A variable ( _index_ ) initialized to 0.
2. The parameter being passed: _str_
3. A `return` statement which gives back a new function called _inner_ . This function (when invoked) simply logs the letter from the _str_ variable on position _index_. The ++ after the _index_ variable will add 1 to _index_ 's value every time the function is invoked.

A couple of lines below, outside of the function declaration, the _outer_ function is invoked with the string "Nelson" as a parameter. At this point, since it was invoked, it returns the _inner_ function which is then assigned to a variable _nelson_. When this new function (_nelson()_) is invoked, it remembers the lexical scope it had when it was declared, and hence, it **remembers** and can **access** the value of _index_ and the value of _str_ (which in this case is the name "Nelson") allowing the code to work and logging each letter of the name given.

So on the first invocation of the _nelson_ function, _index_ will be equal to 0 so the letter "n" is logged. On the second invocation, _index_ is equal to 1 and the function is able to log "e" . Thanks to closures, the pattern continues successfully.

Having the closures ready, I added an `if` statement that checks when there are no more letters to display and at that point, display a little message using the variables remembered by the inner function. Also, I added a small timer that displayed one letter per second.

```js
function outer(str) {
  let index = 0;

  return function inner() {
    if (str[index] !== undefined) {
      return str[index++];
    } else {
      return `Done! The name ${str} is ${index} letters long`;
    }
  };
}

const nelson = outer("Nelson");

const timer = setInterval(function () {
  let letter = nelson();
  if (letter.length === 1) {
    console.log(letter);
  } else {
    clearInterval(timer);
    console.log(letter);
  }
}, 1000);
```

Output:

<img src="/assets/images/closures.gif"
     alt="Closures animation example"
     style="width:50% !important" />

Hope you found this one useful.
