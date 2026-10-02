---
title: "clearError"
description: "The clearError composable clears all handled errors."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/clear-error"
---
# clearError

> The clearError composable clears all handled errors.

Within your pages, components, and plugins, you can use `clearError` to clear all errors and redirect the user.

**Parameters:**

- `options?: { redirect?: string }`

You can provide an optional path to redirect to (for example, if you want to navigate to a 'safe' page).

```ts
// Without redirect
clearError()

// With redirect
clearError({ redirect: '/homepage' })
```

Errors are set in state using [`useError()`](https://nuxt.com/docs/4.x/api/composables/use-error). The `clearError` composable will reset this state and calls the `app:error:cleared` hook with the provided options.

:read-more{to="https://nuxt.com/docs/4.x/getting-started/error-handling"}---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/error.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
