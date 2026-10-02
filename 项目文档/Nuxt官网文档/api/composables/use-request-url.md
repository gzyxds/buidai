---
title: "useRequestURL"
description: "Access the incoming request URL with the useRequestURL composable."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-request-url"
---
# useRequestURL

> Access the incoming request URL with the useRequestURL composable.

`useRequestURL` is a helper function that returns an [URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) working on both server-side and client-side.

::important
When utilizing [Hybrid Rendering](https://nuxt.com/docs/4.x/guide/concepts/rendering#hybrid-rendering) with cache strategies, all incoming request headers are dropped when handling the cached responses via the [Nitro caching layer](https://nitro.build/guide/cache) (meaning `useRequestURL` will return `localhost` for the `host`).

You can define the [`cache.varies` option](https://nitro.build/guide/cache#options) to specify headers that will be considered when caching and serving the responses, such as `host` and `x-forwarded-host` for multi-tenant environments.
::

::code-group
```vue [app/pages/about.vue]
<script setup lang="ts">
const url = useRequestURL()
</script>

<template>
  <p>URL is: {{ url }}</p>
  <p>Path is: {{ url.pathname }}</p>
</template>
```

```html [Result in development]
<p>URL is: http://localhost:3000/about</p>
<p>Path is: /about</p>
```
::

::tip{icon="i-simple-icons-mdnwebdocs" target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/API/URL#instance_properties"}
Read about the URL instance properties on the MDN documentation.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/url.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
