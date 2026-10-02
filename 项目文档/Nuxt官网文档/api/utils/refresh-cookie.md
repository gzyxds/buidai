---
title: "refreshCookie"
description: "Refresh useCookie values manually when a cookie has changed"
canonical_url: "https://nuxt.com/docs/4.x/api/utils/refresh-cookie"
---
# refreshCookie

> Refresh useCookie values manually when a cookie has changed

::important
This utility is available since [Nuxt v3.10](https://nuxt.com/blog/v3-10).
::

## Purpose

The `refreshCookie` function is designed to refresh cookie value returned by `useCookie`.

This is useful for updating the `useCookie` ref when we know the new cookie value has been set in the browser.

## Usage

```vue [app/app.vue]
<script setup lang="ts">
const tokenCookie = useCookie('token')

const login = async (username, password) => {
  const token = await $fetch('/api/token', { /** ... */ }) // Sets `token` cookie on response
  refreshCookie('token')
}

const loggedIn = computed(() => !!tokenCookie.value)
</script>
```

::note{to="https://nuxt.com/docs/4.x/guide/going-further/experimental-features#cookiestore"}
Since [Nuxt v3.12.0](https://github.com/nuxt/nuxt/releases/tag/v3.12.0), the experimental `cookieStore` option is enabled by default. It automatically refreshes the `useCookie` value when cookies change in the browser.
::

## Type

```ts [Signature]
export function refreshCookie (name: string): void
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/cookie.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
