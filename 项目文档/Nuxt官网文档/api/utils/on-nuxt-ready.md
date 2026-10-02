---
title: "onNuxtReady"
description: "The onNuxtReady composable allows running a callback after your app has finished initializing."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/on-nuxt-ready"
---
# onNuxtReady

> The onNuxtReady composable allows running a callback after your app has finished initializing.

::important
`onNuxtReady` only runs on the client-side. :br
It is ideal for running code that should not block the initial rendering of your app.
::

```ts [app/plugins/ready.client.ts]
export default defineNuxtPlugin(() => {
  onNuxtReady(async () => {
    const myAnalyticsLibrary = await import('my-big-analytics-library')
    // do something with myAnalyticsLibrary
  })
})
```

It is 'safe' to run even after your app has initialized. In this case, then the code will be registered to run in the next idle callback.

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ready.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
