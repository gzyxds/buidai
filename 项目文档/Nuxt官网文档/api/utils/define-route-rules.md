---
title: "defineRouteRules"
description: "Define route rules for hybrid rendering at the page level."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/define-route-rules"
---
# defineRouteRules

> Define route rules for hybrid rendering at the page level.

::read-more{icon="i-lucide-star" to="https://nuxt.com/docs/4.x/guide/going-further/experimental-features#inlinerouterules"}
This feature is experimental and in order to use it you must enable the `experimental.inlineRouteRules` option in your `nuxt.config`.
::

## Usage

```vue [app/pages/index.vue]
<script setup lang="ts">
defineRouteRules({
  prerender: true,
})
</script>

<template>
  <h1>Hello world!</h1>
</template>
```

Will be translated to:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
  },
})
```

::note
When running [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build), the home page will be pre-rendered in `.output/public/index.html` and statically served.
::

## Notes

- A rule defined in `~/pages/foo/bar.vue` will be applied to `/foo/bar` requests.
- A rule in `~/pages/foo/[id].vue` will be applied to `/foo/*` requests.
- A rule in a page with a finite set of alternatives, such as a custom `path` of `/:locale(en|fr)/about`, will generate one rule per alternative (`/en/about` and `/fr/about`).

If a page path cannot be converted to an equivalent route rule pattern (for example, a param with a regular expression like `/:id(\d+)`, a partial segment like `/prefix-:id`, or a repeatable param like `/:slug+`), the rules for that page are **not** applied and Nuxt warns during build. In that case, define the rules explicitly in `nitro.routeRules` in your `nuxt.config`.

For more control, such as if you are using a custom `path` or `alias` set in the page's [`definePageMeta`](https://nuxt.com/docs/4.x/api/utils/define-page-meta), you should set `routeRules` directly within your `nuxt.config`.

::read-more{icon="i-lucide-medal" to="https://nuxt.com/docs/4.x/guide/concepts/rendering#hybrid-rendering"}
Read more about the `routeRules`.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/pages/runtime/composables.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
