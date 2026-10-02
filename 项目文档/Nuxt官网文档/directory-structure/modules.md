---
title: "modules"
description: "Use the modules/ directory to automatically register local modules within your application."
canonical_url: "https://nuxt.com/docs/4.x/directory-structure/modules"
---
# modules

> Use the modules/ directory to automatically register local modules within your application.

It is a good place to place any local modules you develop while building your application.

The auto-registered files patterns are:

- `modules/*/index.ts`
- `modules/*.ts`

You don't need to add those local modules to your [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) separately.

::code-group
```ts [modules/hello/index.ts]twoslash
// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { addComponentsDir, addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'hello',
  },
  setup () {
    const resolver = createResolver(import.meta.url)

    // Add an API route
    addServerHandler({
      route: '/api/hello',
      handler: resolver.resolve('./runtime/api-route'),
    })

    // Add components
    addComponentsDir({
      path: resolver.resolve('./runtime/app/components'),
      pathPrefix: true, // Prefix your exports to avoid conflicts with user code or other modules
    })
  },
})
```

```ts [modules/hello/runtime/api-route.ts]twoslash
export default defineEventHandler(() => {
  return { hello: 'world' }
})
```
::

When starting Nuxt, the `hello` module will be registered and the `/api/hello` route will be available.

::note
Note that all components, pages, composables and other files that would be normally placed in your `app/` directory need to be in `modules/your-module/runtime/app/`. This ensures they can be type-checked properly.
::

Modules are executed in the following sequence:

- First, the modules defined in [`nuxt.config.ts`](https://nuxt.com/docs/4.x/api/nuxt-config#modules-1) are loaded.
- Then, modules found in the `modules/` directory are executed, and they load in alphabetical order.

You can change the order of local module by adding a number to the front of each directory name:

```bash [Directory structure]
modules/
  1.first-module/
    index.ts
  2.second-module.ts
```

:read-more{to="https://nuxt.com/docs/4.x/guide/modules"}::tip{icon="i-lucide-video" target="_blank" to="https://vueschool.io/lessons/creating-your-first-module-from-scratch?friend=nuxt"}
Watch Vue School video about Nuxt private modules.
::


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
