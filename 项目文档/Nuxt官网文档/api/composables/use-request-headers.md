---
title: "useRequestHeaders"
description: "Use useRequestHeaders to access the incoming request headers."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-request-headers"
---
# useRequestHeaders

> Use useRequestHeaders to access the incoming request headers.

You can use built-in [`useRequestHeaders`](https://nuxt.com/docs/4.x/api/composables/use-request-headers) composable to access the incoming request headers within your pages, components, and plugins.

```ts
// Get all request headers
const headers = useRequestHeaders()

// Get only cookie request header
const { cookie } = useRequestHeaders(['cookie'])
```

::tip
In the browser, `useRequestHeaders` will return an empty object.
::

## Example

We can use `useRequestHeaders` to access and proxy the initial request's `authorization` header to any future internal requests during SSR.

The example below adds the `authorization` request header to an isomorphic `$fetch` call.

```vue [app/pages/some-page.vue]
<script setup lang="ts">
const { data } = await useFetch('/api/confidential', {
  headers: useRequestHeaders(['authorization']),
})
</script>
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
