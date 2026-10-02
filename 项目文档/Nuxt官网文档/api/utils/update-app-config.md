---
title: "updateAppConfig"
description: "Update the App Config at runtime."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/update-app-config"
---
# updateAppConfig

> Update the App Config at runtime.

::note
Updates the [`app.config`](https://nuxt.com/docs/4.x/directory-structure/app/app-config) using deep assignment. Existing (nested) properties will be preserved.
::

## Usage

```js
import { updateAppConfig, useAppConfig } from '#imports'

const appConfig = useAppConfig() // { foo: 'bar' }

const newAppConfig = { foo: 'baz' }
updateAppConfig(newAppConfig)

console.log(appConfig) // { foo: 'baz' }
```

:read-more{to="https://nuxt.com/docs/4.x/directory-structure/app/app-config"}---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/config.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
