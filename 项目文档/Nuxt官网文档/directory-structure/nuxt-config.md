---
title: "nuxt.config.ts"
description: "Nuxt can be easily configured with a single nuxt.config file."
canonical_url: "https://nuxt.com/docs/4.x/directory-structure/nuxt-config"
---
# nuxt.config.ts

> Nuxt can be easily configured with a single nuxt.config file.

The `nuxt.config` file extension can either be `.js`, `.ts` or `.mjs`.

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  // My Nuxt config
})
```

::tip
`defineNuxtConfig` helper is globally available without import.
::

You can explicitly import `defineNuxtConfig` from `nuxt/config` if you prefer:

```ts [nuxt.config.ts]twoslash
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // My Nuxt config
})
```

::read-more{to="https://nuxt.com/docs/4.x/api/configuration/nuxt-config"}
Discover all the available options in the **Nuxt configuration** documentation.
::

To ensure your configuration is up to date, Nuxt will make a full restart when detecting changes in the main configuration file, the [`.env`](https://nuxt.com/docs/4.x/directory-structure/env), [`.nuxtignore`](https://nuxt.com/docs/4.x/directory-structure/nuxtignore) and [`.nuxtrc`](https://nuxt.com/docs/4.x/directory-structure/nuxtrc) dotfiles.


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
