---
title: "How to add Scully to your Angular 15 project"
description: "Boost your application speed without changing its structure or architecture!"
published: true
date: Mar 30, 2023
tags: ["Angular", "Scully"]
---

# How To Add Scully To Your Angular 15 Application

Boost your application speed without changing its structure or architecture!

![https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OjIbg6pSEsIZx3Z7Sx0Wxg.png](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OjIbg6pSEsIZx3Z7Sx0Wxg.png)

## What Is Scully?

[Scully](https://scully.io/docs/learn/overview/#how-does-it-work) brings wicked fast static site generation to Angular. It's best feature is versatility: it uses your current application to create a static HTML file for each one of your routes.

Each HTML file will already have the content rendered, giving faster time-to-interactive times, and improving the whole user experience. It will make your application SEO friendly and with your SPA working as good as always!

## How Does It Work?

In order to be able to create an individual HTML file for each of your app's routes, Scully analyzes the route structure of your Angular application. You can manually add routes in case Scully doesn't detect them, or if you need specific routes. After doing so, an index.html is created for each of the routes with all the needed content there, ready to be served.

## Getting Started

1. Install the following packages by running the following command:

```bash
npm i @scullyio/scully @scullyio/ng-lib @scullyio/scully-plugin-puppeteer
```

2. After that, we need to add ScullyLibModule to our app's root module.

```javascript
import { ScullyLibModule } from "@scullyio/ng-lib";
// ...other imports

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ... other modules imports
    ScullyLibModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

> ⚠️ Note: At the moment of the writing of this post, support for applications that are bootstrapped via a standalone component and using provideRouter standalone API is not available yet.

3. Create a `scully.[PROJECT_NAME].config.ts`, replacing `[PROJECT_NAME]`, with the name of your Angular project. Then add the content of the Scully config file as follows:

```javascript
import { ScullyConfig } from "@scullyio/scully";

import "@scullyio/scully-plugin-puppeteer";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "[PROJECT_NAME]",
  distFolder: "./dist/[PROJECT_NAME]", // output directory of your Angular build artifacts
  outDir: "./dist/static", // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
```

4. As of Angular version 14, the defaultProject property was deprecated from the angular.json. Scully uses that property for its internal setup, so we need to add it back and add the project's name as the value.

```json
{
  "defaultProject": "[PROJECT_NAME]"
}
```

5. Finally, we only need to add the Scully commands to our scripts in our project's package.json file as follows:

```json
"scripts": {
    "scully": "scully",
    "scully:serve": "scully serve"
  }
```

Success! We added Scully to our project!

## Let's Serve Our App!

The first step is to build our project, using the `ng build` command.

In order to make the Scully magic happen, run one of the recently added commands to the package.json file, `npm run scully`.

The last step is to serve the app. for this, run `npm run scully:serve`.

Great! On your terminal, you should see something like this:

```bash
✔ Starting servers for project "[PROJECT_NAME]"

✔ Started Scully static server on "http://localhost:1668/"

✔ Started Angular distribution server on "http://localhost:1864/"
```

Scully has pre-rendered the content for each and every route in your app, and served it on the port it has configured on the /.scully/settings.yml file it created for you. Scully's default port for the static build is `1668`.

> ⚠️ Possible Error: At the moment of creating the files, you might get the following error:

`x Could not find project "[PROJECT_NAME]" in angular.json`

If you see this error, it could possibly be one of two things:

1. You did not add the `defaultProject` property with the correct project's name in the angular.json file.
2. You did not update the `scully.[PROJECT_NAME].config.ts` with the proper values for the `projectName` or `distFolder` properties. Make sure you have the correct values there.

Note: You can open up a terminal and serve the app without Scully as well, using the Angular's CLI command `ng serve`, to compare and contrast how the app behaves with and without Scully's build process.

## What Did Scully Just Do?

In order to get a better understanding of what Scully did, go to your current project's dist folder. Because of the configuration added on the Scully config file ( `scully.[PROJECT_NAME].config.ts` ), the outDir property we configured tells Scully to render all the html files generated under /dist/static/ path. If you open up the content in that folder, you will see a folder per route, each containing at least one index.html that Scully created for you, ready to be rendered.

For example, let's say you have an app with the following routes:

After having Scully run, we would see a dist folder with the following structure:
Folder Structure

```yaml
dist
  /static
    /about
      index.html
    /contact
      index.html
    /events
      index.html
  404.html
  index.html
  ...
```

By adding Scully, your application will become faster, because serving static html files speeds up [First Contentful Paint](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint) by providing a pre-rendered asset and allowing for the static asset to be cached in a CDN. You can even do a fun experiment and run your app with Javascript disabled, and you will notice the app still renders.

## Scully's Benefits

Now that we have our app running with Scully, we can see first hand some of its benefits:

1. Scully's Plugin System. One of the coolest feature from Scully is its plugin system. As stated in the docs , this plugin system "allows you to define your own plugins in order to have a fine-grained control over Scully's pre-render process." For example, with Scully we could create static pages from markdown files, or other type of content, for a blog or portfolio site.
2. Scully allows the user to have super fast experiences by serving static html files, which speed up First Contentful Paint by providing a pre-rendered asset and allowing for the static asset to be cached in a CDN.
3. As a developer, you are not forced to write the app in a certain way. Scully works and gets installed on your existing app, and no changes in its structure or architecture are needed.
4. Your application can work on a wider variety of devices where JavaScript is disabled or even not supported.

## The Future Is Bright

Scully is a great option for static site generation with Angular, allowing you to enhance your apps using pre-rendering. This is great for static content apps, like blogs, content creation websites or portfolios. Nonetheless, web applications with more functionality require code to be downloaded and don't get the all benefits of static site generators (as they still need to download and execute JavaScript to work as expected).
Fortunately, the Angular team is working on [hydration and server-side rendering usability improvements](https://angular.io/guide/roadmap#explore-hydration-and-server-side-rendering-usability-improvements) for the next release. It will be fascinating to see how this will improve Angular apps, and moreover, how it could be used to make Scully even more powerful.
