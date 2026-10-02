---
title: "package.json"
description: "The package.json file contains all the dependencies and scripts for your application."
canonical_url: "https://nuxt.com/docs/4.x/directory-structure/package"
---
# package.json

> The package.json file contains all the dependencies and scripts for your application.

The minimal `package.json` of your Nuxt application should looks like:

```json [package.json]
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "nuxt": "latest",
    "vue": "latest",
    "vue-router": "latest"
  }
}
```

::read-more{icon="i-simple-icons-npm" target="_blank" to="https://docs.npmjs.com/cli/configuring-npm/package-json/"}
Read more about the `package.json` file.
::


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
