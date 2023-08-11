# Personal site made with Scully, Tailwind and ng16

This project is my personal site, which contains the code tips I create and my blog. It was made with [Scully](https://scully.io/), [Tailwind](https://tailwindcss.com/docs/installation) and Angular v15.

## Development server

To run the angular app, run `ng serve`. App will be served on port:4200.

## Scully server

To run the scully server locally, do the following:

1. `ng build`
2. `npm run scully`
3. `npm run scully:serve` 

Visit port 1668

Any change on the angular app needs a new ng build for the scully server to pick up.

## Changes to Blog page

If you create a new .md file or updated it, make sure you run `npm run scully -- --scanRoutes` so that scully can find the new routes and add them.

## Can I use this project

Feel free to use this code. Create your own blog, or your own site and style it however you like and ship it 🚀. Just try to make it your own 😉.

## Angular CLI Explorer

This project contains an Angular CLI Explorer, which constructs the desired CLI command after selecting from the available options

## MIT License

Copyright (c) 20123 Nelson Gutierrez and others

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
