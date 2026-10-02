---
title: "test"
description: "Use the test/ directory to organize unit, Nuxt, and end-to-end tests for your application."
canonical_url: "https://nuxt.com/docs/4.x/directory-structure/test"
---
# test

> Use the test/ directory to organize unit, Nuxt, and end-to-end tests for your application.

The `test/` directory is the recommended place for your application tests. Nuxt does not scan it the way it does `app/` or `server/`; you choose the runner and layout yourself (typically with [`@nuxt/test-utils`](https://nuxt.com/docs/4.x/getting-started/testing)).

A common layout separates environments:

```bash [Directory structure]
-| test/
---| e2e/
---| nuxt/
---| unit/
```

- `test/unit/` — fast Node tests without the Nuxt runtime
- `test/nuxt/` — tests that need the Nuxt runtime environment
- `test/e2e/` — end-to-end tests against a running app

::read-more{to="https://nuxt.com/docs/4.x/getting-started/testing#organizing-your-tests"}
See **Organizing Your Tests** for setup, Vitest projects, and TypeScript context.
::


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
