---
title: "App Config"
description: "Nuxt Kit provides a set of utilities to help you access and modify Nuxt app configuration."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/app-config"
---
# App Config

> Nuxt Kit provides a set of utilities to help you access and modify Nuxt app configuration.

## `updateAppConfig`

Update the app configuration that will be applied to `nuxt.options.appConfig`. This is useful for modules to set default values that can be overridden by user configuration. The update is merged with the existing configuration using [`defu`](https://github.com/unjs/defu).

### Type

```ts
function updateAppConfig (appConfig: Record<string, unknown>): void
```

### Example

```ts
import { defineNuxtModule, updateAppConfig } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    updateAppConfig({
      myModule: {
        option: 'value',
      },
    })
  },
})
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/app-config.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
