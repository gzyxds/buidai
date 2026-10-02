---
title: "clearNuxtData"
description: "Delete cached data, error status and pending promises of useAsyncData and useFetch."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/clear-nuxt-data"
---
# clearNuxtData

> Delete cached data, error status and pending promises of useAsyncData and useFetch.

::note
This method is useful if you want to invalidate the data fetching for another page.
::

## Type

```ts [Signature]
export function clearNuxtData (keys?: string | string[] | ((key: string) => boolean)): void
```

## Parameters

- `keys`: One or an array of keys that are used in [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) to delete their cached data. If no keys are provided, **all data** will be invalidated.

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
