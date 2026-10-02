---
title: "useRequestHeader"
description: "Use useRequestHeader to access a certain incoming request header."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-request-header"
---
# useRequestHeader

> Use useRequestHeader to access a certain incoming request header.

You can use the built-in [`useRequestHeader`](https://nuxt.com/docs/4.x/api/composables/use-request-header) composable to access any incoming request header within your pages, components, and plugins.

```ts
// Get the authorization request header
const authorization = useRequestHeader('authorization')
```

::tip
In the browser, `useRequestHeader` will return `undefined`.
::

## Example

We can use `useRequestHeader` to easily figure out if a user is authorized or not.

The example below reads the `authorization` request header to find out if a person can access a restricted resource.

```ts [app/middleware/authorized-only.ts]
export default defineNuxtRouteMiddleware((to, from) => {
  if (!useRequestHeader('authorization')) {
    return navigateTo('/not-authorized')
  }
})
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
