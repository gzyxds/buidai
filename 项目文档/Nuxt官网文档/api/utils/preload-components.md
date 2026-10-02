---
title: "preloadComponents"
description: "Nuxt provides utilities to give you control over preloading components."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/preload-components"
---
# preloadComponents

> Nuxt provides utilities to give you control over preloading components.

Preloading components loads components that your page will need very soon, which you want to start loading early in rendering lifecycle. This ensures they are available earlier and are less likely to block the page's render, improving performance.

Use `preloadComponents` to manually preload individual components that have been registered globally in your Nuxt app. By default Nuxt registers these as async components. You must use the Pascal-cased version of the component name.

```ts
await preloadComponents('MyGlobalComponent')

await preloadComponents(['MyGlobalComponent1', 'MyGlobalComponent2'])
```

::note
On server, `preloadComponents` will have no effect.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/preload.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
