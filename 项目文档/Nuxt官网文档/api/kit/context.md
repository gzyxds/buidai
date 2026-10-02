---
title: "Context"
description: "Nuxt Kit provides a set of utilities to help you work with context."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/context"
---
# Context

> Nuxt Kit provides a set of utilities to help you work with context.

Nuxt modules allow you to enhance Nuxt's capabilities. They offer a structured way to keep your code organized and modular. If you're looking to break down your module into smaller components, Nuxt offers the `useNuxt` and `tryUseNuxt` functions. These functions enable you to conveniently access the Nuxt instance from the context without having to pass it as an argument.

::note
When you're working with the `setup` function in Nuxt modules, Nuxt is already provided as the second argument. This means you can access it directly without needing to call `useNuxt()`.
::

## `useNuxt`

Get the Nuxt instance from the context. It will throw an error if Nuxt is not available.

### Usage

```ts
import { useNuxt } from '@nuxt/kit'

const setupSomeFeature = () => {
  const nuxt = useNuxt()

  // You can now use the nuxt instance
  console.log(nuxt.options)
}
```

### Type

```tstwoslash
// @errors: 2391
import type { Nuxt } from '@nuxt/schema'
// ---cut---
function useNuxt (): Nuxt
```

### Return Value

The `useNuxt` function returns the Nuxt instance, which contains all the options and methods available in Nuxt.

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
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      <code>
        NuxtOptions
      </code>
    </td>
    
    <td>
      The resolved Nuxt configuration.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        hooks
      </code>
    </td>
    
    <td>
      <code>
        NuxtHookRegistry<NuxtHooks>
      </code>
    </td>
    
    <td>
      The Nuxt hook system. Allows registering and listening to lifecycle events.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        hook
      </code>
    </td>
    
    <td>
      <code>
        (name: string, (...args: any[]) => Promise<void> | void) => () => void
      </code>
    </td>
    
    <td>
      Shortcut for <code>
        nuxt.hooks.hook
      </code>
      
      . Registers a single callback for a specific lifecycle hook.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        callHook
      </code>
    </td>
    
    <td>
      <code>
        (name: string, ...args: any[]) => Promise<any>
      </code>
    </td>
    
    <td>
      Shortcut for <code>
        nuxt.hooks.callHook
      </code>
      
      . Triggers a lifecycle hook manually and runs all registered callbacks.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        addHooks
      </code>
    </td>
    
    <td>
      <code>
        (configHooks: NuxtNestedHooks) => () => void
      </code>
    </td>
    
    <td>
      Shortcut for <code>
        nuxt.hooks.addHooks
      </code>
      
      . Registers multiple hooks at once.
    </td>
  </tr>
</tbody>
</table>

### Example

::code-group
```ts [setupTranspilation.ts]twoslash
import { useNuxt } from '@nuxt/kit'

export const setupTranspilation = () => {
  const nuxt = useNuxt()

  if (nuxt.options.builder === '@nuxt/webpack-builder') {
    nuxt.options.build.transpile ||= []
    nuxt.options.build.transpile.push('xstate')
  }
}
```

```ts [module.ts]twoslash
// @module: esnext
// @filename: setupTranspilation.ts
export const setupTranspilation = () => {}
// @filename: module.ts
import { defineNuxtModule } from '@nuxt/kit'
// ---cut---
import { setupTranspilation } from './setupTranspilation'

export default defineNuxtModule({
  setup () {
    setupTranspilation()
  },
})
```
::

## `tryUseNuxt`

Get the Nuxt instance from the context. It will return `null` if Nuxt is not available.

### Usage

```tstwoslash
import { tryUseNuxt } from '@nuxt/kit'

function setupSomething () {
  const nuxt = tryUseNuxt()

  if (nuxt) {
    // You can now use the nuxt instance
    console.log(nuxt.options)
  } else {
    console.log('Nuxt is not available')
  }
}
```

### Type

```tstwoslash
// @errors: 2391
import type { Nuxt } from '@nuxt/schema'
// ---cut---
function tryUseNuxt (): Nuxt | null
```

### Return Value

The `tryUseNuxt` function returns the Nuxt instance if available, or `null` if Nuxt is not available.

The Nuxt instance as described in the `useNuxt` section.

### Example

::code-group
```ts [requireSiteConfig.ts]twoslash
declare module '@nuxt/schema' {
  interface NuxtOptions {
    siteConfig: SiteConfig
  }
}
// ---cut---
import { tryUseNuxt } from '@nuxt/kit'

interface SiteConfig {
  title?: string
}

export const requireSiteConfig = (): SiteConfig => {
  const nuxt = tryUseNuxt()
  if (!nuxt) {
    return {}
  }
  return nuxt.options.siteConfig
}
```

```ts [module.ts]twoslash
// @module: esnext
// @filename: requireSiteConfig.ts
interface SiteConfig {
  title?: string
}
export const requireSiteConfig = (): SiteConfig => {
  return {}
}
// @filename: module.ts
// ---cut---
import { defineNuxtModule, useNuxt } from '@nuxt/kit'
import { requireSiteConfig } from './requireSiteConfig'

export default defineNuxtModule({
  setup (_, nuxt) {
    const config = requireSiteConfig()
    nuxt.options.app.head.title = config.title
  },
})
```
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/context.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
