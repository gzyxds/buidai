---
title: "Nitro"
description: "Nuxt Kit provides a set of utilities to help you work with Nitro. These functions allow you to add server handlers, plugins, and prerender routes."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/nitro"
---
# Nitro

> Nuxt Kit provides a set of utilities to help you work with Nitro. These functions allow you to add server handlers, plugins, and prerender routes.

Nitro is an open source TypeScript framework to build ultra-fast web servers. Nuxt uses Nitro as its server engine. You can use `useNitro` to access the Nitro instance (or `tryUseNitro` if your module should also work without Nitro), `addServerHandler` to add a server handler, `addDevServerHandler` to add a server handler to be used only in development mode, `addNitroPlugin` to add a plugin to extend Nitro's runtime behavior, and `addPrerenderRoutes` to add routes to be prerendered by Nitro.

## `addServerHandler`

Adds a Nitro server handler. Use this if you want to create server middleware or a custom route.

### Usage

```tstwoslash
import { addServerHandler, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options) {
    const { resolve } = createResolver(import.meta.url)

    addServerHandler({
      route: '/robots.txt',
      handler: resolve('./runtime/robots.get'),
    })
  },
})
```

### Type

```ts
function addServerHandler (handler: ServerHandlerInput): void
```

### Parameters

**handler**: A handler object with the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        handler
      </code>
    </td>
    
    <td>
      <code>
        string | { nuxt?: string, nitro2?: string, nitro3?: string }
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Path to the event handler, or one path per server API. Nuxt registers the implementation the application's server can run.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        route
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      The route to match, exactly. End it in <code>
        /**
      </code>
      
       to match the paths below it as well. If an empty string is used, the handler is registered as middleware.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        middleware
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Specifies this is a middleware handler. Middleware are called on every route and should normally return nothing to pass to the next handlers.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        lazy
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Use lazy loading to import the handler. This is useful when you only want to load the handler on demand.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        method
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Router method matcher. If handler name contains method name, it will be used as a default value.
    </td>
  </tr>
</tbody>
</table>

A route ending in `/**` matches its base path too, so `route: '/_fonts/**'` serves `/_fonts` and everything below it. On a Nitro 2 host, whose router matches only the paths below the base, Nuxt registers the base path as a second route so that one registration behaves the same on both.

::read-more{to="https://nuxt.com/docs/4.x/guide/modules/server-compatibility"}
Learn when to register one path per server API, and which key to write your handler against.
::

### Example

#### Basic Usage

You can use `addServerHandler` to add a server handler from your module.

::code-group
```ts [module.ts]twoslash
import { addServerHandler, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options) {
    const { resolve } = createResolver(import.meta.url)

    addServerHandler({
      route: '/robots.txt',
      handler: resolve('./runtime/robots.get'),
    })
  },
})
```

```ts [runtime/robots.get.ts]twoslash
export default defineEventHandler(() => {
  return {
    body: `User-agent: *\nDisallow: /`,
  }
})
```
::

When you access `/robots.txt`, it will return the following response:

```txt
User-agent: *
Disallow: /
```

## `addDevServerHandler`

Adds a Nitro server handler to be used only in development mode. This handler will be excluded from production build.

### Usage

```tstwoslash
import { defineEventHandler } from 'h3'
import { addDevServerHandler, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addDevServerHandler({
      handler: defineEventHandler(() => {
        return {
          body: `Response generated at ${new Date().toISOString()}`,
        }
      }),
      route: '/_handler',
    })
  },
})
```

### Type

```ts
function addDevServerHandler (handler: DevServerHandlerInput): void
```

### Parameters

**handler**: A handler object with the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        handler
      </code>
    </td>
    
    <td>
      <code>
        EventHandler
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Event handler.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        route
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Path prefix or route. If an empty string used, will be used as a middleware.
    </td>
  </tr>
</tbody>
</table>

### Example

#### Basic Usage

In some cases, you may want to create a server handler specifically for development purposes, such as a Tailwind config viewer.

```ts
import { joinURL } from 'ufo'
import { addDevServerHandler, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup (options, nuxt) {
    const route = joinURL(nuxt.options.app?.baseURL, '/_tailwind')

    // @ts-expect-error - tailwind-config-viewer does not have correct types
    const createServer = await import('tailwind-config-viewer/server/index.js').then(r => r.default || r) as any
    const viewerDevMiddleware = createServer({ tailwindConfigProvider: () => options, routerPrefix: route }).asMiddleware()

    addDevServerHandler({ route, handler: viewerDevMiddleware })
  },
})
```

## `useNitro`

Returns the Nitro instance.

::warning
You can call `useNitro()` only after `ready` hook.
::

::note
Changes to the Nitro instance configuration are not applied.
::

### Usage

```ts
import { defineNuxtModule, useNitro } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('ready', () => {
      const nitro = useNitro()
      // Do something with Nitro instance
    })
  },
})
```

### Type

```ts
function useNitro (): Nitro
```

## `tryUseNitro`

Returns the Nitro instance, or `undefined` when there is none.

There is no Nitro instance before the `ready` hook has run, and none at all when the
configured [`server.builder`](https://nuxt.com/docs/4.x/api/nuxt-config#builder-1) does not use Nitro, such as a
builder that outputs a client-only SPA. Use this rather than `useNitro()` for anything that
should keep working without a server: server routes, route rules and prerendering are all
absent in that case.

### Usage

```ts
import { defineNuxtModule, tryUseNitro } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('ready', () => {
      const nitro = tryUseNitro()
      if (!nitro) {
        // no server: skip anything that would only run there
        return
      }
    })
  },
})
```

### Type

```ts
function tryUseNitro (): Nitro | undefined
```

## `addNitroPlugin`

Add plugin to extend Nitro's runtime behavior.

::note
This was named `addServerPlugin` before Nuxt v4.6.
::

::tip
You can read more about Nitro plugins in the [Nitro documentation](https://nitro.build/guide/plugins).
::

::warning
It is necessary to explicitly import `defineNitroPlugin` from `nitropack/runtime` within your plugin file. The same requirement applies to utilities such as `useRuntimeConfig`.
::

### Usage

```tstwoslash
import { addNitroPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addNitroPlugin(resolve('./runtime/plugin.ts'))
  },
})
```

### Type

```ts
function addNitroPlugin (plugin: string | { nitro2?: string, nitro3?: string }): void
```

### Parameters

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        plugin
      </code>
    </td>
    
    <td>
      <code>
        string | { nitro2?: string, nitro3?: string }
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Path to the plugin, or one path per nitro major for a module shipping an implementation for each. The plugin must export a default function that accepts the Nitro instance as an argument.
    </td>
  </tr>
</tbody>
</table>

### Example

::code-group
```ts [module.ts]
import { addNitroPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addNitroPlugin(resolve('./runtime/plugin.ts'))
  },
})
```

```ts [runtime/plugin.ts]
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    console.log('on request', event.path)
  })

  nitroApp.hooks.hook('beforeResponse', (event, { body }) => {
    console.log('on response', event.path, { body })
  })

  nitroApp.hooks.hook('afterResponse', (event, { body }) => {
    console.log('on after response', event.path, { body })
  })
})
```
::

## `addPrerenderRoutes`

Add routes to be prerendered to Nitro.

### Usage

```ts
import { addPrerenderRoutes, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-sitemap',
    configKey: 'sitemap',
  },
  defaults: {
    sitemapUrl: '/sitemap.xml',
    prerender: true,
  },
  setup (options) {
    if (options.prerender) {
      addPrerenderRoutes(options.sitemapUrl)
    }
  },
})
```

### Type

```ts
function addPrerenderRoutes (routes: string | string[]): void
```

### Parameters

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        routes
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          string[]
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      A route or an array of routes to prerender.
    </td>
  </tr>
</tbody>
</table>

## `addServerImports`

Add imports to the server. It makes your imports available in Nitro without the need to import them manually.

::warning
If you want to provide a utility that works in both server and client contexts and is usable in the [`shared/`](https://nuxt.com/docs/4.x/directory-structure/shared) directory, the function must be imported from the same source file for both [`addImports`](https://nuxt.com/docs/4.x/api/kit/autoimports#addimports) and `addServerImports` and should have identical signature. That source file should not import anything context-specific (i.e., Nitro context, Nuxt app context) or else it might cause errors during type-checking.
::

### Usage

```tstwoslash
import { addServerImports, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options) {
    const names = [
      'useStoryblok',
      'useStoryblokApi',
      'useStoryblokBridge',
      'renderRichText',
      'RichTextSchema',
    ]

    names.forEach(name =>
      addServerImports({ name, as: name, from: '@storyblok/vue' }),
    )
  },
})
```

### Type

```ts
function addServerImports (dirs: NuxtImport | NuxtImport[]): void
```

### Parameters

`imports`: An object or an array of objects with the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        name
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Import name to be detected.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        from
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Module specifier to import from.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        priority
      </code>
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Priority of the import; if multiple imports have the same name, the one with the highest priority will be used.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        disabled
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If this import is disabled.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        meta
      </code>
    </td>
    
    <td>
      <code>
        Record<string, any>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Metadata of the import.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        type
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If this import is a pure type import.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        typeFrom
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Use this as the <code>
        from
      </code>
      
       value when generating type declarations.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        as
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Import as this name.
    </td>
  </tr>
</tbody>
</table>

## `addServerImportsDir`

Add a directory to be scanned for auto-imports by Nitro.

### Usage

```tstwoslash
import { addServerImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  setup (options) {
    const { resolve } = createResolver(import.meta.url)
    addServerImportsDir(resolve('./runtime/server/composables'))
  },
})
```

### Type

```ts
function addServerImportsDir (dirs: string | string[], opts: { prepend?: boolean }): void
```

### Parameters

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        dirs
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          string[]
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      A directory or an array of directories to register to be scanned by Nitro.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        opts
      </code>
    </td>
    
    <td>
      <code>
        { prepend?: boolean }
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Options for the import directory. If <code>
        prepend
      </code>
      
       is <code>
        true
      </code>
      
      , the directory is added to the beginning of the scan list.
    </td>
  </tr>
</tbody>
</table>

### Example

You can use `addServerImportsDir` to add a directory to be scanned by Nitro. This is useful when you want Nitro to auto-import functions from a custom server directory.

::code-group
```ts [module.ts]twoslash
import { addServerImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  setup (options) {
    const { resolve } = createResolver(import.meta.url)
    addServerImportsDir(resolve('./runtime/server/composables'))
  },
})
```

```ts [runtime/server/composables/index.ts]twoslash
export function useApiSecret () {
  const { apiSecret } = useRuntimeConfig()
  return apiSecret
}
```
::

You can then use the `useApiSecret` function in your server code:

```ts [runtime/server/api/hello.ts]twoslash
const useApiSecret = (): string => ''
// ---cut---
export default defineEventHandler(() => {
  const apiSecret = useApiSecret()
  // Do something with the apiSecret
})
```

## `addServerScanDir`

Add directories to be scanned by Nitro. It will check for subdirectories, which will be registered
just like the `~~/server` folder is.

::note
Only `~~/server/api`, `~~/server/routes`, `~~/server/middleware`, and `~~/server/utils` are scanned.
::

### Usage

```tstwoslash
import { addServerScanDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  setup (options) {
    const { resolve } = createResolver(import.meta.url)
    addServerScanDir(resolve('./runtime/server'))
  },
})
```

### Type

```ts
function addServerScanDir (dirs: string | string[], opts: { prepend?: boolean }): void
```

### Parameters

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        dirs
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          string[]
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      A directory or an array of directories to register to be scanned for by Nitro as server dirs.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        opts
      </code>
    </td>
    
    <td>
      <code>
        { prepend?: boolean }
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Options for the import directory. If <code>
        prepend
      </code>
      
       is <code>
        true
      </code>
      
      , the directory is added to the beginning of the scan list.
    </td>
  </tr>
</tbody>
</table>

### Example

You can use `addServerScanDir` to add a directory to be scanned by Nitro. This is useful when you want to add a custom server directory.

::code-group
```ts [module.ts]twoslash
import { addServerScanDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  setup (options) {
    const { resolve } = createResolver(import.meta.url)
    addServerScanDir(resolve('./runtime/server'))
  },
})
```

```ts [runtime/server/utils/index.ts]twoslash
export function hello () {
  return 'Hello from server utils!'
}
```
::

You can then use the `hello` function in your server code.

```ts [runtime/server/api/hello.ts]twoslash
function hello () {
  return 'Hello from server utils!'
}
// ---cut---
export default defineEventHandler(() => {
  return hello() // Hello from server utils!
})
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/nitro.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
