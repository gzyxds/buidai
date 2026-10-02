---
title: "setResponseStatus"
description: "setResponseStatus sets the status (and optionally the statusText) of the response."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/set-response-status"
---
# setResponseStatus

> setResponseStatus sets the status (and optionally the statusText) of the response.

Nuxt provides composables and utilities for first-class server-side-rendering support.

`setResponseStatus` sets the status (and optionally the statusText) of the response.

::important
`setResponseStatus` can only be called in the [Nuxt context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#the-nuxt-context).
::

```ts
const event = useRequestEvent()

// event will be undefined in the browser
if (event) {
  // Set the status code to 404 for a custom 404 page
  setResponseStatus(event, 404)

  // Set the status message as well
  setResponseStatus(event, 404, 'Page Not Found')
}
```

::note
In the browser, `setResponseStatus` will have no effect.
::

:read-more{to="https://nuxt.com/docs/4.x/getting-started/error-handling"}---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
