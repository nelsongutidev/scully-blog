---
title: "Standalone Migration"
description: "As of version 15.2.0, Angular offers a schematic to help project authors convert existing projects to the new standalone APIs."
src: ""
srcLarge: ""
tweetId: ""
tags: ["Angular"]
date: "September 19, 2023"
published: true
---

## Standalone Migration

As of version 15.2.0, Angular offers a schematic to help project authors convert existing projects to the new standalone APIs. The schematics will convert your code, remove unnecessary NgModules classes, and finally change the bootstrap of the project to use standalone APIs. The schematic aims to transform as much code as possible automatically, but it may require some manual fixes by the project author. 

Run the schematic with the following command:

```bash
ng generate @angular/core:standalone
```


