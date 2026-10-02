---
title: "clearNuxtState"
description: "Delete the cached state of useState."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/clear-nuxt-state"
---
# clearNuxtState

> Delete the cached state of useState.

::note
This method is useful if you want to invalidate the state of `useState`. You can also reset the state to its initial value by passing `{ reset: true }` as the second parameter.
::

## Type

```ts [Signature]
export function clearNuxtState (keys?: string | string[] | ((key: string) => boolean), opts?: ClearNuxtStateOptions): void
```

## Parameters

- `keys`: One or an array of keys that are used in [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) to delete their cached state. If no keys are provided, **all state** will be invalidated.
- `opts`: An options object to configure the clear behavior.

  - `reset` :badge[v4.4]{className="align-middle" color="info" size="xs"}: When set to `true`, resets the state to the initial value provided by the `init` function of [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) instead of setting it to `undefined`. When not specified, defaults to the value of `experimental.defaults.useState.resetOnClear` in your Nuxt config (which is `true` with `compatibilityVersion: 5`).

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/state.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
