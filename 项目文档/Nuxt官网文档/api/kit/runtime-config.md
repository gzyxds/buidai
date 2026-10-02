---
title: "Runtime Config"
description: "Nuxt Kit provides a set of utilities to help you access and modify Nuxt runtime configuration."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/runtime-config"
---
# Runtime Config

> Nuxt Kit provides a set of utilities to help you access and modify Nuxt runtime configuration.

## `useRuntimeConfig`

At build-time, it is possible to access the resolved Nuxt [runtime config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config).

### Type

```ts
function useRuntimeConfig (): Record<string, unknown>
```

## `updateRuntimeConfig`

It is also possible to update runtime configuration. This will be merged with the existing runtime configuration, and if Nitro has already been initialized it will trigger an HMR event to reload the Nitro runtime config.

### Type

```ts
function updateRuntimeConfig (config: Record<string, unknown>): void | Promise<void>
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/runtime-config.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
